// countryData_Part3.js
// ဤဖိုင်တွင် နိုင်ငံများ၏ အသေးစိတ်လိပ်စာအချက်အလက်များ (မြို့များ၊ ပြည်နယ်များ၊ ဖုန်းနံပါတ်ပုံစံများ၊ အမည်များ၊ စသည်တို့) ကို နိုင်ငံ ၁၅ နိုင်ငံစီ ခွဲ၍ ထည့်သွင်းထားပါသည်။
// ဤဖိုင်သည် fakeAddressGenerator.js မှ import လုပ်ပြီး အသုံးပြုရန် ဖြစ်ပါသည်။

// ပံ့ပိုးထားသော နိုင်ငံကုဒ်များ (အပိုင်း ၃)
export const SUPPORTED_COUNTRIES_PART3 = [
    'IE', 'SE', 'CH', 'AT', 'BE', 'NL', 'FI', 'NO', 'DK', 'PT', 'GR', 'PL', 'CZ', 'HU', 'RO'
];

// နိုင်ငံများအတွက် မြို့အချက်အလက်များ
export const CITIES_DATA_PART3 = {
    'IE': ['Dublin', 'Cork', 'Limerick', 'Galway', 'Waterford', 'Drogheda', 'Dundalk', 'Swords', 'Bray', 'Navan'],
    'SE': ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Linköping', 'Västerås', 'Helsingborg', 'Örebro', 'Norrköping', 'Jönköping'],
    'CH': ['Zurich', 'Geneva', 'Basel', 'Lausanne', 'Bern', 'Winterthur', 'Lucerne', 'St. Gallen', 'Lugano', 'Biel/Bienne'],
    'AT': ['Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck', 'Klagenfurt', 'Villach', 'Wels', 'Sankt Pölten', 'Dornbirn'],
    'BE': ['Brussels', 'Antwerp', 'Ghent', 'Charleroi', 'Liège', 'Bruges', 'Namur', 'Leuven', 'Mons', 'Aalst'],
    'NL': ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Groningen', 'Tilburg', 'Almere', 'Breda', 'Nijmegen'],
    'FI': ['Helsinki', 'Espoo', 'Tampere', 'Vantaa', 'Oulu', 'Turku', 'Jyväskylä', 'Lahti', 'Kuopio', 'Kouvola'],
    'NO': ['Oslo', 'Bergen', 'Stavanger', 'Trondheim', 'Fredrikstad', 'Sandnes', 'Kristiansand', 'Drammen', 'Porsgrunn', 'Skien'],
    'DK': ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Frederiksberg', 'Esbjerg', 'Randers', 'Kolding', 'Vejle', 'Horsens'],
    'PT': ['Lisbon', 'Porto', 'Vila Nova de Gaia', 'Amadora', 'Braga', 'Funchal', 'Coimbra', 'Setúbal', 'Queluz', 'Agualva-Cacém'],
    'GR': ['Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa', 'Volos', 'Rhodes', 'Ioannina', 'Chania', 'Acharnes'],
    'PL': ['Warsaw', 'Kraków', 'Łódź', 'Wrocław', 'Poznań', 'Gdańsk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Katowice'],
    'CZ': ['Prague', 'Brno', 'Ostrava', 'Pilsen', 'Liberec', 'Olomouc', 'Ústí nad Labem', 'Hradec Králové', 'České Budějovice', 'Pardubice'],
    'HU': ['Budapest', 'Debrecen', 'Szeged', 'Miskolc', 'Pécs', 'Győr', 'Nyíregyháza', 'Kecskemét', 'Székesfehérvár', 'Szombathely'],
    'RO': ['Bucharest', 'Cluj-Napoca', 'Timișoara', 'Iași', 'Constanța', 'Craiova', 'Brașov', 'Galați', 'Ploiești', 'Oradea'],
};

// နိုင်ငံများအတွက် ပြည်နယ်/တိုင်းဒေသကြီး အချက်အလက်များ (အပြည့်အစုံနာမည်များ)
export const STATES_DATA_PART3 = {
    'IE': ['Leinster', 'Munster', 'Connacht', 'Ulster'],
    'SE': ['Stockholm County', 'Västra Götaland County', 'Skåne County', 'Uppsala County', 'Östergötland County', 'Jönköping County', 'Halland County', 'Kalmar County', 'Dalarna County', 'Västmanland County'],
    'CH': ['Zurich', 'Bern', 'Vaud', 'Geneva', 'Aargau', 'St. Gallen', 'Ticino', 'Lucerne', 'Valais', 'Fribourg'],
    'AT': ['Vienna', 'Lower Austria', 'Upper Austria', 'Styria', 'Tyrol', 'Carinthia', 'Salzburg', 'Vorarlberg', 'Burgenland'],
    'BE': ['Flanders', 'Wallonia', 'Brussels-Capital Region'],
    'NL': ['North Holland', 'South Holland', 'North Brabant', 'Gelderland', 'Utrecht', 'Overijssel', 'Limburg', 'Friesland', 'Groningen', 'Drenthe'],
    'FI': ['Uusimaa', 'Pirkanmaa', 'Southwest Finland', 'North Ostrobothnia', 'Central Finland', 'Päijät-Häme', 'North Savo', 'Kymenlaakso', 'Satakunta', 'Kainuu'],
    'NO': ['Oslo', 'Viken', 'Vestland', 'Trøndelag', 'Innlandet', 'Rogaland', 'Vestfold og Telemark', 'Agder', 'Møre og Romsdal', 'Nordland'],
    'DK': ['Capital Region of Denmark', 'Central Denmark Region', 'Region of Southern Denmark', 'Region Zealand', 'North Denmark Region'],
    'PT': ['Lisbon', 'Porto', 'Setúbal', 'Braga', 'Aveiro', 'Leiria', 'Coimbra', 'Santarém', 'Faro', 'Viseu'],
    'GR': ['Attica', 'Central Macedonia', 'Western Greece', 'Thessaly', 'Crete', 'Eastern Macedonia and Thrace', 'Central Greece', 'Peloponnese', 'North Aegean', 'South Aegean'],
    'PL': ['Masovian Voivodeship', 'Silesian Voivodeship', 'Greater Poland Voivodeship', 'Lesser Poland Voivodeship', 'Lower Silesian Voivodeship', 'Łódź Voivodeship', 'Pomeranian Voivodeship', 'Lublin Voivodeship', 'Subcarpathian Voivodeship', 'Kuyavian-Pomeranian Voivodeship'],
    'CZ': ['Prague', 'Central Bohemian Region', 'South Moravian Region', 'Moravian-Silesian Region', 'Ústí nad Labem Region', 'Olomouc Region', 'Hradec Králové Region', 'Pilsen Region', 'Liberec Region', 'South Bohemian Region'],
    'HU': ['Budapest', 'Pest County', 'Borsod-Abaúj-Zemplén County', 'Szabolcs-Szatmár-Bereg County', 'Hajdú-Bihar County', 'Baranya County', 'Győr-Moson-Sopron County', 'Somogy County', 'Csongrád-Csanád County', 'Fejér County'],
    'RO': ['Bucharest', 'Cluj County', 'Timiș County', 'Iași County', 'Constanța County', 'Dolj County', 'Brașov County', 'Galați County', 'Prahova County', 'Bihor County'],
};

// နိုင်ငံများအတွက် ဇစ်ကုဒ်/စာတိုက်ကုဒ် ပုံစံများ
export const ZIP_FORMATS_DATA_PART3 = {
    'IE': () => {
        const prefixes = ['D01', 'A96', 'K67'];
        const suffixes = ['AA', 'BB', 'CC'];
        return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${Math.floor(Math.random() * (99 - 10 + 1)) + 10}${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
    }, // Example Irish format (Eircode)
    'SE': () => `${Math.floor(Math.random() * (98000 - 10000 + 1)) + 10000}`, // 5 digits
    'CH': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'AT': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'BE': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'NL': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}${['AA', 'BB', 'CC'][Math.floor(Math.random() * 3)]}`, // 4 digits + 2 letters
    'FI': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'NO': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'DK': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'PT': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}-${Math.floor(Math.random() * 999)}`, // 7 digits with hyphen
    'GR': () => `${Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000}`, // 5 digits
    'PL': () => `${Math.floor(Math.random() * 99)}-${Math.floor(Math.random() * 999)}`, // 5 digits with hyphen
    'CZ': () => `${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`, // 5 digits with space
    'HU': () => `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`, // 4 digits
    'RO': () => `${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`, // 6 digits
};

// နိုင်ငံများအတွက် ဖုန်းနံပါတ် ပုံစံများ
export const PHONE_FORMATS_DATA_PART3 = {
    'IE': () => `+353 8${Math.floor(Math.random() * (9 - 3 + 1)) + 3} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'SE': () => `+46 7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'CH': () => `+41 7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10} ${Math.floor(Math.random() * (99 - 10 + 1)) + 10}`,
    'AT': () => `+43 6${Math.floor(Math.random() * (9 - 5 + 1)) + 5}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'BE': () => `+32 4${Math.floor(Math.random() * (9 - 5 + 1)) + 5}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'NL': () => `+31 6 ${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'FI': () => `+358 ${Math.floor(Math.random() * (50 - 40 + 1)) + 40} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`,
    'NO': () => `+47 9${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'DK': () => `+45 ${Math.floor(Math.random() * (99 - 20 + 1)) + 20} ${Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000}`,
    'PT': () => `+351 9${Math.floor(Math.random() * (6 - 1 + 1)) + 1}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'GR': () => `+30 69${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
    'PL': () => `+48 ${Math.floor(Math.random() * (899 - 500 + 1)) + 500} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'CZ': () => `+420 ${Math.floor(Math.random() * (799 - 600 + 1)) + 600} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100} ${Math.floor(Math.random() * (999 - 100 + 1)) + 100}`,
    'HU': () => `+36 20${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000}`,
    'RO': () => `+40 7${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000}`,
};

// နိုင်ငံများအတွက် ပထမနာမည်များ
export const FIRST_NAMES_DATA_PART3 = {
    'IE': ['Jack', 'Emily', 'James', 'Grace', 'Noah', 'Ava', 'Daniel', 'Sophie', 'Conor', 'Mia'],
    'SE': ['William', 'Alice', 'Liam', 'Maja', 'Noah', 'Ella', 'Oscar', 'Ebba', 'Lucas', 'Wilma'],
    'CH': ['Noah', 'Mia', 'Liam', 'Emma', 'Leon', 'Sofia', 'Luca', 'Lena', 'Louis', 'Laura'],
    'AT': ['Paul', 'Anna', 'Leon', 'Lena', 'Felix', 'Mia', 'David', 'Julia', 'Jakob', 'Laura'],
    'BE': ['Noah', 'Olivia', 'Louis', 'Emma', 'Arthur', 'Louise', 'Jules', 'Elise', 'Victor', 'Alice'],
    'NL': ['Noah', 'Lieke', 'Liam', 'Emma', 'Lucas', 'Mila', 'Finn', 'Sophie', 'Sem', 'Julia'],
    'FI': ['Leo', 'Sofia', 'Eino', 'Aino', 'Väinö', 'Helmi', 'Onni', 'Ellen', 'Elias', 'Aurora'],
    'NO': ['Jakob', 'Nora', 'Emil', 'Emma', 'Filip', 'Olivia', 'Oliver', 'Ada', 'William', 'Alma'],
    'DK': ['William', 'Ida', 'Noah', 'Alma', 'Oscar', 'Freja', 'Carl', 'Agnes', 'Valdemar', 'Ella'],
    'PT': ['João', 'Maria', 'Francisco', 'Leonor', 'Santiago', 'Matilde', 'Gabriel', 'Carolina', 'Miguel', 'Beatriz'],
    'GR': ['George', 'Maria', 'Konstantinos', 'Eleni', 'Dimitris', 'Sofia', 'Nikolaos', 'Vasiliki', 'Ioannis', 'Aikaterini'],
    'PL': ['Jan', 'Zofia', 'Jakub', 'Zuzanna', 'Antoni', 'Hanna', 'Aleksander', 'Maja', 'Franciszek', 'Laura'],
    'CZ': ['Jakub', 'Tereza', 'Jan', 'Eliška', 'Tomáš', 'Anna', 'Adám', 'Adéla', 'Matyáš', 'Ema'],
    'HU': ['Bence', 'Hanna', 'Máté', 'Anna', 'Levente', 'Luca', 'Dominik', 'Zsófia', 'Noel', 'Léna'],
    'RO': ['Andrei', 'Maria', 'David', 'Elena', 'Gabriel', 'Sofia', 'Luca', 'Amalia', 'Matei', 'Victoria'],
};

// နိုင်ငံများအတွက် နောက်ဆုံးနာမည်များ
export const LAST_NAMES_DATA_PART3 = {
    'IE': ['Murphy', 'Kelly', 'Byrne', 'Walsh', 'Smith', 'O\'Brien', 'Ryan', 'Doyle', 'McCarthy', 'Gallagher'],
    'SE': ['Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson'],
    'CH': ['Müller', 'Meier', 'Schmid', 'Keller', 'Weber', 'Huber', 'Meyer', 'Fischer', 'Ammann', 'Baumann'],
    'AT': ['Gruber', 'Huber', 'Bauer', 'Wagner', 'Müller', 'Steiner', 'Moser', 'Maier', 'Berger', 'Fuchs'],
    'BE': ['Peeters', 'Janssens', 'Maes', 'Jacobs', 'Mertens', 'Goossens', 'Wouters', 'De Smet', 'Dubois', 'Lambert'],
    'NL': ['de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Visser', 'Smit', 'Meijer', 'de Boer'],
    'FI': ['Korhonen', 'Virtanen', 'Mäkinen', 'Nieminen', 'Mäkelä', 'Hämäläinen', 'Laine', 'Koskinen', 'Järvinen', 'Lehtonen'],
    'NO': ['Hansen', 'Johansen', 'Olsen', 'Andersen', 'Pedersen', 'Nilsen', 'Kristiansen', 'Jensen', 'Karlsen', 'Pettersen'],
    'DK': ['Jensen', 'Nielsen', 'Hansen', 'Pedersen', 'Andersen', 'Christensen', 'Larsen', 'Sørensen', 'Rasmussen', 'Jørgensen'],
    'PT': ['Silva', 'Santos', 'Ferreira', 'Pereira', 'Oliveira', 'Carvalho', 'Rodrigues', 'Martins', 'Fernandes', 'Gomes'],
    'GR': ['Papadopoulos', 'Georgiou', 'Nikolaou', 'Pappas', 'Vasileiou', 'Karagiannis', 'Ioannou', 'Konstantinou', 'Panagiotou', 'Mavridis'],
    'PL': ['Kowalski', 'Wiśniewski', 'Wójcik', 'Kowalczyk', 'Kamiński', 'Lewandowski', 'Zieliński', 'Szymański', 'Woźniak', 'Dąbrowski'],
    'CZ': ['Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Němec'],
    'HU': ['Nagy', 'Kovács', 'Tóth', 'Szabó', 'Horváth', 'Kiss', 'Varga', 'Molnár', 'Takács', 'Lakatos'],
    'RO': ['Popa', 'Popescu', 'Dumitrescu', 'Stan', 'Stoica', 'Georgescu', 'Constantinescu', 'Mihai', 'Radu', 'Dinu'],
};
