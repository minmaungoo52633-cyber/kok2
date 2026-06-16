// countryData_Part2.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၅ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၂)
export const SUPPORTED_COUNTRIES_PART2 = [
    'KH', 'BN', 'CN', 'IN', 'BR', 'RU', 'ZA', 'EG', 'NG', 'MX', 'AR', 'ES', 'IT', 'KR', 'NZ'
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART2 = {
    'KH': ['Phnom Penh', 'Siem Reap', 'Battambang', 'Sihanoukville', 'Kampot', 'Poipet', 'Takeo', 'Koh Kong', 'Pursat', 'Kampong Cham'],
    'BN': ['Bandar Seri Begawan', 'Kuala Belait', 'Seria', 'Tutong', 'Bangar', 'Muara Town', 'Sukang', 'Lumut', 'Telisai', 'Labu'],
    'CN': ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chongqing', 'Tianjin', 'Chengdu', 'Hangzhou', 'Wuhan', 'Nanjing'],
    'IN': ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur'],
    'BR': ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre'],
    'RU': ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Kazan', 'Nizhny Novgorod', 'Chelyabinsk', 'Omsk', 'Samara', 'Rostov-on-Don'],
    'ZA': ['Johannesburg', 'Cape Town', 'Durban', 'Pretoria', 'Gqeberha', 'Bloemfontein', 'East London', 'Pietermaritzburg', 'Polokwane', 'Kimberley'],
    'EG': ['Cairo', 'Alexandria', 'Giza', 'Shubra El Kheima', 'Port Said', 'Suez', 'Mansoura', 'Ismailia', 'Zagazig', 'Assiut'],
    'NG': ['Lagos', 'Kano', 'Ibadan', 'Kaduna', 'Port Harcourt', 'Benin City', 'Maiduguri', 'Zaria', 'Aba', 'Jos'],
    'MX': ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Toluca', 'Tijuana', 'León', 'Ciudad Juárez', 'Zapopan', 'Mérida'],
    'AR': ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'San Miguel de Tucumán', 'La Plata', 'Mar del Plata', 'Salta', 'Santa Fe', 'San Juan'],
    'ES': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza', 'Málaga', 'Murcia', 'Palma', 'Las Palmas de Gran Canaria', 'Bilbao'],
    'IT': ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo', 'Genoa', 'Bologna', 'Florence', 'Bari', 'Catania'],
    'KR': ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan', 'Changwon', 'Goyang'],
    'NZ': ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin', 'Palmerston North', 'Napier', 'Nelson', 'Rotorua'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART2 = {
    'KH': ['Phnom Penh', 'Siem Reap', 'Battambang', 'Kampong Cham', 'Kandal', 'Preah Sihanouk', 'Takeo', 'Kampot', 'Pursat', 'Svay Rieng'],
    'BN': ['Brunei-Muara', 'Belait', 'Tutong', 'Temburong'],
    'CN': ['Guangdong', 'Sichuan', 'Henan', 'Shandong', 'Jiangsu', 'Hebei', 'Hunan', 'Anhui', 'Hubei', 'Zhejiang'],
    'IN': ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal', 'Madhya Pradesh', 'Tamil Nadu', 'Rajasthan', 'Karnataka', 'Gujarat', 'Andhra Pradesh'],
    'BR': ['São Paulo', 'Minas Gerais', 'Rio de Janeiro', 'Bahia', 'Paraná', 'Rio Grande do Sul', 'Pernambuco', 'Ceará', 'Pará', 'Santa Catarina'],
    'RU': ['Moscow Oblast', 'Saint Petersburg', 'Krasnodar Krai', 'Republic of Bashkortostan', 'Republic of Tatarstan', 'Sverdlovsk Oblast', 'Rostov Oblast', 'Chelyabinsk Oblast', 'Novosibirsk Oblast', 'Samara Oblast'],
    'ZA': ['Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Limpopo', 'Mpumalanga', 'North West', 'Free State', 'Northern Cape'],
    'EG': ['Cairo Governorate', 'Giza Governorate', 'Sharqia Governorate', 'Dakahlia Governorate', 'Beheira Governorate', 'Minya Governorate', 'Sohag Governorate', 'Qena Governorate', 'Asyut Governorate', 'Fayoum Governorate'],
    'NG': ['Lagos', 'Kano', 'Oyo', 'Kaduna', 'Rivers', 'Delta', 'Ogun', 'Anambra', 'Katsina', 'Benue'],
    'MX': ['Mexico City', 'State of Mexico', 'Jalisco', 'Nuevo León', 'Veracruz', 'Puebla', 'Guanajuato', 'Baja California', 'Chihuahua', 'Michoacán'],
    'AR': ['Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Tucumán', 'Entre Ríos', 'Salta', 'Chaco', 'Corrientes', 'Santiago del Estero'],
    'ES': ['Andalusia', 'Catalonia', 'Community of Madrid', 'Valencian Community', 'Galicia', 'Castile and León', 'Basque Country', 'Castile-La Mancha', 'Canary Islands', 'Region of Murcia'],
    'IT': ['Lombardy', 'Lazio', 'Campania', 'Sicily', 'Veneto', 'Piedmont', 'Apulia', 'Emilia-Romagna', 'Tuscany', 'Calabria'],
    'KR': ['Gyeonggi-do', 'Seoul', 'Busan', 'Gyeongsangnam-do', 'Incheon', 'Chungcheongnam-do', 'Gyeongsangbuk-do', 'Jeollanam-do', 'Jeollabuk-do', 'Daejeon'],
    'NZ': ['Auckland', 'Canterbury', 'Wellington', 'Waikato', 'Bay of Plenty', 'Otago', 'Manawatū-Whanganui', 'Northland', 'Hawke\'s Bay', 'Taranaki'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART2 = {
    'KH': () => `${Math.floor(Math.random() * (12999 - 10000 + 1)) + 10000}`, // 5 digits
    'BN': () => {
        const prefixes = ['BT', 'KA', 'KB', 'KC', 'KD', 'KT', 'KU', 'LB', 'LC', 'LE', 'LI', 'LK', 'LM', 'LP', 'LS', 'LT', 'LU', 'PA', 'PB', 'PC', 'PD', 'PE', 'PG', 'PK', 'PS', 'PT', 'PU', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SK', 'SM', 'SN', 'SP', 'SQ', 'SR', 'SS', 'ST', 'SU', 'TA', 'TD', 'TE', 'TF', 'TG', 'TH', 'TK', 'TL', 'TM', 'TN', 'TP', 'TR', 'TS', 'TU', 'TV', 'TW', 'UB', 'WC', 'WG', 'WK', 'WL', 'WM', 'WN', 'WP', 'WQ', 'WR', 'WS', 'WT', 'WU', 'WV', 'WW', 'WX', 'WY', 'WZ'];
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`;
    }, // Example Brunei format
    'CN': () => `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // 6 digits
    'IN': () => `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // 6 digits (PIN code)
    'BR': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}-${Math.floor(Math.random() * 999)}`, // 8 digits with hyphen
    'RU': () => `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // 6 digits
    'ZA': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'EG': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'NG': () => `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // 6 digits
    'MX': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'AR': () => {
        const letters = ['C', 'B', 'X', 'T'];
        const suffixes = ['AAA', 'BBB', 'CCC'];
        return `${letters[Math.floor(Math.random() * letters.length)]}${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
    }, // Example Argentine format
    'ES': () => `${Math.floor(Math.random() * (52999 - 10000 + 1)) + 10000}`, // 5 digits
    'IT': () => `${Math.floor(Math.random() * (98100 - 10000 + 1)) + 10000}`, // 5 digits
    'KR': () => `${Math.floor(Math.random() * (63000 - 10000 + 1)) + 10000}`, // 5 digits
    'NZ': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART2 = {
    'KH': () => `+855${Math.floor(Math.random() * (99 - 10 + 1)) + 10}-${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'BN': () => `+673${Math.floor(Math.random() * (899 - 700 + 1)) + 700}-${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'CN': () => `+86 1${Math.floor(Math.random() * (9 - 3 + 1)) + 3}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'IN': () => `+91 ${Math.floor(Math.random() * (9 - 7 + 1)) + 7}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'BR': () => `+55 ${Math.floor(Math.random() * (99 - 11 + 1)) + 11} 9${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'RU': () => `+7 ${Math.floor(Math.random() * (999 - 900 + 1)) + 900} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (99 - 10 + 1)) + 10}-${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'ZA': () => `+27 ${Math.floor(Math.random() * (8 - 6 + 1)) + 6}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'EG': () => `+20 ${Math.floor(Math.random() * (12 - 10 + 1)) + 10}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'NG': () => `+234 ${Math.floor(Math.random() * (90 - 70 + 1)) + 70}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'MX': () => `+52 1 ${Math.floor(Math.random() * (99 - 55 + 1)) + 55} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'AR': () => `+54 9 ${Math.floor(Math.random() * (99 - 11 + 1)) + 11} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'ES': () => `+34 6${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'IT': () => `+39 3${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'KR': () => `+82 10-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'NZ': () => `+64 2${Math.floor(Math.random() * (9 - 1 + 1)) + 1} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART2 = {
    'KH': ['Sok', 'Srey', 'Sophea', 'Dara', 'Vanna', 'Chanthou', 'Sokha', 'Rithy', 'Leakhena', 'Srey Leak'],
    'BN': ['Muhammad', 'Nurul', 'Abdul', 'Siti', 'Mohammad', 'Hajah', 'Pengiran', 'Dayang', 'Awang', 'Haji'],
    'CN': ['Wei', 'Jing', 'Lei', 'Min', 'Xiao', 'Lin', 'Mei', 'Hua', 'Gang', 'Qiang'],
    'IN': ['Rahul', 'Priya', 'Amit', 'Neha', 'Sanjay', 'Pooja', 'Rajesh', 'Deepa', 'Vikas', 'Anjali'],
    'BR': ['Gabriel', 'Alice', 'Arthur', 'Sophia', 'Miguel', 'Helena', 'Davi', 'Valentina', 'Heitor', 'Laura'],
    'RU': ['Alexander', 'Anastasia', 'Maxim', 'Anna', 'Ivan', 'Maria', 'Artyom', 'Sofia', 'Dmitry', 'Victoria'],
    'ZA': ['Sipho', 'Nomusa', 'Thabo', 'Zandile', 'Bongani', 'Nolwazi', 'Khaya', 'Ayanda', 'Lebo', 'Lerato'],
    'EG': ['Ahmed', 'Fatma', 'Mohamed', 'Nour', 'Mostafa', 'Sara', 'Omar', 'Hana', 'Youssef', 'Malak'],
    'NG': ['Chukwudi', 'Ngozi', 'Segun', 'Funke', 'Emeka', 'Amaka', 'Tunde', 'Chioma', 'Kunle', 'Adaobi'],
    'MX': ['Santiago', 'Sofía', 'Mateo', 'Valentina', 'Sebastián', 'Regina', 'Leonardo', 'Camila', 'Emiliano', 'Valeria'],
    'AR': ['Juan', 'María', 'Pedro', 'Ana', 'Carlos', 'Laura', 'Diego', 'Sofía', 'Facundo', 'Valentina'],
    'ES': ['Hugo', 'Lucía', 'Martín', 'Sofía', 'Lucas', 'Martina', 'Daniel', 'María', 'Alejandro', 'Paula'],
    'IT': ['Leonardo', 'Sofia', 'Francesco', 'Giulia', 'Alessandro', 'Aurora', 'Lorenzo', 'Alice', 'Mattia', 'Emma'],
    'KR': ['Minjun', 'Seohyun', 'Joonwoo', 'Jiyoo', 'Dooyoon', 'Haeun', 'Siwoo', 'Siyoon', 'Yeonwoo', 'Jia'],
    'NZ': ['Oliver', 'Charlotte', 'Noah', 'Olivia', 'William', 'Amelia', 'Leo', 'Isla', 'Jack', 'Mia'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART2 = {
    'KH': ['Sok', 'Lim', 'Kim', 'Chhay', 'Ly', 'Meas', 'Khiev', 'Chum', 'Hang', 'Noun'],
    'BN': ['Bin', 'Binti', 'Haji', 'Hajah', 'Pengiran', 'Awang', 'Dayang', 'Mohammad', 'Ali', 'Ahmad'],
    'CN': ['Wang', 'Li', 'Zhang', 'Liu', 'Chen', 'Yang', 'Huang', 'Zhao', 'Wu', 'Zhou'],
    'IN': ['Kumar', 'Singh', 'Devi', 'Sharma', 'Yadav', 'Khan', 'Gupta', 'Reddy', 'Choudhary', 'Rao'],
    'BR': ['Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Ferreira', 'Alves', 'Pereira', 'Lima', 'Gomes'],
    'RU': ['Smirnov', 'Ivanov', 'Kuznetsov', 'Sokolov', 'Popov', 'Lebedev', 'Kozlov', 'Novikov', 'Morozov', 'Petrov'],
    'ZA': ['Dlamini', 'Ncube', 'Mkhize', 'Ngcobo', 'Zulu', 'Sithole', 'Nkomo', 'Moyo', 'Khumalo', 'Ndlovu'],
    'EG': ['Mohamed', 'Ahmed', 'Ali', 'Ibrahim', 'Hassan', 'Mahmoud', 'Hussein', 'Youssef', 'Mustafa', 'Abdullah'],
    'NG': ['Okafor', 'Adeyemi', 'Mohammed', 'Okoro', 'Adewale', 'Abdullahi', 'Nwachukwu', 'Dike', 'Musa', 'Ogunleye'],
    'MX': ['Hernández', 'García', 'Martínez', 'López', 'González', 'Rodríguez', 'Pérez', 'Sánchez', 'Ramírez', 'Cruz'],
    'AR': ['González', 'Rodríguez', 'Gómez', 'Fernández', 'López', 'Díaz', 'Martínez', 'Pérez', 'García', 'Sánchez'],
    'ES': ['García', 'Fernández', 'González', 'Rodríguez', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Gómez', 'Martín'],
    'IT': ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Romano', 'Gallo', 'Costa', 'Fontana', 'Conti', 'Esposito'],
    'KR': ['Kim', 'Lee', 'Park', 'Choi', 'Jeong', 'Kang', 'Jo', 'Yoon', 'Jang', 'Lim'],
    'NZ': ['Smith', 'Jones', 'Williams', 'Brown', 'Wilson', 'Miller', 'Davies', 'Jackson', 'Ryan', 'Thomas'],
};
