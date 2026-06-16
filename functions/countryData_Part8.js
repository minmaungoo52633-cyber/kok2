// countryData_Part8.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၀ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၈)
// နိုင်ငံပေါင်း ၉၀ ပြည့်ရန်အတွက် အစ်ကိုပေးထားသော စာရင်းတွင် မပါဝင်သေးသော နိုင်ငံများကို ထပ်ထည့်ထားပါသည်။
export const SUPPORTED_COUNTRIES_PART8 = [
    'AD', 'AG', 'AM', 'AZ', 'BS', 'BB', 'BZ', 'BJ', 'BT', 'BO'
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART8 = {
    'AD': ['Andorra la Vella', 'Escaldes-Engordany', 'Encamp', 'Sant Julià de Lòria', 'La Massana', 'Canillo', 'Ordino', 'Arinsal', 'El Tarter', 'Soldeu'],
    'AG': ['St. John\'s', 'All Saints', 'Liberta', 'Potters Village', 'Bolands', 'Parham', 'Swetes', 'Freetown', 'Pigotts', 'Codrington'],
    'AM': ['Yerevan', 'Gyumri', 'Vanadzor', 'Vagharshapat', 'Hrazdan', 'Abovyan', 'Kapan', 'Ararat', 'Armavir', 'Gavar'],
    'AZ': ['Baku', 'Ganja', 'Sumqayit', 'Mingachevir', 'Shirvan', 'Nakhchivan', 'Khankendi', 'Yevlakh', 'Agdam', 'Barda'],
    'BS': ['Nassau', 'Freeport', 'West End', 'Coopers Town', 'Marsh Harbour', 'Freetown', 'High Rock', 'Andros Town', 'Clarence Town', 'Dunmore Town'],
    'BB': ['Bridgetown', 'Speightstown', 'Oistins', 'Holetown', 'Bathsheba', 'Black Rock', 'Crane', 'Greenland', 'Hillaby', 'Porey Spring'],
    'BZ': ['Belize City', 'San Ignacio', 'Orange Walk Town', 'Belmopan', 'Dangriga', 'Corozal Town', 'Punta Gorda', 'Benque Viejo del Carmen', 'Ladyville', 'Independence'],
    'BJ': ['Cotonou', 'Porto-Novo', 'Parakou', 'Djougou', 'Bohicon', 'Kandi', 'Abomey', 'Natitingou', 'Ouidah', 'Savé'],
    'BT': ['Thimphu', 'Phuntsholing', 'Punakha', 'Samdrup Jongkhar', 'Gelephu', 'Paro', 'Wangdue Phodrang', 'Trongsa', 'Mongar', 'Jakar'],
    'BO': ['Santa Cruz de la Sierra', 'La Paz', 'Cochabamba', 'Sucre', 'Oruro', 'Tarija', 'Potosí', 'Sacaba', 'Montero', 'Trinidad'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART8 = {
    'AD': ['Canillo', 'Encamp', 'La Massana', 'Escaldes-Engordany', 'Andorra la Vella', 'Sant Julià de Lòria', 'Ordino'], // Parishes
    'AG': ['Saint John', 'Saint George', 'Saint Peter', 'Saint Philip', 'Saint Paul', 'Saint Mary', 'Barbuda'], // Parishes
    'AM': ['Yerevan', 'Shirak Province', 'Lori Province', 'Kotayk Province', 'Ararat Province', 'Armavir Province', 'Gegharkunik Province', 'Syunik Province', 'Tavush Province', 'Aragatsotn Province'],
    'AZ': ['Baku', 'Ganja', 'Sumqayit', 'Mingachevir', 'Shirvan', 'Nakhchivan Autonomous Republic', 'Absheron District', 'Agdam District', 'Barda District', 'Goychay District'],
    'BS': ['New Providence', 'Grand Bahama', 'Abaco', 'Andros', 'Eleuthera', 'Exuma', 'Long Island', 'Cat Island', 'Bimini', 'Acklins'], // Districts/Islands
    'BB': ['Saint Michael', 'Christ Church', 'Saint Philip', 'Saint George', 'Saint Peter', 'Saint James', 'Saint Thomas', 'Saint Lucy', 'Saint Joseph', 'Saint Andrew'], // Parishes
    'BZ': ['Belize District', 'Cayo District', 'Orange Walk District', 'Corozal District', 'Stann Creek District', 'Toledo District'],
    'BJ': ['Littoral Department', 'Ouémé Department', 'Atlantique Department', 'Mono Department', 'Zou Department', 'Collines Department', 'Borgou Department', 'Atacora Department', 'Alibori Department', 'Donga Department'],
    'BT': ['Thimphu District', 'Chukha District', 'Paro District', 'Samtse District', 'Sarpang District', 'Dagana District', 'Trongsa District', 'Bumthang District', 'Mongar District', 'Trashigang District'],
    'BO': ['Santa Cruz Department', 'La Paz Department', 'Cochabamba Department', 'Potosí Department', 'Oruro Department', 'Tarija Department', 'Beni Department', 'Chuquisaca Department', 'Pando Department'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART8 = {
    'AD': () => `${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`, // 3 digits
    'AG': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'AM': () => `${Math.floor(Math.random() * (9999 - 1 + 1)) + 1}`, // Fixed: Removed leading zeros from 0001
    'AZ': () => `AZ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // AZXXXX
    'BS': () => `NP${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // NPXXXX (for New Providence)
    'BB': () => `BB${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // BBXXXXX
    'BZ': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'BJ': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'BT': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'BO': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART8 = {
    'AD': () => `+376 3${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`,
    'AG': () => `+1-268-7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'AM': () => `+374 9${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'AZ': () => `+994 5${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'BS': () => `+1-242-4${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'BB': () => `+1-246-2${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'BZ': () => `+501 6${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'BJ': () => `+229 9${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'BT': () => `+975 17${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'BO': () => `+591 7${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART8 = {
    'AD': ['Marc', 'Maria', 'Albert', 'Laura', 'Joan', 'Marta', 'Pere', 'Anna', 'David', 'Carla'],
    'AG': ['John', 'Mary', 'Michael', 'Susan', 'David', 'Patricia', 'James', 'Linda', 'Robert', 'Barbara'],
    'AM': ['Armen', 'Gayane', 'Karen', 'Narine', 'Artur', 'Anna', 'David', 'Mariam', 'Tigran', 'Sona'],
    'AZ': ['Ali', 'Fatima', 'Elvin', 'Aynur', 'Tural', 'Leyla', 'Ruslan', 'Sevinj', 'Famil', 'Gulnar'],
    'BS': ['Michael', 'Maria', 'David', 'Linda', 'James', 'Patricia', 'Robert', 'Jennifer', 'John', 'Elizabeth'],
    'BB': ['John', 'Mary', 'Michael', 'Susan', 'David', 'Patricia', 'James', 'Linda', 'Robert', 'Barbara'],
    'BZ': ['Jose', 'Maria', 'Carlos', 'Ana', 'Juan', 'Elena', 'Pedro', 'Sofia', 'Miguel', 'Laura'],
    'BJ': ['Koffi', 'Aya', 'Kouassi', 'Affoué', 'Kouamé', 'Amoin', 'Konan', 'N\'guessan', 'Adjoua', 'Yao'],
    'BT': ['Karma', 'Sonam', 'Dema', 'Tashi', 'Dorji', 'Pema', 'Wangchuk', 'Choden', 'Jigme', 'Yangchen'],
    'BO': ['Juan', 'Maria', 'Jose', 'Ana', 'Luis', 'Laura', 'Carlos', 'Sofia', 'Miguel', 'Valentina'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART8 = {
    'AD': ['Garcia', 'Rodriguez', 'Fernandez', 'Lopez', 'Martinez', 'Sanchez', 'Perez', 'Gomez', 'Martin', 'Ruiz'],
    'AG': ['Smith', 'Brown', 'Williams', 'Jones', 'Davis', 'Johnson', 'Miller', 'Wilson', 'Moore', 'Taylor'],
    'AM': ['Sargsyan', 'Grigoryan', 'Hovhannisyan', 'Harutyunyan', 'Khachatryan', 'Petrosyan', 'Vardanyan', 'Mkrtchyan', 'Hakobyan', 'Gevorgyan'],
    'AZ': ['Aliyev', 'Mammadov', 'Guliyev', 'Hasanov', 'Huseynov', 'Ismayilov', 'Karimov', 'Ahmadov', 'Abdullayev', 'Rustamov'],
    'BS': ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'],
    'BB': ['Smith', 'Brown', 'Williams', 'Jones', 'Davis', 'Johnson', 'Miller', 'Wilson', 'Moore', 'Taylor'],
    'BZ': ['Garcia', 'Lopez', 'Martinez', 'Hernandez', 'Gonzalez', 'Rodriguez', 'Perez', 'Sanchez', 'Cruz', 'Ramirez'],
    'BJ': ['Sodokin', 'Tossou', 'Adjanohoun', 'Hounkpatin', 'Gbaguidi', 'Soglo', 'Dossou', 'Houngbo', 'Akplogan', 'Gnonlonfoun'],
    'BT': ['Wangchuk', 'Dorji', 'Tenzin', 'Choden', 'Phuntsho', 'Namgay', 'Pema', 'Thinley', 'Lhamo', 'Sonam'],
    'BO': ['Mamani', 'Quispe', 'Flores', 'Condori', 'Rojas', 'Vargas', 'Gutierrez', 'Rodriguez', 'Fernandez', 'Perez'],
};

