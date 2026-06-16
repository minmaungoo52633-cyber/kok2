// countryData_Part5.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၀ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၅)
export const SUPPORTED_COUNTRIES_PART5 = [
    'SK', 'SI', 'HR', 'BG', 'UA', 'LT', 'LV', 'EE', 'BY', 'MD'
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART5 = {
    'SK': ['Bratislava', 'Košice', 'Prešov', 'Žilina', 'Nitra', 'Banská Bystrica', 'Trnava', 'Martin', 'Poprad', 'Trenčín'],
    'SI': ['Ljubljana', 'Maribor', 'Celje', 'Kranj', 'Koper', 'Novo Mesto', 'Velenje', 'Ptuj', 'Trbovlje', 'Kamnik'],
    'HR': ['Zagreb', 'Split', 'Rijeka', 'Osijek', 'Zadar', 'Pula', 'Karlovac', 'Varaždin', 'Šibenik', 'Dubrovnik'],
    'BG': ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven', 'Sliven', 'Dobrich', 'Shumen'],
    'UA': ['Kyiv', 'Kharkiv', 'Odesa', 'Dnipro', 'Donetsk', 'Lviv', 'Zaporizhzhia', 'Kryvyi Rih', 'Mykolaiv', 'Mariupol'],
    'LT': ['Vilnius', 'Kaunas', 'Klaipėda', 'Šiauliai', 'Panevėžys', 'Alytus', 'Marijampolė', 'Mažeikiai', 'Jonava', 'Utena'],
    'LV': ['Riga', 'Daugavpils', 'Liepāja', 'Jelgava', 'Jūrmala', 'Ventspils', 'Rēzekne', 'Valmiera', 'Ogre', 'Tukums'],
    'EE': ['Tallinn', 'Tartu', 'Narva', 'Pärnu', 'Kohtla-Järve', 'Viljandi', 'Rakvere', 'Maardu', 'Kuressaare', 'Sillamäe'],
    'BY': ['Minsk', 'Gomel', 'Mogilev', 'Vitebsk', 'Grodno', 'Brest', 'Bobruisk', 'Baranovichi', 'Pinsk', 'Orsha'],
    'MD': ['Chișinău', 'Tiraspol', 'Bălți', 'Tighina', 'Rîbnița', 'Cahul', 'Ungheni', 'Soroca', 'Orhei', 'Comrat'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART5 = {
    'SK': ['Bratislava Region', 'Košice Region', 'Prešov Region', 'Žilina Region', 'Nitra Region', 'Banská Bystrica Region', 'Trnava Region', 'Trenčín Region'],
    'SI': ['Central Slovenia', 'Gorizia', 'Carniola', 'Drava', 'Carinthia', 'Savinja', 'Littoral-Inner Carniola', 'Lower Sava', 'Southeast Slovenia', 'Mura'],
    'HR': ['City of Zagreb', 'Split-Dalmatia County', 'Primorje-Gorski Kotar County', 'Osijek-Baranja County', 'Zadar County', 'Vukovar-Syrmia County', 'Istria County', 'Dubrovnik-Neretva County', 'Varaždin County', 'Međimurje County'],
    'BG': ['Sofia City Province', 'Plovdiv Province', 'Varna Province', 'Burgas Province', 'Blagoevgrad Province', 'Stara Zagora Province', 'Veliko Tarnovo Province', 'Pleven Province', 'Sliven Province', 'Pazardzhik Province'],
    'UA': ['Kyiv City', 'Kyiv Oblast', 'Kharkiv Oblast', 'Odesa Oblast', 'Dnipropetrovsk Oblast', 'Lviv Oblast', 'Zaporizhzhia Oblast', 'Donetsk Oblast', 'Kirovohrad Oblast', 'Mykolaiv Oblast'],
    'LT': ['Vilnius County', 'Kaunas County', 'Klaipėda County', 'Šiauliai County', 'Panevėžys County', 'Alytus County', 'Marijampolė County', 'Telšiai County', 'Utena County', 'Tauragė County'],
    'LV': ['Riga Region', 'Latgale', 'Zemgale', 'Kurzeme', 'Vidzeme'],
    'EE': ['Harju County', 'Tartu County', 'Ida-Viru County', 'Pärnu County', 'Lääne-Viru County', 'Rapla County', 'Võru County', 'Saare County', 'Viljandi County', 'Jõgeva County'],
    'BY': ['Minsk Region', 'Gomel Region', 'Mogilev Region', 'Vitebsk Region', 'Grodno Region', 'Brest Region'],
    'MD': ['Chișinău', 'Bălți', 'Cahul District', 'Hîncești District', 'Ialoveni District', 'Orhei District', 'Soroca District', 'Strășeni District', 'Ungheni District', 'Gagauzia'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART5 = {
    'SK': () => `${Math.floor(Math.random() * (99999 - 80000 + 1)) + 80000}`, // 5 digits
    'SI': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'HR': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'BG': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'UA': () => `${Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000}`, // Fixed: Removed leading zero from 01000
    'LT': () => {
        const firstTwo = Math.floor(Math.random() * (99 - 1 + 1)) + 1; // Fixed: Removed leading zero from 01
        const lastThree = Math.floor(Math.random() * (999 - 1 + 1)) + 1; // Fixed: Removed leading zero from 001
        return `${firstTwo < 10 ? '0' + firstTwo : firstTwo}${lastThree < 100 ? '0' : ''}${lastThree < 10 ? '0' + lastThree : lastThree}`;
    }, // LT-XXXXX
    'LV': () => `LV-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // LV-XXXX
    'EE': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'BY': () => `${Math.floor(Math.random() * (249999 - 210000 + 1)) + 210000}`, // 6 digits
    'MD': () => {
        const prefixes = ['MD-20', 'MD-31', 'MD-36', 'MD-48', 'MD-51'];
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${Math.floor(Math.random() * (999 - 1 + 1)) + 1}`; // Fixed: Removed leading zero from 001
    }, // MD-XXXX
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART5 = {
    'SK': () => `+421 9${Math.floor(Math.random() * (99 - 0 + 1)) + 0} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`, // Fixed: Removed leading zero from 00
    'SI': () => `+386 4${Math.floor(Math.random() * (1 - 0 + 1)) + 0} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`, // Fixed: Removed leading zero from 0
    'HR': () => `+385 9${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'BG': () => `+359 8${Math.floor(Math.random() * (9 - 7 + 1)) + 7}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'UA': () => `+380 9${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'LT': () => `+370 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'LV': () => `+371 2${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'EE': () => `+372 5${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'BY': () => `+375 29 ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (99 - 10 + 1)) + 10}-${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'MD': () => `+373 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART5 = {
    'SK': ['Adam', 'Ema', 'Jakub', 'Sofia', 'Samuel', 'Nina', 'Michal', 'Natália', 'Tomáš', 'Viktória'],
    'SI': ['Luka', 'Ema', 'Filip', 'Mia', 'Nik', 'Zala', 'Jan', 'Sara', 'Žiga', 'Lana'],
    'HR': ['Luka', 'Mia', 'David', 'Lucija', 'Jakov', 'Nika', 'Ivan', 'Ema', 'Filip', 'Sara'],
    'BG': ['Georgi', 'Maria', 'Alexander', 'Victoria', 'Nikolai', 'Gergana', 'Ivan', 'Alexandra', 'Dimitar', 'Yoanna'],
    'UA': ['Oleksandr', 'Sofia', 'Maksym', 'Anastasiia', 'Artem', 'Solomiia', 'Vladyslav', 'Maria', 'Danylo', 'Anna'],
    'LT': ['Lukas', 'Emilija', 'Matas', 'Gabija', 'Nojus', 'Kamilė', 'Benas', 'Ugnė', 'Jokūbas', 'Austėja'],
    'LV': ['Roberts', 'Emīlija', 'Gustavs', 'Alise', 'Kārlis', 'Elza', 'Oskars', 'Paula', 'Artūrs', 'Patrīcija'],
    'EE': ['Rasmus', 'Mia', 'Oliver', 'Sofia', 'Sebastian', 'Hanna', 'Markus', 'Emily', 'Robin', 'Laura'],
    'BY': ['Artyom', 'Sofia', 'Ivan', 'Maria', 'Maxim', 'Anastasia', 'Alexander', 'Anna', 'Dmitry', 'Victoria'],
    'MD': ['Maxim', 'Anastasia', 'Alexandru', 'Maria', 'David', 'Sofia', 'Daniel', 'Victoria', 'Gabriel', 'Daria'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART5 = {
    'SK': ['Varga', 'Horváth', 'Kováč', 'Nagy', 'Balog', 'Szabó', 'Tóth', 'Molnár', 'Novák', 'Lukáč'],
    'SI': ['Novak', 'Horvat', 'Kovačič', 'Zupančič', 'Krajnc', 'Maček', 'Kovač', 'Mlakar', 'Kos', 'Petek'],
    'HR': ['Horvat', 'Kovačević', 'Marić', 'Knežević', 'Vuković', 'Marković', 'Perić', 'Babić', 'Jurić', 'Novak'],
    'BG': ['Ivanov', 'Georgiev', 'Petrov', 'Nikolova', 'Popova', 'Dimitrov', 'Stoianova', 'Mihailov', 'Vasileva', 'Stefanov'],
    'UA': ['Shevchenko', 'Boyko', 'Kovalenko', 'Bondarenko', 'Tkachenko', 'Koval', 'Melnyk', 'Savchenko', 'Kravchenko', 'Polishchuk'],
    'LT': ['Kazlauskas', 'Jankauskas', 'Petrauskas', 'Stankevičius', 'Vasiliauskas', 'Žukauskas', 'Butkus', 'Paulauskas', 'Urbonas', 'Katkus'],
    'LV': ['Bērziņš', 'Kalniņš', 'Ozoliņš', 'Jansons', 'Liepiņš', 'Krūmiņš', 'Vītols', 'Balodis', 'Eglītis', 'Zariņš'],
    'EE': ['Tamm', 'Saar', 'Mägi', 'Kukk', 'Kask', 'Sepp', 'Kuusk', 'Ivanov', 'Rebane', 'Pärn'],
    'BY': ['Ivanov', 'Petrov', 'Smirnov', 'Kozlov', 'Novikov', 'Volkov', 'Zaitsev', 'Kuznetsov', 'Morozov', 'Sokolov'],
    'MD': ['Popa', 'Rusu', 'Ciobanu', 'Cebotari', 'Turcanu', 'Botnari', 'Rotaru', 'Lungu', 'Cojocaru', 'Guțu'],
};
