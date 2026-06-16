// countryData_Part6.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၀ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၆)
export const SUPPORTED_COUNTRIES_PART6 = [
    'AL', 'BA', 'RS', 'ME', 'XK', 'MK', 'BG', 'RO', 'GR', 'CY' // New set of 10 countries
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART6 = {
    'AL': ['Tirana', 'Durrës', 'Vlorë', 'Elbasan', 'Shkodër', 'Korçë', 'Fier', 'Berat', 'Lushnjë', 'Pogradec'],
    'BA': ['Sarajevo', 'Banja Luka', 'Tuzla', 'Zenica', 'Mostar', 'Bihać', 'Brčko', 'Bijeljina', 'Prijedor', 'Trebinje'],
    'RS': ['Belgrade', 'Novi Sad', 'Niš', 'Kragujevac', 'Subotica', 'Zrenjanin', 'Pančevo', 'Čačak', 'Kraljevo', 'Smederevo'],
    'ME': ['Podgorica', 'Nikšić', 'Pljevlja', 'Bijelo Polje', 'Herceg Novi', 'Berane', 'Bar', 'Cetinje', 'Tivat', 'Kotor'],
    'XK': ['Pristina', 'Prizren', 'Ferizaj', 'Peja', 'Gjakova', 'Gjilan', 'Mitrovica', 'Vushtrri', 'Podujeva', 'Rahovec'],
    'MK': ['Skopje', 'Bitola', 'Kumanovo', 'Prilep', 'Tetovo', 'Ohrid', 'Veles', 'Shtip', 'Kočani', 'Gostivar'],
    'BG': ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora', 'Pleven', 'Sliven', 'Dobrich', 'Shumen'], // BG was in Part 5, re-checking the list.
                                                                                                                   // Assuming BG is intended to be here as per user's request for 90 countries.
    'RO': ['Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Craiova', 'Brașov', 'Galați', 'Ploiești', 'Oradea'], // RO was in Part 3, re-checking.
    'GR': ['Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa', 'Volos', 'Rhodes', 'Ioannina', 'Chania', 'Acharnes'], // GR was in Part 3, re-checking.
    'CY': ['Nicosia', 'Limassol', 'Larnaca', 'Paphos', 'Famagusta', 'Kyrenia', 'Morphou', 'Aradippou', 'Paralimni', 'Engomi'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART6 = {
    'AL': ['Berat County', 'Dibër County', 'Durrës County', 'Elbasan County', 'Fier County', 'Gjirokastër County', 'Korçë County', 'Kukës County', 'Lezhë County', 'Shkodër County'],
    'BA': ['Federation of Bosnia and Herzegovina', 'Republika Srpska', 'Brčko District'],
    'RS': ['Belgrade', 'Vojvodina', 'Central Serbia'],
    'ME': ['Podgorica Capital City', 'Nikšić Municipality', 'Bijelo Polje Municipality', 'Pljevlja Municipality', 'Bar Municipality', 'Herceg Novi Municipality', 'Berane Municipality', 'Rožaje Municipality', 'Kotor Municipality', 'Ulcinj Municipality'],
    'XK': ['Pristina District', 'Prizren District', 'Ferizaj District', 'Peja District', 'Gjakova District', 'Gjilan District', 'Mitrovica District'],
    'MK': ['Skopje Statistical Region', 'Pelagonia Statistical Region', 'Polog Statistical Region', 'Vardar Statistical Region', 'Eastern Statistical Region', 'Southeastern Statistical Region', 'Northeastern Statistical Region', 'Southwestern Statistical Region'],
    'BG': ['Sofia City Province', 'Plovdiv Province', 'Varna Province', 'Burgas Province', 'Blagoevgrad Province', 'Stara Zagora Province', 'Veliko Tarnovo Province', 'Pleven Province', 'Sliven Province', 'Pazardzhik Province'],
    'RO': ['Bucharest', 'Cluj County', 'Timiș County', 'Iași County', 'Constanța County', 'Dolj County', 'Brașov County', 'Galați County', 'Prahova County', 'Bihor County'],
    'GR': ['Attica', 'Central Macedonia', 'Western Greece', 'Thessaly', 'Crete', 'Eastern Macedonia and Thrace', 'Central Greece', 'Peloponnese', 'North Aegean', 'South Aegean'],
    'CY': ['Nicosia District', 'Limassol District', 'Larnaca District', 'Paphos District', 'Famagusta District', 'Kyrenia District'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART6 = {
    'AL': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'BA': () => `${Math.floor(Math.random() * (99999 - 71000 + 1)) + 71000}`, // 5 digits
    'RS': () => `${Math.floor(Math.random() * (99999 - 11000 + 1)) + 11000}`, // 5 digits
    'ME': () => `${Math.floor(Math.random() * (99999 - 81000 + 1)) + 81000}`, // 5 digits
    'XK': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'MK': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'BG': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'RO': () => `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // 6 digits
    'GR': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'CY': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART6 = {
    'AL': () => `+355 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'BA': () => `+387 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'RS': () => `+381 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'ME': () => `+382 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'XK': () => `+383 4${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'MK': () => `+389 7${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'BG': () => `+359 8${Math.floor(Math.random() * (9 - 7 + 1)) + 7}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'RO': () => `+40 7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'GR': () => `+30 69${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'CY': () => `+357 9${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART6 = {
    'AL': ['Arbër', 'Elira', 'Klea', 'Endri', 'Era', 'Jon', 'Sara', 'Drin', 'Dea', 'Klea'],
    'BA': ['Amar', 'Lamija', 'Adin', 'Ajla', 'Haris', 'Emina', 'Denis', 'Lejla', 'Faruk', 'Hana'],
    'RS': ['Nikola', 'Milica', 'Lazar', 'Anastasija', 'Stefan', 'Teodora', 'Vuk', 'Dunja', 'Filip', 'Jana'],
    'ME': ['Luka', 'Sara', 'Andrija', 'Milica', 'Vasilije', 'Anja', 'Jovan', 'Maša', 'Petar', 'Nađa'],
    'XK': ['Arbnor', 'Albulena', 'Granit', 'Donjeta', 'Dren', 'Vlora', 'Arian', 'Teuta', 'Kushtrim', 'Fjolla'],
    'MK': ['Filip', 'Marija', 'Aleksandar', 'Jana', 'Martin', 'Elena', 'Damjan', 'Sara', 'Nikola', 'Ana'],
    'BG': ['Georgi', 'Maria', 'Alexander', 'Victoria', 'Nikolai', 'Gergana', 'Ivan', 'Alexandra', 'Dimitar', 'Yoanna'],
    'RO': ['Andrei', 'Maria', 'David', 'Elena', 'Gabriel', 'Sofia', 'Luca', 'Amalia', 'Matei', 'Victoria'],
    'GR': ['George', 'Maria', 'Konstantinos', 'Eleni', 'Dimitris', 'Sofia', 'Nikolaos', 'Vasiliki', 'Ioannis', 'Aikaterini'],
    'CY': ['Andreas', 'Maria', 'Giorgos', 'Eleni', 'Constantinos', 'Antri', 'Panayiotis', 'Chrystalla', 'Kyriakos', 'Anna'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART6 = {
    'AL': ['Hoxha', 'Demiri', 'Gashi', 'Dervishi', 'Shehu', 'Berisha', 'Kola', 'Lala', 'Mema', 'Çela'],
    'BA': ['Hodžić', 'Delić', 'Kovačević', 'Babić', 'Salihović', 'Hadžić', 'Mujić', 'Smajlović', 'Softić', 'Begović'],
    'RS': ['Jovanović', 'Petrović', 'Nikolić', 'Marković', 'Đorđević', 'Stojanović', 'Pavlović', 'Simić', 'Popović', 'Milošević'],
    'ME': ['Popović', 'Vujović', 'Marković', 'Radović', 'Kovačević', 'Jovanović', 'Božović', 'Vuković', 'Nikolić', 'Milošević'],
    'XK': ['Gashi', 'Krasniqi', 'Berisha', 'Rexhepi', 'Morina', 'Bytyqi', 'Kelmendi', 'Daka', 'Hajdari', 'Shala'],
    'MK': ['Stojanovski', 'Trajkovski', 'Nikolovski', 'Petrovski', 'Georgievski', 'Ivanovski', 'Dimitrovski', 'Lazarevski', 'Mitevski', 'Naumovski'],
    'BG': ['Ivanov', 'Georgiev', 'Petrov', 'Nikolova', 'Popova', 'Dimitrov', 'Stoianova', 'Mihailov', 'Vasileva', 'Stefanov'],
    'RO': ['Popa', 'Popescu', 'Dumitrescu', 'Stan', 'Stoica', 'Georgescu', 'Constantinescu', 'Mihai', 'Radu', 'Dinu'],
    'GR': ['Papadopoulos', 'Georgiou', 'Nikolaou', 'Pappas', 'Vasileiou', 'Karagiannis', 'Ioannou', 'Konstantinou', 'Panagiotou', 'Mavridis'],
    'CY': ['Georgiou', 'Ioannou', 'Constantinou', 'Michael', 'Christou', 'Savva', 'Hadjigeorgiou', 'Nikolaou', 'Papadopoulos', 'Kyriacou'],
};
