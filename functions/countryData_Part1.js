// countryData_Part1.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၅ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၁)
export const SUPPORTED_COUNTRIES_PART1 = [
    'US', 'UK', 'CA', 'AU', 'DE', 'FR', 'JP', 'MM', 'TH', 'SG', 'MY', 'ID', 'PH', 'VN', 'LA'
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART1 = {
    'US': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'],
    'UK': ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool', 'Bristol', 'Sheffield', 'Leeds', 'Edinburgh', 'Leicester'],
    'CA': ['Toronto', 'Montreal', 'Vancouver', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Halifax'],
    'AU': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Canberra', 'Newcastle', 'Wollongong', 'Geelong'],
    'DE': ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig'],
    'FR': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille'],
    'JP': ['Tokyo', 'Yokohama', 'Osaka', 'Nagoya', 'Sapporo', 'Fukuoka', 'Kobe', 'Kyoto', 'Kawasaki', 'Saitama'],
    'MM': ['Yangon', 'Mandalay', 'Naypyidaw', 'Mawlamyine', 'Bago', 'Pathein', 'Myitkyina', 'Taunggyi', 'Sittwe', 'Meiktila'],
    'TH': ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Hat Yai', 'Udon Thani', 'Nakhon Ratchasima', 'Surat Thani', 'Khon Kaen', 'Nakhon Si Thammarat'],
    'SG': ['Singapore'], // Singapore is a city-state
    'MY': ['Kuala Lumpur', 'George Town', 'Ipoh', 'Shah Alam', 'Petaling Jaya', 'Johor Bahru', 'Malacca City', 'Kota Kinabalu', 'Kuantan', 'Kuching'],
    'ID': ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang', 'Makassar', 'Palembang', 'Denpasar', 'Yogyakarta', 'Padang'],
    'PH': ['Manila', 'Quezon City', 'Davao City', 'Cebu City', 'Zamboanga City', 'Cagayan de Oro', 'Iloilo City', 'Bacolod', 'General Santos', 'Baguio'],
    'VN': ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Can Tho', 'Hai Phong', 'Bien Hoa', 'Nha Trang', 'Hue', 'Vung Tau', 'Quy Nhon'],
    'LA': ['Vientiane', 'Luang Prabang', 'Savannakhet', 'Pakse', 'Thakhek', 'Phonsavan', 'Sam Neua', 'Luang Namtha', 'Muang Xay', 'Phongsali'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART1 = {
    'US': ['California', 'New York', 'Texas', 'Florida', 'Illinois', 'Pennsylvania', 'Ohio', 'Georgia', 'North Carolina', 'Michigan'],
    'UK': ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    'CA': ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba', 'Saskatchewan', 'Nova Scotia', 'New Brunswick', 'Newfoundland and Labrador', 'Prince Edward Island'],
    'AU': ['New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Australian Capital Territory', 'Northern Territory'],
    'DE': ['Bavaria', 'North Rhine-Westphalia', 'Baden-Württemberg', 'Lower Saxony', 'Hesse', 'Saxony', 'Rhineland-Palatinate', 'Berlin', 'Schleswig-Holstein', 'Brandenburg'],
    'FR': ['Île-de-France', 'Auvergne-Rhône-Alpes', 'Nouvelle-Aquitaine', 'Occitanie', 'Hauts-de-France', 'Provence-Alpes-Côte d\'Azur', 'Grand Est', 'Pays de la Loire', 'Brittany', 'Normandy'],
    'JP': ['Tokyo', 'Osaka', 'Kanagawa', 'Aichi', 'Hokkaido', 'Fukuoka', 'Hyogo', 'Kyoto', 'Saitama', 'Chiba'],
    'MM': ['Yangon Region', 'Mandalay Region', 'Shan State', 'Rakhine State', 'Mon State', 'Kayin State', 'Kachin State', 'Sagaing Region', 'Magway Region', 'Ayeyarwady Region'],
    'TH': ['Bangkok', 'Chiang Mai', 'Phuket', 'Chonburi', 'Surat Thani', 'Nakhon Ratchasima', 'Khon Kaen', 'Songkhla', 'Udon Thani', 'Buriram'],
    'SG': [''], // Singapore does not have states/provinces
    'MY': ['Selangor', 'Johor', 'Perak', 'Kedah', 'Kelantan', 'Terengganu', 'Pahang', 'Negeri Sembilan', 'Malacca', 'Penang'],
    'ID': ['Jakarta', 'West Java', 'East Java', 'Central Java', 'North Sumatra', 'South Sulawesi', 'Lampung', 'Riau', 'West Sumatra', 'Banten'],
    'PH': ['Metro Manila', 'Central Luzon', 'CALABARZON', 'Western Visayas', 'Central Visayas', 'Davao Region', 'Northern Mindanao', 'SOCCSKSARGEN', 'Bicol Region', 'Eastern Visayas'],
    'VN': ['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Can Tho', 'Hai Phong', 'Bien Hoa', 'Nha Trang', 'Hue', 'Vung Tau', 'Quy Nhon'],
    'LA': ['Vientiane Province', 'Luang Prabang Province', 'Savannakhet Province', 'Champasak Province', 'Oudomxay Province', 'Phongsaly Province', 'Houaphanh Province', 'Xaisomboun Province', 'Attapeu Province', 'Bokeo Province'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART1 = {
    'US': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'UK': () => {
        const prefixes = ['SW1A', 'EC1A', 'WC2N'];
        const suffixes = ['AA', 'BB', 'CC'];
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${Math.floor(Math.random() * 9) + 1}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
    }, // Example UK format
    'CA': () => {
        const letters = ['A', 'B', 'C'];
        return `${letters[Math.floor(Math.random() * letters.length)]}${Math.floor(Math.random() * 9) + 1}${letters[Math.floor(Math.random() * letters.length)]} ${Math.floor(Math.random() * 9) + 1}${letters[Math.floor(Math.random() * letters.length)]}${Math.floor(Math.random() * 9) + 1}`;
    }, // Example Canadian format
    'AU': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'DE': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'FR': () => `${Math.floor(Math.random() * (95000 - 10000 + 1)) + 10000}`, // 5 digits
    'JP': () => `${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 3 digits - 4 digits
    'MM': () => `${Math.floor(Math.random() * (11999 - 10000 + 1)) + 10000}`, // 5 digits (e.g., Yangon 11011-11221)
    'TH': () => `${Math.floor(Math.random() * (96000 - 10000 + 1)) + 10000}`, // 5 digits (e.g., Bangkok 10100-10900)
    'SG': () => `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // 6 digits
    'MY': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'ID': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'PH': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'VN': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'LA': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART1 = {
    'US': () => `+1-${Math.floor(Math.random() * (999 - 200 + 1)) + 200}-${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'UK': () => `+44 ${Math.floor(Math.random() * (7999 - 7000 + 1)) + 7000} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'CA': () => `+1-${Math.floor(Math.random() * (999 - 200 + 1)) + 200}-${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'AU': () => `+61 4${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'DE': () => `+49 ${Math.floor(Math.random() * (179 - 150 + 1)) + 150} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'FR': () => `+33 6 ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'JP': () => `+81 ${Math.floor(Math.random() * (90 - 70 + 1)) + 70} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'MM': () => `+959 ${Math.floor(Math.random() * (999 - 200 + 1)) + 200}-${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // Myanmar mobile numbers
    'TH': () => `+66${Math.floor(Math.random() * (99 - 80 + 1)) + 80}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // Thailand mobile numbers
    'SG': () => `+65 ${Math.floor(Math.random() * (9999 - 8000 + 1)) + 8000} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'MY': () => `+60${Math.floor(Math.random() * (19 - 10 + 1)) + 10}-${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'ID': () => `+62${Math.floor(Math.random() * (899 - 800 + 1)) + 800}-${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'PH': () => `+639${Math.floor(Math.random() * (99 - 10 + 1)) + 10}-${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'VN': () => `+84${Math.floor(Math.random() * (99 - 30 + 1)) + 30}-${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'LA': () => `+85620${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART1 = {
    'US': ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Chris', 'Jessica', 'James', 'Ashley'],
    'UK': ['Oliver', 'Olivia', 'George', 'Amelia', 'Harry', 'Isla', 'Noah', 'Ava', 'Leo', 'Sophia'],
    'CA': ['Liam', 'Olivia', 'Noah', 'Emma', 'Oliver', 'Charlotte', 'William', 'Ava', 'Benjamin', 'Sophia'],
    'AU': ['Oliver', 'Charlotte', 'Noah', 'Olivia', 'William', 'Amelia', 'Leo', 'Isla', 'Jack', 'Mia'],
    'DE': ['Alexander', 'Sophie', 'Maximilian', 'Marie', 'Paul', 'Emilia', 'Leon', 'Hannah', 'Ben', 'Mia'],
    'FR': ['Louis', 'Jade', 'Gabriel', 'Louise', 'Raphaël', 'Alice', 'Arthur', 'Chloé', 'Léo', 'Lina'],
    'JP': ['Ren', 'Yui', 'Haruto', 'Aoi', 'Sota', 'Himari', 'Minato', 'Riko', 'Yuto', 'Sakura'],
    'MM': ['Aung', 'Myat', 'Thaw', 'Hlaing', 'Zin', 'Nandar', 'Ei', 'Khin', 'San', 'Min'],
    'TH': ['Pornchai', 'Somsak', 'Suchart', 'Chai', 'Malee', 'Suchada', 'Nonglak', 'Supaporn', 'Anan', 'Chaiwat'],
    'SG': ['Wei', 'Li', 'Hui', 'Jian', 'Mei', 'Tian', 'Chun', 'Xiao', 'Ying', 'Jun'],
    'MY': ['Muhammad', 'Nur', 'Ahmad', 'Siti', 'Lim', 'Tan', 'Wong', 'Chong', 'Lee', 'Kumar'],
    'ID': ['Budi', 'Siti', 'Joko', 'Dewi', 'Agus', 'Ani', 'Rizky', 'Putri', 'Muhammad', 'Nurul'],
    'PH': ['Maria', 'Jose', 'Juan', 'Ana', 'Pedro', 'Elena', 'Antonio', 'Cristina', 'Manuel', 'Teresa'],
    'VN': ['Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Huynh', 'Phan', 'Vu', 'Dang', 'Bui'],
    'LA': ['Souk', 'Phon', 'Boun', 'Kham', 'Chanthy', 'Vong', 'Seng', 'Thong', 'Khamphou', 'Bounmy'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART1 = {
    'US': ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'],
    'UK': ['Smith', 'Jones', 'Williams', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Roberts', 'Johnson'],
    'CA': ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Wilson', 'Anderson', 'Thomas'],
    'AU': ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Miller', 'Davies', 'Jackson', 'Ryan', 'Thomas'],
    'DE': ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann'],
    'FR': ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau'],
    'JP': ['Sato', 'Suzuki', 'Takahashi', 'Tanaka', 'Watanabe', 'Ito', 'Nakamura', 'Kobayashi', 'Yamamoto', 'Kato'],
    'MM': ['Oo', 'Maung', 'Win', 'Htwe', 'Lwin', 'Kyi', 'Zaw', 'Than', 'Aye', 'Soe'],
    'TH': ['Ruangrit', 'Jaturong', 'Somsri', 'Chaiyot', 'Pornprasert', 'Wong', 'Lim', 'Tan', 'Chai', 'Somsak'],
    'SG': ['Tan', 'Lim', 'Lee', 'Ng', 'Wong', 'Chua', 'Goh', 'Koh', 'Teo', 'Tay'],
    'MY': ['Abdullah', 'Tan', 'Lee', 'Lim', 'Ng', 'Wong', 'Chong', 'Yeoh', 'Ong', 'Gan'],
    'ID': ['Santoso', 'Wijaya', 'Setiawan', 'Lim', 'Tan', 'Wong', 'Putra', 'Sari', 'Dewi', 'Pratama'],
    'PH': ['Santos', 'Reyes', 'Cruz', 'Garcia', 'Gonzales', 'Rodriguez', 'Aquino', 'Delacruz', 'Mendoza', 'Torres'],
    'VN': ['Nguyen', 'Tran', 'Le', 'Pham', 'Hoang', 'Huynh', 'Phan', 'Vu', 'Dang', 'Bui'],
    'LA': ['Phommachanh', 'Keomany', 'Vongphachanh', 'Sengsavang', 'Khamphoumy', 'Phothisane', 'Souvannavong', 'Vannavong', 'Chanthavong', 'Thammavong'],
};
