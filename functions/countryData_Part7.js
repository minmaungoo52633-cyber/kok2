// countryData_Part7.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၀ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၇)
export const SUPPORTED_COUNTRIES_PART7 = [
    'DZ', 'MA', 'KE', 'ET', 'GH', 'CI', 'SN', 'CM', 'CD', 'AO'
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART7 = {
    'DZ': ['Algiers', 'Oran', 'Constantine', 'Annaba', 'Blida', 'Batna', 'Djelfa', 'Sétif', 'Sidi Bel Abbès', 'Biskra'],
    'MA': ['Casablanca', 'Rabat', 'Fes', 'Marrakech', 'Tangier', 'Agadir', 'Meknes', 'Oujda', 'Kenitra', 'Tetouan'],
    'KE': ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Eldoret', 'Thika', 'Malindi', 'Kitale', 'Kakamega', 'Garissa'],
    'ET': ['Addis Ababa', 'Dire Dawa', 'Mekelle', 'Gondar', 'Hawassa', 'Jimma', 'Bahir Dar', 'Harar', 'Debre Zeyit', 'Dessie'],
    'GH': ['Accra', 'Kumasi', 'Tamale', 'Sekondi-Takoradi', 'Ashaiman', 'Cape Coast', 'Obuasi', 'Tema', 'Ho', 'Sunyani'],
    'CI': ['Abidjan', 'Bouaké', 'Daloa', 'Yamoussoukro', 'San-Pédro', 'Gagnoa', 'Korhogo', 'Man', 'Divo', 'Abengourou'],
    'SN': ['Dakar', 'Touba', 'Thiès', 'Rufisque', 'Kaolack', 'M\'bour', 'Ziguinchor', 'Diourbel', 'Tambacounda', 'Louga'],
    'CM': ['Douala', 'Yaoundé', 'Garoua', 'Bamenda', 'Maroua', 'Bafoussam', 'Ngaoundéré', 'Kousséri', 'Bertoua', 'Ebolowa'],
    'CD': ['Kinshasa', 'Lubumbashi', 'Mbuji-Mayi', 'Kananga', 'Kisangani', 'Bukavu', 'Mbandaka', 'Matadi', 'Uvira', 'Goma'],
    'AO': ['Luanda', 'Huambo', 'Lobito', 'Benguela', 'Kuito', 'Lubango', 'Malanje', 'Cabinda', 'Uíge', 'Saurimo'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART7 = {
    'DZ': ['Algiers Province', 'Oran Province', 'Constantine Province', 'Annaba Province', 'Blida Province', 'Batna Province', 'Djelfa Province', 'Sétif Province', 'Sidi Bel Abbès Province', 'Biskra Province'],
    'MA': ['Casablanca-Settat', 'Rabat-Salé-Kénitra', 'Fès-Meknès', 'Marrakesh-Safi', 'Tangier-Tetouan-Al Hoceima', 'Souss-Massa', 'Oriental', 'Béni Mellal-Khénifra', 'Drâa-Tafilalet', 'Guelmim-Oued Noun'],
    'KE': ['Nairobi County', 'Mombasa County', 'Nakuru County', 'Kakamega County', 'Kiambu County', 'Kilifi County', 'Machakos County', 'Meru County', 'Bungoma County', 'Busia County'],
    'ET': ['Addis Ababa', 'Oromia Region', 'Amhara Region', 'Southern Nations, Nationalities, and Peoples\' Region', 'Tigray Region', 'Somali Region', 'Sidama Region', 'Afar Region', 'Benishangul-Gumuz Region', 'Gambela Region'],
    'GH': ['Greater Accra Region', 'Ashanti Region', 'Western Region', 'Volta Region', 'Eastern Region', 'Northern Region', 'Central Region', 'Upper East Region', 'Upper West Region', 'Savannah Region'],
    'CI': ['Abidjan', 'Bas-Sassandra', 'Comoé', 'Denguélé', 'Gôh-Djiboua', 'Lacs', 'Lagunes', 'Montagnes', 'Sassandra-Marahoué', 'Savanes'],
    'SN': ['Dakar Region', 'Diourbel Region', 'Fatick Region', 'Kaffrine Region', 'Kaolack Region', 'Kédougou Region', 'Kolda Region', 'Louga Region', 'Matam Region', 'Saint-Louis Region'],
    'CM': ['Littoral Region', 'Centre Region', 'Far North Region', 'Northwest Region', 'West Region', 'Southwest Region', 'Adamaoua Region', 'East Region', 'North Region', 'South Region'],
    'CD': ['Kinshasa', 'Haut-Katanga', 'Kasaï-Oriental', 'Nord-Kivu', 'Sud-Kivu', 'Ituri', 'Lualaba', 'Tshopo', 'Kongo Central', 'Tanganyika'],
    'AO': ['Luanda Province', 'Huambo Province', 'Benguela Province', 'Bié Province', 'Cabinda Province', 'Cunene Province', 'Huíla Province', 'Kwanza Norte Province', 'Kwanza Sul Province', 'Malanje Province'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART7 = {
    'DZ': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'MA': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'KE': () => `${Math.floor(Math.random() * (99999 - 100 + 1)) + 100}`, // Fixed: Removed leading zeros from 00100
    'ET': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'GH': () => `${Math.floor(Math.random() * (99999 - 1 + 1)) + 1}`, // Fixed: Removed leading zeros from 00001
    'CI': () => `${Math.floor(Math.random() * (99999 - 1000 + 1)) + 1000}`, // Fixed: Removed leading zeros from 01000
    'SN': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'CM': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'CD': () => `${Math.floor(Math.random() * (99999 - 1 + 1)) + 1}`, // Fixed: Removed leading zeros from 00001
    'AO': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART7 = {
    'DZ': () => `+213 5${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'MA': () => `+212 6${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'KE': () => `+254 7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'ET': () => `+251 9${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'GH': () => `+233 2${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'CI': () => `+225 0${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'SN': () => `+221 7${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'CM': () => `+237 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'CD': () => `+243 8${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'AO': () => `+244 9${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART7 = {
    'DZ': ['Mohamed', 'Fatima', 'Ahmed', 'Khadija', 'Ali', 'Zahra', 'Omar', 'Amina', 'Youssef', 'Nour'],
    'MA': ['Mohammed', 'Fatima', 'Ahmed', 'Khadija', 'Ali', 'Zahra', 'Omar', 'Amina', 'Youssef', 'Nour'],
    'KE': ['John', 'Mary', 'Joseph', 'Grace', 'Peter', 'Mercy', 'David', 'Faith', 'Daniel', 'Esther'],
    'ET': ['Solomon', 'Tigist', 'Dawit', 'Hana', 'Fitsum', 'Marta', 'Yonas', 'Sara', 'Abel', 'Lidya'],
    'GH': ['Kwame', 'Ama', 'Kofi', 'Akua', 'Yaw', 'Afia', 'Kwabena', 'Abena', 'Kwaku', 'Akosua'],
    'CI': ['Kouakou', 'Aya', 'Koffi', 'Affoué', 'Kouamé', 'Amoin', 'Konan', 'N\'guessan', 'Adjoua', 'Yao'],
    'SN': ['Mamadou', 'Fatou', 'Cheikh', 'Aissatou', 'Omar', 'Mariama', 'Demba', 'Khady', 'Moussa', 'Aminata'],
    'CM': ['Jean', 'Marie', 'Paul', 'Françoise', 'Pierre', 'Christine', 'Marcel', 'Jacqueline', 'André', 'Madeleine'],
    'CD': ['Jean-Pierre', 'Marie', 'Joseph', 'Christine', 'Patrick', 'Francine', 'Didier', 'Martine', 'Alain', 'Florence'],
    'AO': ['João', 'Maria', 'Manuel', 'Ana', 'José', 'Isabel', 'Pedro', 'Helena', 'António', 'Sofia'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART7 = {
    'DZ': ['Benali', 'Cherif', 'Boudjemaa', 'Meziane', 'Saidi', 'Belkacem', 'Hamidou', 'Bouzid', 'Zoubir', 'Mansouri'],
    'MA': ['Alaoui', 'Benjelloun', 'Fassi', 'Bennani', 'Guennoun', 'El Amrani', 'Cherkaoui', 'Sefrioui', 'Bouzidi', 'Kadiri'],
    'KE': ['Ochieng', 'Mwangi', 'Kipchoge', 'Wanjiku', 'Chebet', 'Mutiso', 'Onyango', 'Wambui', 'Koech', 'Njoroge'],
    'ET': ['Kebede', 'Tadesse', 'Haile', 'Desta', 'Bekele', 'Lemma', 'Mamo', 'Eshetu', 'Abebe', 'Girma'],
    'GH': ['Mensah', 'Owusu', 'Danquah', 'Osei', 'Nkrumah', 'Agyemang', 'Appiah', 'Sarfo', 'Asamoah', 'Boateng'],
    'CI': ['Kouassi', 'Kone', 'Traoré', 'Coulibaly', 'Ouattara', 'Diarrassouba', 'Soro', 'Doumbia', 'Bamba', 'Touré'],
    'SN': ['Diop', 'Ndiaye', 'Fall', 'Sow', 'Cissé', 'Thiam', 'Gueye', 'Ba', 'Seck', 'Mbaye'],
    'CM': ['Ngo', 'Manga', 'Ewondo', 'Biyaga', 'Nkou', 'Essomba', 'Mballa', 'Etoundi', 'Onguene', 'Ntsama'],
    'CD': ['Kabongo', 'Mwamba', 'Nkulu', 'Ilunga', 'Mutombo', 'Kasongo', 'Mbuyi', 'Lwamba', 'Ngoy', 'Kazadi'],
    'AO': ['Silva', 'Santos', 'Costa', 'Gomes', 'Fernandes', 'Martins', 'Rodrigues', 'Alves', 'Pereira', 'Carvalho'],
};
