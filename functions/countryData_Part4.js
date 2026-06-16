// countryData_Part4.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၅ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၄)
export const SUPPORTED_COUNTRIES_PART4 = [
    'TR', 'SA', 'AE', 'QA', 'KW', 'OM', 'BH', 'JO', 'LB', 'SY', 'IQ', 'IR', 'PK', 'BD', 'LK'
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART4 = {
    'TR': ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana', 'Gaziantep', 'Konya', 'Antalya', 'Diyarbakır', 'Mersin'],
    'SA': ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam', 'Khobar', 'Taif', 'Tabuk', 'Buraydah', 'Abha'],
    'AE': ['Dubai', 'Abu Dhabi', 'Sharjah', 'Al Ain', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain', 'Khor Fakkan', 'Dibba Al-Hisn'],
    'QA': ['Doha', 'Al Rayyan', 'Umm Salal Mohammed', 'Al Wakrah', 'Al Khor', 'Dukhan', 'Lusail', 'Mesaieed', 'Al Ruwais', 'Al Shamal'],
    'KW': ['Kuwait City', 'Hawalli', 'Salmiya', 'Fahaheel', 'Jahra', 'Mangaf', 'Farwaniya', 'Ardiya', 'Sabah Al-Salem', 'Rumaithiya'],
    'OM': ['Muscat', 'Seeb', 'Salalah', 'Bawshar', 'Sohar', 'As Sifah', 'Nizwa', 'Rustaq', 'Sur', 'Ibri'],
    'BH': ['Manama', 'Riffa', 'Muharraq', 'Hamad Town', 'A\'ali', 'Isa Town', 'Sitra', 'Budaiya', 'Jidhafs', 'Al-Malikiyah'],
    'JO': ['Amman', 'Zarqa', 'Irbid', 'Russeifa', 'Salt', 'Aqaba', 'Madaba', 'Mafraq', 'Jerash', 'Ma\'an'],
    'LB': ['Beirut', 'Tripoli', 'Sidon', 'Tyre', 'Nabatieh', 'Jounieh', 'Zahle', 'Baalbek', 'Byblos', 'Batroun'],
    'SY': ['Damascus', 'Aleppo', 'Homs', 'Hama', 'Latakia', 'Deir ez-Zor', 'Raqqa', 'Al-Hasakah', 'Qamishli', 'Daraa'],
    'IQ': ['Baghdad', 'Mosul', 'Basra', 'Kirkuk', 'Erbil', 'Najaf', 'Karbala', 'Nasiriyah', 'Amara', 'Diwaniyah'],
    'IR': ['Tehran', 'Mashhad', 'Isfahan', 'Karaj', 'Shiraz', 'Tabriz', 'Qom', 'Ahvaz', 'Kermanshah', 'Urmia'],
    'PK': ['Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Hyderabad', 'Peshawar', 'Quetta', 'Islamabad', 'Sargodha'],
    'BD': ['Dhaka', 'Chittagong', 'Khulna', 'Rajshahi', 'Sylhet', 'Comilla', 'Rangpur', 'Mymensingh', 'Barisal', 'Jessore'],
    'LK': ['Colombo', 'Dehiwala-Mount Lavinia', 'Moratuwa', 'Sri Jayawardenepura Kotte', 'Negombo', 'Kandy', 'Kalmunai', 'Vavuniya', 'Galle', 'Trincomalee'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART4 = {
    'TR': ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Konya', 'Gaziantep', 'Şanlıurfa', 'Mersin'],
    'SA': ['Riyadh Province', 'Mecca Province', 'Eastern Province', 'Madinah Province', 'Qassim Province', 'Asir Province', 'Tabuk Province', 'Hail Province', 'Jizan Province', 'Najran Province'],
    'AE': ['Abu Dhabi', 'Dubai', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
    'QA': ['Al Rayyan', 'Doha', 'Al Wakrah', 'Umm Salal', 'Al Khor'],
    'KW': ['Al Asimah', 'Hawalli', 'Farwaniya', 'Mubarak Al-Kabeer', 'Ahmadi', 'Jahra'],
    'OM': ['Muscat Governorate', 'Dhofar Governorate', 'Al Batinah North Governorate', 'Al Batinah South Governorate', 'Al Buraimi Governorate', 'Al Wusta Governorate', 'Ad Dhahirah Governorate', 'Ash Sharqiyah North Governorate', 'Ash Sharqiyah South Governorate', 'Ad Dakhiliyah Governorate'],
    'BH': ['Capital Governorate', 'Muharraq Governorate', 'Northern Governorate', 'Southern Governorate'],
    'JO': ['Amman Governorate', 'Irbid Governorate', 'Zarqa Governorate', 'Balqa Governorate', 'Mafraq Governorate', 'Karak Governorate', 'Jerash Governorate', 'Ajloun Governorate', 'Aqaba Governorate', 'Ma\'an Governorate'],
    'LB': ['Beirut Governorate', 'Mount Lebanon Governorate', 'North Governorate', 'South Governorate', 'Nabatieh Governorate', 'Bekaa Governorate', 'Akkar Governorate', 'Baalbek-Hermel Governorate'],
    'SY': ['Damascus Governorate', 'Aleppo Governorate', 'Homs Governorate', 'Hama Governorate', 'Latakia Governorate', 'Deir ez-Zor Governorate', 'Raqqa Governorate', 'Al-Hasakah Governorate', 'Daraa Governorate', 'Idlib Governorate'],
    'IQ': ['Baghdad Governorate', 'Basra Governorate', 'Nineveh Governorate', 'Kirkuk Governorate', 'Dhi Qar Governorate', 'Anbar Governorate', 'Babil Governorate', 'Wasit Governorate', 'Salah ad Din Governorate', 'Diyala Governorate'],
    'IR': ['Tehran Province', 'Razavi Khorasan Province', 'Isfahan Province', 'Fars Province', 'Khuzestan Province', 'East Azerbaijan Province', 'Mazandaran Province', 'Kerman Province', 'Alborz Province', 'Gilan Province'],
    'PK': ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Gilgit-Baltistan', 'Azad Kashmir', 'Islamabad Capital Territory'],
    'BD': ['Dhaka Division', 'Chittagong Division', 'Khulna Division', 'Rajshahi Division', 'Sylhet Division', 'Barisal Division', 'Rangpur Division', 'Mymensingh Division'],
    'LK': ['Western Province', 'Central Province', 'Southern Province', 'North Western Province', 'North Central Province', 'Uva Province', 'Sabaragamuwa Province', 'Eastern Province', 'Northern Province'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART4 = {
    'TR': () => `${Math.floor(Math.random() * 99999)}`, // 5 digits
    'SA': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'AE': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits (PO Box usually)
    'QA': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits (PO Box usually)
    'KW': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits (PO Box usually)
    'OM': () => `${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`, // 3 digits (PO Box usually)
    'BH': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits (PO Box usually)
    'JO': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'LB': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'SY': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'IQ': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'IR': () => `${Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000}`, // 10 digits
    'PK': () => `${Math.floor(Math.random() * (99999 - 40000 + 1)) + 40000}`, // 5 digits
    'BD': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'LK': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART4 = {
    'TR': () => `+90 5${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'SA': () => `+966 5${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'AE': () => `+971 5${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'QA': () => `+974 5${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'KW': () => `+965 9${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'OM': () => `+968 9${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'BH': () => `+973 3${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'JO': () => `+962 7${Math.floor(Math.random() * (9 - 7 + 1)) + 7} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'LB': () => `+961 7${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'SY': () => `+963 9${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'IQ': () => `+964 7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'IR': () => `+98 9${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'PK': () => `+92 3${Math.floor(Math.random() * (4 - 0 + 1)) + 0}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'BD': () => `+880 1${Math.floor(Math.random() * (9 - 3 + 1)) + 3} ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'LK': () => `+94 7${Math.floor(Math.random() * (8 - 0 + 1)) + 0} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART4 = {
    'TR': ['Ayşe', 'Fatma', 'Emine', 'Hatice', 'Zeynep', 'Elif', 'Mustafa', 'Ahmet', 'Mehmet', 'Ali'],
    'SA': ['Mohammed', 'Fatima', 'Abdullah', 'Noura', 'Faisal', 'Sara', 'Khalid', 'Reem', 'Sultan', 'Lama'],
    'AE': ['Mohammed', 'Fatima', 'Ahmed', 'Mariam', 'Khalid', 'Salma', 'Saeed', 'Aisha', 'Hamad', 'Noor'],
    'QA': ['Ahmed', 'Fatima', 'Mohammed', 'Mariam', 'Khalid', 'Sara', 'Abdullah', 'Aisha', 'Ali', 'Noor'],
    'KW': ['Mohammed', 'Fatima', 'Ahmed', 'Mariam', 'Khalid', 'Sara', 'Abdullah', 'Aisha', 'Ali', 'Noor'],
    'OM': ['Ahmed', 'Fatima', 'Mohammed', 'Mariam', 'Khalid', 'Sara', 'Abdullah', 'Aisha', 'Ali', 'Noor'],
    'BH': ['Ahmed', 'Fatima', 'Mohammed', 'Mariam', 'Khalid', 'Sara', 'Abdullah', 'Aisha', 'Ali', 'Noor'],
    'JO': ['Ahmed', 'Fatima', 'Mohammad', 'Sara', 'Omar', 'Hana', 'Ali', 'Jana', 'Yousef', 'Leen'],
    'LB': ['Ali', 'Fatima', 'Hassan', 'Zeinab', 'Mohammad', 'Lynn', 'Hussein', 'Jana', 'Ahmad', 'Maria'],
    'SY': ['Ahmed', 'Fatima', 'Mohammad', 'Sara', 'Omar', 'Hana', 'Ali', 'Jana', 'Yousef', 'Leen'],
    'IQ': ['Ali', 'Fatima', 'Ahmed', 'Zahra', 'Mohammad', 'Noor', 'Hassan', 'Aisha', 'Hussein', 'Mariam'],
    'IR': ['Ali', 'Zahra', 'Mohammad', 'Fatemeh', 'Reza', 'Sara', 'Hossein', 'Maryam', 'Hassan', 'Mahsa'],
    'PK': ['Muhammad', 'Fatima', 'Ahmed', 'Aisha', 'Ali', 'Zainab', 'Omar', 'Hafsa', 'Usman', 'Khadija'],
    'BD': ['Md.', 'Fatema', 'Rahman', 'Akter', 'Hasan', 'Begum', 'Islam', 'Khatun', 'Ahmed', 'Chowdhury'],
    'LK': ['Nimal', 'Kamala', 'Bandara', 'Ranasinghe', 'Perera', 'Silva', 'Fernando', 'Gamage', 'Jayasinghe', 'Kumara'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART4 = {
    'TR': ['Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Çelik', 'Yıldız', 'Aslan', 'Can', 'Doğan', 'Kılıç'],
    'SA': ['Al-Qahtani', 'Al-Harbi', 'Al-Dossari', 'Al-Otaibi', 'Al-Mutairi', 'Al-Ghamdi', 'Al-Shehri', 'Al-Zahrani', 'Al-Shammari', 'Al-Anzi'],
    'AE': ['Al-Mansoori', 'Al-Nahyan', 'Al-Maktoum', 'Al-Qassimi', 'Al-Nuaimi', 'Al-Sharqi', 'Al-Mualla', 'Al-Hammadi', 'Al-Dhaheri', 'Al-Ketbi'],
    'QA': ['Al-Thani', 'Al-Marri', 'Al-Nuaimi', 'Al-Kubaisi', 'Al-Mohannadi', 'Al-Sulaiti', 'Al-Dosari', 'Al-Mannai', 'Al-Kaabi', 'Al-Abdulla'],
    'KW': ['Al-Sabah', 'Al-Ajmi', 'Al-Mutairi', 'Al-Rashidi', 'Al-Enezi', 'Al-Hajri', 'Al-Dossari', 'Al-Harbi', 'Al-Shammari', 'Al-Otaibi'],
    'OM': ['Al-Busaidi', 'Al-Balushi', 'Al-Maamari', 'Al-Harthi', 'Al-Hasani', 'Al-Riyami', 'Al-Farsi', 'Al-Abri', 'Al-Saidi', 'Al-Hinai'],
    'BH': ['Al-Khalifa', 'Al-Dosari', 'Al-Buainain', 'Al-Rumaihi', 'Al-Mohannadi', 'Al-Kaabi', 'Al-Mannai', 'Al-Sulaiti', 'Al-Marri', 'Al-Abdulla'],
    'JO': ['Al-Abbadi', 'Al-Hadid', 'Al-Majali', 'Al-Tarawneh', 'Al-Fayez', 'Al-Harahsheh', 'Al-Khateeb', 'Al-Shawabkeh', 'Al-Zoubi', 'Al-Smadi'],
    'LB': ['Khoury', 'Haddad', 'Sleiman', 'Aoun', 'Abi Khalil', 'Chamoun', 'Gemayel', 'Frangieh', 'Lahoud', 'Hariri'],
    'SY': ['Al-Ali', 'Al-Mohammad', 'Al-Ahmad', 'Al-Hassan', 'Al-Hussein', 'Al-Abdullah', 'Al-Omar', 'Al-Khalil', 'Al-Ibrahim', 'Al-Saleh'],
    'IQ': ['Al-Fatlawi', 'Al-Tamimi', 'Al-Dulaimi', 'Al-Jaf', 'Al-Hashemi', 'Al-Khafaji', 'Al-Musawi', 'Al-Sudani', 'Al-Shammari', 'Al-Zubaidi'],
    'IR': ['Mohammadi', 'Hosseini', 'Ahmadi', 'Karimi', 'Maleki', 'Mirzaei', 'Shahbazi', 'Nazari', 'Asadi', 'Abbasi'],
    'PK': ['Khan', 'Ali', 'Ahmed', 'Butt', 'Hussain', 'Shah', 'Malik', 'Akhtar', 'Chaudhry', 'Siddiqui'],
    'BD': ['Islam', 'Mia', 'Hossain', 'Akter', 'Rahman', 'Begum', 'Khan', 'Chowdhury', 'Ahmed', 'Sarkar'],
    'LK': ['Perera', 'Silva', 'Fernando', 'Bandara', 'Ranasinghe', 'Gamage', 'Jayasinghe', 'Kumara', 'Gunawardena', 'Wickramasinghe'],
};
