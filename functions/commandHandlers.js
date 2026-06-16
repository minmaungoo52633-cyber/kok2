// commandHandlers.js
// This file contains functions that handle specific Telegram bot commands.

import { 
    sendMessage, 
    checkUrlSafety, 
    fetchExchangeRates,
    getMe,
    getChatMember,
    restrictChatMember,
    unbanChatMember,
    unrestrictChatMember,
    kickChatMember
} from './telegramApiHelpers';
import { 
    isUserAdmin, 
    getUserInfoDetails, 
    getWarnings, 
    setWarning, 
    clearWarnings,
    getAdminIds, // handleListAdminCommand အတွက် လိုအပ်ပါသည်။
    getAdminNames, // handleListAdminCommand အတွက် လိုအပ်ပါသည်။
    isUserOwner // handleListAdminCommand အတွက် လိုအပ်ပါသည်။
} from './userManagementFunctions'; 
import { 
    getMMKOffset,
    setMMKOffset,
    getTHBOffset,
    setTHBOffset
} from './forexKvInteractions';
import {
    GOOGLE_SAFE_BROWSING_API_KEY,
    FIXED_ACCOUNT_CREATION_DATES,
    OWNER_ADMIN_IDS // handleListAdminCommand အတွက် လိုအပ်ပါသည်။
} from './constants';
import { generateFakeAddress, getSupportedCountries } from './fakeAddressGenerator'; // New import for fake address generation


/**
 * Extracts a URL from a given text.
 * @param {string} text - The text to extract the URL from.
 * @returns {string|null} - The first found URL, or null if none.
 */
function extractUrl(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const matches = text.match(urlRegex);
    return matches && matches.length > 0 ? matches[0] : null;
}

/**
 * Handles the /checkurl command.
 * Allows an admin to check the safety of a URL.
 * Supports providing URL as an argument or replying to a message containing a URL.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleCheckUrlCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id.toString(); // Convert to string for consistency
    const fromUser = message.from;
    const args = message.text.split(' ');
    const replyToMessage = message.reply_to_message;

    // Admin check is done in _middleware.js before calling this function.

    let urlToCheck = null;

    if (replyToMessage && replyToMessage.text) {
        urlToCheck = extractUrl(replyToMessage.text);
    } else if (args.length > 1) {
        urlToCheck = extractUrl(args[1]); // Assume the URL is the second argument
    }

    if (!urlToCheck) {
        await sendMessage(token, chatId, "အသုံးပြုပုံ: <code>/checkurl &lt;url&gt;</code> (သို့) URL ပါသော message ကို reply လုပ်ပြီး <code>/checkurl</code>.", 'HTML', null, botKeyValue);
        return;
    }

    await sendMessage(token, chatId, `🌐 URL <b>${urlToCheck}</b> ကို စစ်ဆေးနေပါသည်။ ခဏစောင့်ပါ။`, 'HTML', null, botKeyValue);

    const safetyReport = await checkUrlSafety(urlToCheck, GOOGLE_SAFE_BROWSING_API_KEY);

    let responseText = `<b>URL Safety Report for:</b> <code>${urlToCheck}</code>\n\n`;

    if (safetyReport.isSafe) {
        // Changed to English
        responseText += "✅ <b>Safe.</b> No suspicious activities found in this URL.";
    } else {
        responseText += "🚨 <b>Potentially Dangerous.</b> The following threats were found in this URL:\n";
        // Sanitize threat names just in case they contain characters that break HTML parse_mode
        safetyReport.threats.forEach(threat => {
            const sanitizedThreat = threat.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            responseText += `  - <b>${sanitizedThreat.replace(/_/g, ' ').toLowerCase()}</b>\n`;
        });
        // Changed to English
        responseText += "\n<b>Warning:</b> Avoid accessing this URL.";
    }

    await sendMessage(token, chatId, responseText, 'HTML', null, botKeyValue);
}

/**
 * Handles the /forex command to fetch real-time exchange rates.
 * Supports: /forex <amount> <from_currency> to <to_currency>
 * Example: /forex 100 USD to MMK
 * Supported ASEAN currencies: THB, MMK, SGD, MYR, IDR, PHP, VND, KHR, LAK, BND, USD (for conversion)
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object. 
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleForexCommand(message, token, env, botKeyValue) { 
    const chatId = message.chat.id;
    const args = message.text.split(' ');

    if (args.length < 5 || args[3].toLowerCase() !== 'to') {
        await sendMessage(token, chatId, "အသုံးပြုပုံ: <code>/forex &lt;amount&gt; &lt;from_currency&gt; to &lt;to_currency&gt;</code>\nဥပမာ: <code>/forex 100 USD to MMK</code>", 'HTML', null, botKeyValue);
        return;
    }

    const amount = parseFloat(args[1]); // Ensure amount is parsed correctly without commas

    const fromCurrency = args[2].toUpperCase();
    const toCurrency = args[4].toUpperCase();

    if (isNaN(amount) || amount <= 0) {
        await sendMessage(token, chatId, "ပမာဏသည် မှန်ကန်သော ဂဏန်းဖြစ်ရပါမည်။", 'HTML', null, botKeyValue);
        return;
    }

    // Define supported ASEAN currencies
    const supportedCurrencies = ['THB', 'MMK', 'SGD', 'MYR', 'IDR', 'PHP', 'VN', 'KHR', 'LA', 'BN', 'USD']; // Changed to 2-letter country codes for consistency

    if (!supportedCurrencies.includes(fromCurrency) || !supportedCurrencies.includes(toCurrency)) {
        await sendMessage(token, chatId, `လက်ခံသော ငွေကြေးများမှာ: ${supportedCurrencies.join(', ')} ဖြစ်ပါသည်။`, 'HTML', null, botKeyValue);
        return;
    }

    await sendMessage(token, chatId, `🔄 ${amount.toLocaleString()} ${fromCurrency} ကို ${toCurrency} သို့ ပြောင်းလဲနေပါသည်။ ခဏစောင့်ပါ။`, 'HTML', null, botKeyValue);

    const exchangeRateData = await fetchExchangeRates(fromCurrency, amount, toCurrency);

    if (exchangeRateData && exchangeRateData.rate && exchangeRateData.convertedAmount) {
        // Extract date and time for separate display
        // Example: "7/23/2025, 1:33:27 AM"
        const lastUpdateDate = new Date(exchangeRateData.lastUpdate);
        const datePart = lastUpdateDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }); // MM/DD/YYYY
        const timePart = lastUpdateDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }); // HH:MM:SS AM/PM

        let responseText = "";
        
        // Handle THB to MMK conversion (with MMK offset and both lines)
        if (fromCurrency === 'THB' && toCurrency === 'MMK') {
            const globalConvertedAmountRounded = Math.round(exchangeRateData.convertedAmount);
            const globalConvertedAmountFormatted = globalConvertedAmountRounded.toLocaleString();
            
            let estimatedConvertedAmount = exchangeRateData.convertedAmount;
            const mmkOffset = await getMMKOffset(env);
            if (mmkOffset !== 0) {
                const offsetAmount = amount * mmkOffset; 
                estimatedConvertedAmount += offsetAmount;
            }
            estimatedConvertedAmount = Math.round(estimatedConvertedAmount);
            const estimatedConvertedAmountFormatted = estimatedConvertedAmount.toLocaleString();

            responseText = `
<b>📊Global Currency Market:</b>
     
     <b>${amount.toLocaleString()} ${fromCurrency}</b> = <b>${globalConvertedAmountFormatted} ${toCurrency}</b>
━━━━━━━━━━━━━━━━━
<b>📊Estimated Rate:</b> 
     
    <b>${amount.toLocaleString()} ${fromCurrency}</b> = <b>${estimatedConvertedAmountFormatted} ${toCurrency}</b> 
 ━━━━━━━━━━━━━━━━━
(update: ${datePart})
(${timePart})
            `;
        } 
        // Handle MMK to THB conversion (with THB offset and ONLY Estimated Rate)
        else if (fromCurrency === 'MMK' && toCurrency === 'THB') {
            let estimatedConvertedAmount = exchangeRateData.convertedAmount;
            const thbOffset = await getTHBOffset(env);
            if (thbOffset !== 0) {
                const offsetAmount = amount * thbOffset; 
                estimatedConvertedAmount += offsetAmount; 
            }
            estimatedConvertedAmount = Math.round(estimatedConvertedAmount);
            const estimatedConvertedAmountFormatted = estimatedConvertedAmount.toLocaleString();

            responseText = `
<b>📊Estimated Rate:</b> 
     
    <b>${amount.toLocaleString()} ${fromCurrency}</b> = <b>${estimatedConvertedAmountFormatted} ${toCurrency}</b> 
 ━━━━━━━━━━━━━━━━━
(update: ${datePart})
(${timePart})
            `;
        }
        // Handle other currency conversions (only Global Currency Market, no offset)
        else {
            const globalConvertedAmountRounded = Math.round(exchangeRateData.convertedAmount);
            const globalConvertedAmountFormatted = globalConvertedAmountRounded.toLocaleString();
            responseText = `
<b>📊Global Currency Market:</b>
     
     <b>${amount.toLocaleString()} ${fromCurrency}</b> = <b>${globalConvertedAmountFormatted} ${toCurrency}</b>
━━━━━━━━━━━━━━━━━
(update: ${datePart})
(${timePart})
            `;
        }
        
        await sendMessage(token, chatId, responseText, 'HTML', null, botKeyValue);
    } else {
        await sendMessage(token, chatId, `❌ ${fromCurrency} မှ ${toCurrency} သို့ ငွေလဲနှုန်းကို ရယူ၍ မရပါ။ ကျေးဇူပု၍ ခဏအကြာတွင် ထပ်မံကြိုးစားပါ။`, 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /setmmkoffset command to set the MMK conversion offset.
 * Only accessible by bot admins.
 * Usage: /setmmkoffset <offset_value>
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleSetMMKOffsetCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id.id;
    const fromUser = message.from;
    const args = message.text.split(' ');

    // Admin check is done in _middleware.js before calling this function.

    if (args.length < 2) {
        await sendMessage(token, chatId, "အသုံးပြုပုံ: <code>/setmmkoffset &lt;offset_value&gt;</code>\nဥပမာ: <code>/setmmkoffset 32.40</code>", 'HTML', null, botKeyValue);
        return;
    }

    const offsetValue = parseFloat(args[1]);

    if (isNaN(offsetValue)) {
        await sendMessage(token, chatId, "Offset Value သည် မှန်ကန်သော ဂဏန်းဖြစ်ရပါမည်။", 'HTML', null, botKeyValue);
        return;
    }

    const success = await setMMKOffset(offsetValue, env);

    if (success) {
        await sendMessage(token, chatId, `✅ MMK Offset ကို <b>${offsetValue}</b> သို့ သတ်မှတ်ပြီးပါပြီ။`, 'HTML', null, botKeyValue);
    } else {
        await sendMessage(token, chatId, "❌ MMK Offset သတ်မှတ်ရာတွင် အမှားအယွင်းရှိခဲ့ပါသည်။", 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /setthboffset command to set the THB conversion offset.
 * Only accessible by bot admins.
 * Usage: /setthboffset <offset_value>
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleSetTHBOffsetCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');

    // Admin check is done in _middleware.js before calling this function.

    if (args.length < 2) {
        await sendMessage(token, chatId, "အသုံးပြုပုံ: <code>/setthboffset &lt;offset_value&gt;</code>\nဥပမာ: <code>/setthboffset -0.0024</code>", 'HTML', null, botKeyValue);
        return;
    }

    const offsetValue = parseFloat(args[1]);

    if (isNaN(offsetValue)) {
        await sendMessage(token, chatId, "Offset Value သည် မှန်ကန်သော ဂဏန်းဖြစ်ရပါမည်။", 'HTML', null, botKeyValue);
        return;
    }

    const success = await setTHBOffset(offsetValue, env);

    if (success) {
        await sendMessage(token, chatId, `✅ THB Offset ကို <b>${offsetValue}</b> သို့ သတ်မှတ်ပြီးပါပြီ။`, 'HTML', null, botKeyValue);
    } else {
        await sendMessage(token, chatId, "❌ THB Offset သတ်မှတ်ရာတွင် အမှားအယွင်းရှိခဲ့ပါသည်။", 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /start command.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleStartCommand(message, token, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    console.log(`[handleStartCommand] Received /start command from chat ${chatId}.`);
    await sendMessage(token, chatId, `မင်္ဂလာပါ <a href="tg://user?id=${fromUser.id}">${fromUser.first_name}</a>! ကျွန်တော်က Link Checker Bot ပါ။ Group Member ရဲ့ အမည်ပြောင်းလဲမှု၊ မလိုလားအပ်တဲ့ လင့်ခ်တွေနဲ့ အခြားသတင်းအချက်အလက်တွေကို စစ်ဆေးပေးပါမယ်။`, 'HTML', null, botKeyValue);
}

/**
 * Handles the /ban command when replying to a message.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleReplyBanCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');
    const replyToMessage = message.reply_to_message;
    console.log(`[handleReplyBanCommand] Received reply-based /ban command from user ${fromUser.id} in chat ${chatId}.`);

    // Only check if sender is a BOT ADMIN (hardcoded owner OR dynamic admin)
    const isBotAdmin = await isUserAdmin(fromUser.id, env);
    if (!isBotAdmin) {
        console.log(`[handleReplyBanCommand] User ${fromUser.id} is not a bot admin. Sending unauthorized message.`);
        await sendMessage(token, chatId, `<a href="tg://user?id=${fromUser.id}"><b>${fromUser.first_name || fromUser.username || "အမည်မသိသူ"}</b></a> <b>🚫 Hey Gay 🤭 This Is Not For You This Only For Males👱‍♂️</b>`, 'HTML', null, botKeyValue);
        return;
    }

    if (!replyToMessage) { console.log("[handleReplyBanCommand] No reply message. Prompting user."); await sendMessage(token, chatId, "Please reply to the user's message you want to ban or restrict.", 'HTML', null, botKeyValue); return; }
    const targetUser = replyToMessage.from;
    const targetUserId = targetUser.id;
    console.log(`[handleReplyBanCommand] Target user for ban/mute: ${targetUserId}.`);
    const botInfo = await getMe(token, botKeyValue);
    if (botInfo && targetUserId === botInfo.id) { console.log("[handleReplyBanCommand] Attempted to ban/mute self. Ignoring."); await sendMessage(token, chatId, "I cannot ban myself.", 'HTML', null, botKeyValue); return; }
    
    // Check if target user is a bot admin (don't allow banning other bot admins)
    const isTargetBotAdmin = await isUserAdmin(targetUserId, env);
    if (isTargetBotAdmin) { console.log(`[handleReplyBanCommand] Target user ${targetUserId} is a bot admin. Cannot ban/mute.`); await sendMessage(token, chatId, "I cannot ban a bot administrator.", 'HTML', null, botKeyValue); return; }

    let banDuration = null;
    let actionType = "ban";
    if (args.length > 1) {
        const timeArg = args[1].toLowerCase();
        console.log(`[handleReplyBanCommand] Time argument: ${timeArg}`);
        switch (timeArg) {
            case '3m': banDuration = 3 * 60; break; case '5m': banDuration = 5 * 60; break; case '15m': banDuration = 15 * 60; break; case '30m': banDuration = 30 * 60; break; case '1h': banDuration = 1 * 60 * 60; break;
            case '1d': banDuration = 1 * 24 * 60 * 60; break; case '3d': banDuration = 3 * 24 * 60 * 60; break; case '1mo': case '1month': banDuration = 30 * 24 * 60 * 60; break;
            case 'permanent': banDuration = 0; break;
            case 'mute':
                actionType = "mute";
                if (args.length > 2) {
                    const muteTimeArg = args[2].toLowerCase();
                    console.log(`[handleReplyBanCommand] Mute duration argument: ${muteTimeArg}`);
                    switch (muteTimeArg) {
                        case '3m': banDuration = 3 * 60; break; case '5m': banDuration = 5 * 60; break; case '15m': banDuration = 15 * 60; break; case '30m': banDuration = 30 * 60; break; case '1h': banDuration = 1 * 60 * 60; break;
                        case '1d': banDuration = 1 * 24 * 60 * 60; break; case '3d': banDuration = 3 * 24 * 60 * 60; break; case '1mo': case '1month': banDuration = 30 * 24 * 60 * 60; break;
                        default: await sendMessage(token, chatId, "Invalid mute duration. Usage: <code>/ban mute [3m|5m|15m|30m|1h|1d|3d|1mo]</code> (reply to user)", 'HTML', null, botKeyValue); return;
                    }
                } else { banDuration = 0; } break;
            default: await sendMessage(token, chatId, "Invalid command. Usage: <code>/ban [3m|...|permanent|mute [duration]]</code> (reply to user)", 'HTML', null, botKeyValue); return;
        }
    } else { banDuration = 0; actionType = "ban"; }

    const targetUserDisplayName = targetUser.first_name || targetUser.username || "အမည်မသိအသုံးပြုသူ";
    const userLink = `<a href='tg://user?id=${targetUserId}'><b>${targetUserDisplayName}</b></a>`;
    let messageText = "";
    let inlineKeyboard = null;
    let success = false;
    const untilDate = banDuration ? Math.floor(Date.now() / 1000) + banDuration : 0;

    if (actionType === "mute") {
        console.log(`[handleReplyBanCommand] Performing mute action for ${targetUserId}. Duration: ${banDuration}s`);
        success = await restrictChatMember(token, chatId, targetUserId, untilDate, botKeyValue);
        if (success) { messageText = `✅ ${userLink} has been restricted from sending messages.`; if (banDuration > 0) { messageText += ` for ${args.length > 2 ? args[2] : args[1]}.`; } else { messageText += ` (Permanent)`; } }
        else { messageText = `Failed to restrict ${userLink}. Please check bot's permissions.`; }
    } else {
        console.log(`[handleReplyBanCommand] Performing ban action for ${targetUserId}. Duration: ${banDuration}s`);
        success = await kickChatMember(token, chatId, targetUserId, untilDate, botKeyValue);
        if (success) { if (banDuration === 0) { messageText = `🚫 ${userLink} has been permanently banned from the group.`; } else { messageText += `🚫 ${userLink} has been banned for ${args.length > 1 ? args[1] : 'the specified duration'}.`; } }
        else { messageText = `Failed to ban ${userLink}. Please check bot's permissions.`; }
    }
    if (success) {
        const callbackActionType = actionType === "mute" ? "unmute" : "unban";
        inlineKeyboard = { inline_keyboard: [[{ text: "✅ Unban / Unmute", callback_data: `${callbackActionType}_${targetUserId}_${chatId}` }]] };
        await sendMessage(token, chatId, messageText, 'HTML', inlineKeyboard, botKeyValue);
    } else { await sendMessage(token, chatId, messageText, 'HTML', null, botKeyValue); }
}

/**
 * Handles the /ban <user_id> command.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleBanCommandById(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');
    console.log(`[handleBanCommandById] Received /ban <user_id> command from user ${fromUser.id} in chat ${chatId}.`);

    // Only check if sender is a BOT ADMIN (hardcoded owner OR dynamic admin)
    const isBotAdmin = await isUserAdmin(fromUser.id, env);
    if (!isBotAdmin) {
        console.log(`[handleBanCommandById] User ${fromUser.id} is not a bot admin. Sending unauthorized message.`);
        await sendMessage(token, chatId, `<a href="tg://user?id=${fromUser.id}"><b>${fromUser.first_name || fromUser.username || "အမည်မသိသူ"}</b></a> <b>🚫 Hey Gay 🤭 This Is Not For You This Only For Males👱‍♂️</b>`, 'HTML', null, botKeyValue);
        return;
    }

    if (args.length !== 2 || isNaN(parseInt(args[1]))) {
        await sendMessage(token, chatId, "Usage: <code>/ban &lt;user_id&gt;</code> or reply to a message with <code>/ban [duration]</code>.", 'HTML', null, botKeyValue);
        return;
    }

    const targetUserId = parseInt(args[1]);
    
    const botInfo = await getMe(token, botKeyValue);
    if (botInfo && targetUserId === botInfo.id) {
        await sendMessage(token, chatId, "I cannot ban myself.", 'HTML', null, botKeyValue);
        return;
    }

    // Check if target user is a bot admin (don't allow banning other bot admins)
    const isTargetBotAdmin = await isUserAdmin(targetUserId, env);
    if (isTargetBotAdmin) {
        await sendMessage(token, chatId, "I cannot ban a bot administrator.", 'HTML', null, botKeyValue);
        return;
    }

    let targetUserDisplayName = `User ${targetUserId}`;
    try {
        const targetUserInfo = await getChatMember(token, chatId, targetUserId, botKeyValue);
        if (targetUserInfo && targetUserInfo.user) {
            targetUserDisplayName = targetUserInfo.user.first_name || targetUserInfo.user.username || targetUserDisplayName;
        }
    } catch (e) {
        console.warn(`[handleBanCommandById] Could not get user info for ID ${targetUserId}. Using default display name.`);
    }

    const userLink = `<a href='tg://user?id=${targetUserId}'><b>${targetUserDisplayName}</b></a>`;
    let messageText = "";
    let inlineKeyboard = null;
    let success = false;

    console.log(`[handleBanCommandById] Performing permanent ban action for user ID: ${targetUserId}.`);
    success = await kickChatMember(token, chatId, targetUserId, 0, botKeyValue);

    if (success) {
        messageText = `🚫 ${userLink} ကို group မှ အပြီးတိုင် ban လုပ်လိုက်ပါပြီ။`;
        inlineKeyboard = { inline_keyboard: [[{ text: "✅ Unban", callback_data: `unban_${targetUserId}_${chatId}` }]] };
        await sendMessage(token, chatId, messageText, 'HTML', inlineKeyboard, botKeyValue);
    } else {
        messageText = `❌ ${userLink} ကို ban လုပ်မရပါ။ Bot ၏ Permissions ကို စစ်ဆေးပါ။`;
        await sendMessage(token, chatId, messageText, 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /mute <user_id> command.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleMuteCommandById(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');
    console.log(`[handleMuteCommandById] Received /mute <user_id> command from user ${fromUser.id} in chat ${chatId}.`);

    // Only check if sender is a BOT ADMIN (hardcoded owner OR dynamic admin)
    const isBotAdmin = await isUserAdmin(fromUser.id, env);
    if (!isBotAdmin) {
        console.log(`[handleMuteCommandById] User ${fromUser.id} is not a bot admin. Sending unauthorized message.`);
        await sendMessage(token, chatId, `<a href="tg://user?id=${fromUser.id}"><b>${fromUser.first_name || fromUser.username || "အမည်မသိသူ"}</b></a> <b>🚫 Hey Gay 🤭 This Is Not For You This Only For Males👱‍♂️</b>`, 'HTML', null, botKeyValue);
        return;
    }

    if (args.length !== 2 || isNaN(parseInt(args[1])) && !message.reply_to_message) { 
        await sendMessage(token, chatId, "Usage: <code>/mute &lt;user_id&gt;</code> or reply to a message with <code>/ban mute [duration]</code>.", 'HTML', null, botKeyValue);
        return;
    }

    const targetUserId = parseInt(args[1]) || (message.reply_to_message ? message.reply_to_message.from.id : null); 
    if (!targetUserId) {
        await sendMessage(token, chatId, "Invalid user ID or no replied message. Usage: <code>/mute &lt;user_id&gt;</code> or reply to a message with <code>/ban mute [duration]</code>.", 'HTML', null, botKeyValue);
        return;
    }
    
    const botInfo = await getMe(token, botKeyValue);
    if (botInfo && targetUserId === botInfo.id) {
        await sendMessage(token, chatId, "I cannot mute myself.", 'HTML', null, botKeyValue);
        return;
    }

    // Check if target user is a bot admin (don't allow muting other bot admins)
    const isTargetBotAdmin = await isUserAdmin(targetUserId, env);
    if (isTargetBotAdmin) {
        await sendMessage(token, chatId, "I cannot mute a bot administrator.", 'HTML', null, botKeyValue);
        return;
    }

    let targetUserDisplayName = `User ${targetUserId}`;
    try {
        const targetUserInfo = await getChatMember(token, chatId, targetUserId, botKeyValue);
        if (targetUserInfo && targetUserInfo.user) {
            targetUserDisplayName = targetUserInfo.user.first_name || targetUserInfo.user.username || targetUserDisplayName;
        }
    } catch (e) {
        console.warn(`[handleMuteCommandById] Could not get user info for ID ${targetUserId}. Using default display name.`);
    }

    const userLink = `<a href='tg://user?id=${targetUserId}'><b>${targetUserDisplayName}</b></a>`;
    let messageText = "";
    let inlineKeyboard = null;
    let success = false;

    console.log(`[handleMuteCommandById] Performing permanent mute action for user ID: ${targetUserId}.`);
    success = await restrictChatMember(token, chatId, targetUserId, 0, botKeyValue);

    if (success) {
        messageText = `✅ ${userLink} ကို အချိန်အကန့်အသတ်မရှိ စာပို့ခွင့် ပိတ်လိုက်ပါပြီ။`;
        inlineKeyboard = { inline_keyboard: [[{ text: "✅ Unmute", callback_data: `unmute_${targetUserId}_${chatId}` }]] };
        await sendMessage(token, chatId, messageText, 'HTML', inlineKeyboard, botKeyValue);
    } else {
        messageText = `❌ ${userLink} ကို mute လုပ်မရပါ။ Bot ၏ Permissions ကို စစ်ဆေးပါ။`;
        await sendMessage(token, chatId, messageText, 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /id command, showing the sender's ID or replied user's ID.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleIdCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;

    console.log(`[handleIdCommand] Received /id command from user ${fromUser.id} in chat ${chatId}.`);

    let targetUser = fromUser; 

    if (targetUser) {
        const { text, reply_markup } = await getUserInfoDetails(targetUser, chatId, token, env, botKeyValue); 
        await sendMessage(token, chatId, text, 'HTML', reply_markup, botKeyValue);
    } else {
        await sendMessage(token, chatId, "Could not retrieve your information.", 'HTML', null, botKeyValue);
    }
}

/**
 * Calculates the age of an account from a given creation date up to the current date.
 * Accounts for Thai timezone (UTC+7) for daily rollover.
 * @param {Date} creationDate - The Date object representing the account creation date.
 * @returns {string} - Formatted string like "X years, Y months, Z days".
 */
function calculateAccountAge(creationDate) {
    const now = new Date();

    // Adjust 'now' to Thai timezone (UTC+7) for day rollover
    const thaiTimeOffset = 7 * 60; // 7 hours in minutes
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // Convert to UTC
    const thaiDate = new Date(utcNow + (thaiTimeOffset * 60 * 1000)); // Add Thai offset

    // Adjust 'creationDate' to Thai timezone for comparison
    const utcCreation = creationDate.getTime() + (creationDate.getTimezoneOffset() * 60 * 1000);
    const thaiCreationDate = new Date(utcCreation + (thaiTimeOffset * 60 * 1000));

    let years = thaiDate.getFullYear() - thaiCreationDate.getFullYear();
    let months = thaiDate.getMonth() - thaiCreationDate.getMonth();
    let days = thaiDate.getDate() - thaiCreationDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(thaiDate.getFullYear(), thaiDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }

    return `${years} years, ${months} months, ${days} days`;
}

/**
 * Estimates the account creation date based on user ID using predefined reference points.
 * Prioritizes fixed dates for known owner IDs.
 * @param {number} userId - The user's Telegram ID.
 * @returns {Date} - Estimated or fixed account creation date.
 */
function estimateAccountCreationDate(userId) {
    // Use fixed date for owner IDs if available
    if (FIXED_ACCOUNT_CREATION_DATES[userId]) {
        console.log(`[estimateAccountCreationDate] Using fixed creation date for owner ID: ${userId}`);
        return FIXED_ACCOUNT_CREATION_DATES[userId];
    }

    // Reference points for Telegram user ID growth (approximate)
    const referencePoints = [
        { id: 100000000, date: new Date(2013, 7, 1) },   // August 1, 2013
        { id: 1273841502, date: new Date(2020, 7, 13) }, // August 13, 2020
        { id: 1500000000, date: new Date(2021, 4, 1) },  // May 1, 2021
        { id: 2000000000, date: new Date(2022, 11, 1) }, // December 1, 2022
        { id: 2500000000, date: new Date(2024, 6, 1) },  // July 1, 2024
        // Add more reference points as needed for better accuracy
    ];

    // Find the closest reference point
    let closestPoint = referencePoints[0];
    let minDiff = Math.abs(userId - closestPoint.id);

    for (let i = 1; i < referencePoints.length; i++) {
        const diff = Math.abs(userId - referencePoints[i].id);
        if (diff < minDiff) {
            minDiff = diff;
            closestPoint = referencePoints[i];
        }
    }

    // Estimate based on average ID growth rate (approximate, can be refined)
    // This is a very rough linear estimation. For better accuracy, a more complex model
    // or more data points would be needed.
    const averageIdsPerDay = 20000000; // This is a rough estimate, can be refined
    const idDifference = userId - closestPoint.id;
    const daysDifference = idDifference / averageIdsPerDay;

    const estimatedDate = new Date(closestPoint.date.getTime() + daysDifference * 24 * 60 * 60 * 1000);
    return estimatedDate;
}

/**
 * Handles the /info command (owner/admin only).
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleInfoCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');

    console.log(`[handleInfoCommand] Received /info command from user ${fromUser.id} in chat ${chatId}.`);

    // Check if sender is a BOT ADMIN (hardcoded owner OR dynamic admin)
    const isBotAdmin = await isUserAdmin(fromUser.id, env); 
    if (!isBotAdmin) {
        const userLinkDisplayName = fromUser.first_name || fromUser.username || "အမည်မသိသူ";
        const userLink = `<a href="tg://user?id=${fromUser.id}"><b>${userLinkDisplayName}</b></a>`;
        await sendMessage(token, chatId, `${userLink} <b>🚫 "I'm sorry, you don't have permission to use this command! Please request what you need! 👱‍♂️</b>`, 'HTML', null, botKeyValue);
        return;
    }

    let targetUser = null;
    let targetChatIdForLink = chatId; 

    if (message.reply_to_message) {
        // Case 1: Reply to a message
        targetUser = message.reply_to_message.from;
        targetChatIdForLink = message.reply_to_message.chat.id;
        console.log(`[handleInfoCommand] Target is replied user: ${targetUser.id}`);
    } else if (args.length > 1) {
        // Case 2: Command with argument (user ID or username)
        const query = args[1].replace('@', ''); 
        let userIdToFetch = null;

        if (!isNaN(parseInt(query))) {
            userIdToFetch = parseInt(query);
            console.log(`[handleInfoCommand] Target is user ID from argument: ${userIdToFetch}`);
        } else {
            console.warn(`[handleInfoCommand] Username resolution via Bot API is limited. Attempting getChatMember for username: ${query}`);
            try {
                const chatMember = await getChatMember(token, chatId, query, botKeyValue); 
                if (chatMember && chatMember.user) {
                    userIdToFetch = chatMember.user.id;
                    console.log(`[handleInfoCommand] Resolved username ${query} to user ID: ${userIdToFetch}`);
                } else {
                    console.warn(`[handleInfoCommand] Could not resolve username ${query} in current chat.`);
                }
            } catch (e) {
                console.error(`[handleInfoCommand] Error fetching user info for ID ${userIdToFetch}: ${e.message}`);
            }
        }

        if (userIdToFetch) {
            try {
                // Get user info using getChatMember, assuming they are in the current chat
                targetUser = await getChatMember(token, chatId, userIdToFetch, botKeyValue);
                if (targetUser) {
                    targetUser = targetUser.user; 
                }
            } catch (e) {
                console.error(`[handleInfoCommand] Error fetching user info for ID ${userIdToFetch}: ${e.message}`);
                await sendMessage(token, chatId, "User information not found or bot does not have access.", 'HTML', null, botKeyValue);
                return;
            }
        } else {
            await sendMessage(token, chatId, "Invalid user ID or username provided. Usage: <code>/info</code>, <code>/info &lt;user_id&gt;</code>, or reply to a message.", 'HTML', null, botKeyValue);
            return;
        }

    } else {
        // Case 3: Command without arguments or reply -> info about the sender
        targetUser = message.from;
        console.log(`[handleInfoCommand] Target is sender: ${targetUser.id}`);
    }

    if (targetUser) {
        // Pass env to getUserInfoDetails to allow checking bot admin status for the target user
        const { text, reply_markup } = await getUserInfoDetails(targetUser, targetChatIdForLink, token, env, botKeyValue); 
        await sendMessage(token, chatId, text, 'HTML', reply_markup, botKeyValue);
    } else {
        await sendMessage(token, chatId, "Could not determine target for info command. Please specify a user, reply to a message, or provide a username/ID.", 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /warn command.
 * Allows an admin to issue a warning to a user.
 * Supports replying to a message or providing user ID as argument.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleWarnCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');
    const replyToMessage = message.reply_to_message;

    // Admin check is done in _middleware.js before calling this function.

    let targetUserId = null;
    let reason = '';

    if (replyToMessage) {
        targetUserId = replyToMessage.from.id;
        reason = args.slice(1).join(' ').trim(); // Reason is after the command
    } else if (args.length >= 3) { // /warn <user_id> <reason...>
        targetUserId = parseInt(args[1]);
        reason = args.slice(2).join(' ').trim();
    } else {
        await sendMessage(token, chatId, "အသုံးပြုပုံ: <code>/warn &lt;user_id&gt; &lt;reason&gt;</code> (သို့) user ရဲ့ message ကို reply လုပ်ပြီး <code>/warn &lt;reason&gt;</code>.", 'HTML', null, botKeyValue);
        return;
    }

    if (isNaN(targetUserId)) {
        await sendMessage(token, chatId, "User ID သည် ဂဏန်းဖြစ်ရပါမည်။", 'HTML', null, botKeyValue);
        return;
    }

    if (!reason) {
        await sendMessage(token, chatId, "Warning အတွက် အကြောင်းပြချက် ထည့်သွင်းပေးပါ။", 'HTML', null, botKeyValue);
        return;
    }
    
    const botInfo = await getMe(token, botKeyValue);
    if (botInfo && targetUserId === botInfo.id) {
        await sendMessage(token, chatId, "Bot ကို Warning ပေး၍ မရပါ။", 'HTML', null, botKeyValue);
        return;
    }

    // Prevent admin from warning other admins
    const isTargetBotAdmin = await isUserAdmin(targetUserId, env);
    if (isTargetBotAdmin) {
        await sendMessage(token, chatId, "Admin ကို Warning ပေး၍ မရပါ။", 'HTML', null, botKeyValue);
        return;
    }

    const success = await setWarning(targetUserId, fromUser.id, reason, env);
    let targetUserDisplayName = `User ${targetUserId}`;
    try {
        const targetUserInfo = await getChatMember(token, chatId, targetUserId, botKeyValue);
        if (targetUserInfo && targetUserInfo.user) {
            targetUserDisplayName = targetUserInfo.user.first_name || targetUserInfo.user.username || targetUserDisplayName;
        }
    } catch (e) {
        console.warn(`[handleWarnCommand] Could not get user info for ID ${targetUserId}. Using default display name.`);
    }

    if (success) {
        const warnings = await getWarnings(targetUserId, env);
        const warningCount = warnings ? warnings.length : 0;
        await sendMessage(token, chatId, `✅ User <a href="tg://user?id=${targetUserId}"><b>${targetUserDisplayName}</b></a> ကို Warning ပေးလိုက်ပါပြီ။ (စုစုပေါင်း: ${warningCount} ခု)\nအကြောင်းပြချက်: <i>${reason}</i>`, 'HTML', null, botKeyValue);
    } else {
        await sendMessage(token, chatId, `❌ User <a href="tg://user?id=${targetUserId}"><b>${targetUserDisplayName}</b></a> ကို Warning ပေး၍ မရပါ။`, 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /unwarn command.
 * Allows an admin to clear all warnings for a user.
 * Supports providing user ID as argument.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleUnwarnCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');

    // Admin check is done in _middleware.js before calling this function.

    let targetUserId = null;

    if (args.length === 2) { // /unwarn <user_id>
        targetUserId = parseInt(args[1]);
    } else {
        await sendMessage(token, chatId, "အသုံးပြုပုံ: <code>/unwarn &lt;user_id&gt;</code>.", 'HTML', null, botKeyValue);
        return;
    }

    if (isNaN(targetUserId)) {
        await sendMessage(token, chatId, "User ID သည် ဂဏန်းဖြစ်ရပါမည်။", 'HTML', null, botKeyValue);
        return;
    }
    
    const botInfo = await getMe(token, botKeyValue);
    if (botInfo && targetUserId === botInfo.id) {
        await sendMessage(token, chatId, "Bot ၏ Warning များကို ဖယ်ရှား၍ မရပါ။", 'HTML', null, botKeyValue);
        return;
    }

    const success = await clearWarnings(targetUserId, env);
    let targetUserDisplayName = `User ${targetUserId}`;
    try {
        const targetUserInfo = await getChatMember(token, chatId, targetUserId, botKeyValue);
        if (targetUserInfo && targetUserInfo.user) {
            targetUserDisplayName = targetUserInfo.user.first_name || targetUserInfo.user.username || targetUserDisplayName;
        }
    } catch (e) {
        console.warn(`[handleUnwarnCommand] Could not get user info for ID ${targetUserId}. Using default display name.`);
    }

    if (success) {
        await sendMessage(token, chatId, `✅ User <a href="tg://user?id=${targetUserId}"><b>${targetUserDisplayName}</b></a> ၏ Warning များအားလုံးကို ဖယ်ရှားလိုက်ပါပြီ။`, 'HTML', null, botKeyValue);
    } else {
        await sendMessage(token, chatId, `❌ User <a href="tg://user?id=${targetUserId}"><b>${targetUserDisplayName}</b></a> ၏ Warning များကို ဖယ်ရှား၍ မရပါ။`, 'HTML', null, botKeyValue);
    }
}

/**
 * Handles the /warnings command.
 * Allows an admin to view all warnings for a user.
 * Supports replying to a message or providing user ID as argument.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleWarningsCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;
    const fromUser = message.from;
    const args = message.text.split(' ');
    const replyToMessage = message.reply_to_message;

    // Admin check is done in _middleware.js before calling this function.

    let targetUserId = null;

    if (replyToMessage) {
        targetUserId = replyToMessage.from.id;
    } else if (args.length === 2) { // /warnings <user_id>
        targetUserId = parseInt(args[1]);
    } else {
        await sendMessage(token, chatId, "အသုံးပြုပုံ: <code>/warnings &lt;user_id&gt;</code> (သို့) user ရဲ့ message ကို reply လုပ်ပြီး <code>/warnings</code>.", 'HTML', null, botKeyValue);
        return;
    }

    if (isNaN(targetUserId)) {
        await sendMessage(token, chatId, "User ID သည် ဂဏန်းဖြစ်ရပါမည်။", 'HTML', null, botKeyValue);
        return;
    }

    let targetUserDisplayName = `User ${targetUserId}`;
    try {
        const targetUserInfo = await getChatMember(token, chatId, targetUserId, botKeyValue);
        if (targetUserInfo && targetUserInfo.user) {
            targetUserDisplayName = targetUserInfo.user.first_name || targetUserInfo.user.username || targetUserDisplayName;
        }
    } catch (e) {
        console.warn(`[handleWarningsCommand] Could not get user info for ID ${targetUserId}. Using default display name.`);
    }

    const warnings = await getWarnings(targetUserId, env);

    if (!warnings || warnings.length === 0) {
        await sendMessage(token, chatId, `User <a href="tg://user?id=${targetUserId}"><b>${targetUserDisplayName}</b></a> တွင် Warning မှတ်တမ်းများ မရှိပါ။`, 'HTML', null, botKeyValue);
        return;
    }

    let responseText = `<b>🚨 User <a href="tg://user?id=${targetUserId}"><b>${targetUserDisplayName}</b></a> ၏ Warning မှတ်တမ်းများ (စုစုပေါင်း: ${warnings.length} ခု):</b>\n\n`;
    warnings.forEach((warn, index) => {
        const warnDate = new Date(warn.timestamp).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        const warnTime = new Date(warn.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
        responseText += `<b>${index + 1}.</b> <b>Reason:</b> <i>${warn.reason}</i>\n`;
        responseText += `   <b>Admin:</b> <code>${warn.admin_id}</code>\n`; // Optionally resolve admin name here
        responseText += `   <b>Date:</b> ${warnDate} ${warnTime}\n\n`;
    });

    await sendMessage(token, chatId, responseText, 'HTML', null, botKeyValue);
}

/**
 * Handles the /listadmin command.
 * Allows anyone to view the current list of dynamic admins.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {object} env - Cloudflare Environment object (must have ADMIN_IDS_KV binding).
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleListAdminCommand(message, token, env, botKeyValue) {
    const chatId = message.chat.id;

    const dynamicAdminIds = await getAdminIds(env);
    const dynamicAdminNames = await getAdminNames(env);

    let adminListText = "<b>👑 Bot Admins:</b>\n\n";

    // Add hardcoded owners first
    adminListText += "<b>Owners (Hardcoded):</b>\n";
    if (OWNER_ADMIN_IDS.length > 0) {
        for (const ownerId of OWNER_ADMIN_IDS) {
            let ownerName = `User_${ownerId}`;
            // Try to find name from dynamicAdminNames if already fetched or from message sender if available
            const foundName = dynamicAdminNames.find(admin => admin.id === ownerId);
            if (foundName) {
                ownerName = foundName.name;
            } else if (message.from.id === ownerId) {
                ownerName = message.from.first_name || message.from.username || ownerName;
            }
            adminListText += `- <a href='tg://user?id=${ownerId}'><b>${ownerName}</b></a> (<code>${ownerId}</code>)\n`;
        }
    } else {
        adminListText += "  <i>No hardcoded owners defined.</i>\n";
    }

    adminListText += "\n<b>Admins (Dynamically Added):</b>\n";
    if (dynamicAdminIds.length > 0) {
        const nonOwnerAdmins = dynamicAdminNames.filter(admin => !OWNER_ADMIN_IDS.includes(admin.id));
        if (nonOwnerAdmins.length > 0) {
            for (const admin of nonOwnerAdmins) {
                adminListText += `- <a href='tg://user?id=${admin.id}'><b>${admin.name}</b></a> (<code>${admin.id}</code>)\n`;
            }
        } else {
            adminListText += "  <i>No dynamically added admins.</i>\n";
        }
    } else {
        adminListText += "  <i>No dynamically added admins.</i>\n";
    }

    await sendMessage(token, chatId, adminListText, 'HTML', null, botKeyValue);
}

/**
 * Maps 2-letter country codes to full country names.
 * @param {string} countryCode - The 2-letter country code (e.g., 'US').
 * @returns {string} - The full country name or the original code if not found.
 */
function getCountryName(countryCode) {
    const countryNames = {
        'US': 'United States',
        'UK': 'United Kingdom',
        'CA': 'Canada',
        'AU': 'Australia',
        'DE': 'Germany',
        'FR': 'France',
        'JP': 'Japan',
        'MM': 'Myanmar',
        'TH': 'Thailand',
        'SG': 'Singapore',
        'MY': 'Malaysia',
        'ID': 'Indonesia',
        'PH': 'Philippines',
        'VN': 'Vietnam',
        'LA': 'Laos',
        'KH': 'Cambodia',
        'BN': 'Brunei',
        'CN': 'China',
        'IN': 'India',
        'BR': 'Brazil',
        'RU': 'Russia',
        'ZA': 'South Africa',
        'EG': 'Egypt',
        'NG': 'Nigeria',
        'MX': 'Mexico',
        'AR': 'Argentina',
        'ES': 'Spain',
        'IT': 'Italy',
        'KR': 'South Korea',
        'NZ': 'New Zealand',
        'IE': 'Ireland',
        'SE': 'Sweden',
        'CH': 'Switzerland',
        'AT': 'Austria',
        'BE': 'Belgium',
        'NL': 'Netherlands',
        'FI': 'Finland',
        'NO': 'Norway',
        'DK': 'Denmark',
        'PT': 'Portugal',
        'GR': 'Greece',
        'PL': 'Poland',
        'CZ': 'Czech Republic',
        'HU': 'Hungary',
        'RO': 'Romania',
        'TR': 'Turkey',
        'SA': 'Saudi Arabia',
        'AE': 'United Arab Emirates',
        'QA': 'Qatar',
        'KW': 'Kuwait',
        'OM': 'Oman',
        'BH': 'Bahrain',
        'JO': 'Jordan',
        'LB': 'Lebanon',
        'SY': 'Syria',
        'IQ': 'Iraq',
        'IR': 'Iran',
        'PK': 'Pakistan',
        'BD': 'Bangladesh',
        'LK': 'Sri Lanka',
        'NP': 'Nepal',
        'AF': 'Afghanistan',
        'UZ': 'Uzbekistan',
        'KZ': 'Kazakhstan',
        'UA': 'Ukraine',
        'CL': 'Chile',
        'CO': 'Colombia',
        'PE': 'Peru',
        'VE': 'Venezuela',
        'EC': 'Ecuador',
        'DZ': 'Algeria',
        'MA': 'Morocco',
        'KE': 'Kenya',
        'ET': 'Ethiopia',
        'GH': 'Ghana',
        'CI': 'Ivory Coast',
        'SN': 'Senegal',
        'CM': 'Cameroon',
        'CD': 'Democratic Republic of the Congo',
        'AO': 'Angola',
        'MZ': 'Mozambique',
        'ZM': 'Zambia',
        'ZW': 'Zimbabwe',
        'TZ': 'Tanzania',
        'UG': 'Uganda',
        'RW': 'Rwanda',
        'SD': 'Sudan',
        'SS': 'South Sudan',
        'SO': 'Somalia',
        'YE': 'Yemen',
    };
    return countryNames[countryCode] || countryCode; // Return full name or original code if not found
}

/**
 * Handles the /fakeaddress command.
 * Generates and sends a fake address for a specified country.
 * @param {object} message - Telegram Message object.
 * @param {string} token - Telegram Bot Token.
 * @param {string} botKeyValue - The BOT_DATA key for validation.
 */
export async function handleFakeAddressCommand(message, token, botKeyValue) {
    const chatId = message.chat.id;
    const args = message.text.split(' ');

    if (args.length < 2) {
        const supportedCountries = getSupportedCountries();
        const countryList = supportedCountries.map(code => `<code>${code}</code>`).join(', ');
        await sendMessage(token, chatId, `အသုံးပြုပုံ: <code>/fakeaddress &lt;country_code&gt;</code>\nဥပမာ: <code>/fakeaddress US</code>\n\nပံ့ပိုးထားသော နိုင်ငံများ: ${countryList}`, 'HTML', null, botKeyValue);
        return;
    }

    const countryCode = args[1].toUpperCase();
    const supportedCountries = getSupportedCountries();

    if (!supportedCountries.includes(countryCode)) {
        const countryList = supportedCountries.map(code => `<code>${code}</code>`).join(', ');
        await sendMessage(token, chatId, `❌ ပံ့ပိုးမထားသော နိုင်ငံကုဒ် <b>${countryCode}</b> ဖြစ်ပါသည်။\n\nပံ့ပိုးထားသော နိုင်ငံများ: ${countryList}`, 'HTML', null, botKeyValue);
        return;
    }

    const fakeAddress = generateFakeAddress(countryCode);
    const fullCountryName = getCountryName(countryCode); // Get full country name

    const responseText = `
<b>Generated Fake Address for ${fullCountryName}:</b>
━━━━━━━━━━━━━━━━━━━━
<b>๏ Full Name:</b> <code>${fakeAddress.fullName}</code>
<b>๏ Gender:</b> <code>${fakeAddress.gender}</code>
<b>๏ Date of Birth:</b> <code>${fakeAddress.dateOfBirth}</code>
<b>๏ Occupation:</b> <code>${fakeAddress.occupation}</code>
<b>๏ Company:</b> <code>${fakeAddress.company}</code>
<b>๏ Street Address:</b> <code>${fakeAddress.streetAddress}</code>
<b>๏ City/Town/Village:</b> <code>${fakeAddress.city}</code>
<b>๏ State/Province:</b> <code>${fakeAddress.state}</code>
<b>๏ Postal Code:</b> <code>${fakeAddress.zipCode}</code>
<b>๏ Country:</b> <code>${fullCountryName}</code>
<b>๏ Phone:</b> <code>${fakeAddress.phoneNumber}</code>
<b>๏ Email:</b> <code>${fakeAddress.email}</code>
<b>๏ Credit Card:</b> <code>${fakeAddress.creditCard}</code>
<b>๏ Exp. Date:</b> <code>${fakeAddress.expirationDate}</code>
<b>๏ Security Code:</b> <code>${fakeAddress.securityCode}</code>
━━━━━━━━━━━━━━━━━━━━
`;
    await sendMessage(token, chatId, responseText, 'HTML', null, botKeyValue);
}
