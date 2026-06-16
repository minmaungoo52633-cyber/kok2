// fakeAddressGenerator.js
// This file contains functions to generate fake addresses for various countries.

// Import data from all country data parts
import {
    SUPPORTED_COUNTRIES_PART1, CITIES_DATA_PART1, STATES_DATA_PART1, ZIP_FORMATS_DATA_PART1, PHONE_FORMATS_DATA_PART1, FIRST_NAMES_DATA_PART1, LAST_NAMES_DATA_PART1
} from './countryData_Part1.js';
import {
    SUPPORTED_COUNTRIES_PART2, CITIES_DATA_PART2, STATES_DATA_PART2, ZIP_FORMATS_DATA_PART2, PHONE_FORMATS_DATA_PART2, FIRST_NAMES_DATA_PART2, LAST_NAMES_DATA_PART2
} from './countryData_Part2.js';
import {
    SUPPORTED_COUNTRIES_PART3, CITIES_DATA_PART3, STATES_DATA_PART3, ZIP_FORMATS_DATA_PART3, PHONE_FORMATS_DATA_PART3, FIRST_NAMES_DATA_PART3, LAST_NAMES_DATA_PART3
} from './countryData_Part3.js';
import {
    SUPPORTED_COUNTRIES_PART4, CITIES_DATA_PART4, STATES_DATA_PART4, ZIP_FORMATS_DATA_PART4, PHONE_FORMATS_DATA_PART4, FIRST_NAMES_DATA_PART4, LAST_NAMES_DATA_PART4
} from './countryData_Part4.js';
import {
    SUPPORTED_COUNTRIES_PART5, CITIES_DATA_PART5, STATES_DATA_PART5, ZIP_FORMATS_DATA_PART5, PHONE_FORMATS_DATA_PART5, FIRST_NAMES_DATA_PART5, LAST_NAMES_DATA_PART5
} from './countryData_Part5.js';
import {
    SUPPORTED_COUNTRIES_PART6, CITIES_DATA_PART6, STATES_DATA_PART6, ZIP_FORMATS_DATA_PART6, PHONE_FORMATS_DATA_PART6, FIRST_NAMES_DATA_PART6, LAST_NAMES_DATA_PART6
} from './countryData_Part6.js';
import {
    SUPPORTED_COUNTRIES_PART7, CITIES_DATA_PART7, STATES_DATA_PART7, ZIP_FORMATS_DATA_PART7, PHONE_FORMATS_DATA_PART7, FIRST_NAMES_DATA_PART7, LAST_NAMES_DATA_PART7
} from './countryData_Part7.js';
import { // New import for Part8
    SUPPORTED_COUNTRIES_PART8, CITIES_DATA_PART8, STATES_DATA_PART8, ZIP_FORMATS_DATA_PART8, PHONE_FORMATS_DATA_PART8, FIRST_NAMES_DATA_PART8, LAST_NAMES_DATA_PART8
} from './countryData_Part8.js';


/**
 * Generates a random integer within a specified range.
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive).
 * @returns {number} - A random integer.
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Selects a random element from an array.
 * @param {Array<string>} arr - The array to select from.
 * @returns {string} - A random element from the array.
 */
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generates a random street name.
 * @returns {string} - A random street name.
 */
function generateStreetName() {
    const prefixes = ['North', 'South', 'East', 'West', 'Upper', 'Lower', 'Central'];
    const names = ['Main', 'Oak', 'Pine', 'Maple', 'Elm', 'Cedar', 'Park', 'Highland', 'River', 'Lake'];
    const suffixes = ['Street', 'Avenue', 'Road', 'Lane', 'Drive', 'Boulevard', 'Place', 'Court'];

    const prefix = Math.random() < 0.3 ? getRandomElement(prefixes) + ' ' : ''; // 30% chance for prefix
    const name = getRandomElement(names);
    const suffix = getRandomElement(suffixes);

    return `${prefix}${name} ${suffix}`;
}

/**
 * Generates a random date of birth.
 * @returns {string} - A random date of birth in YYYY-MM-DD format.
 */
function generateDateOfBirth() {
    const year = getRandomInt(1950, 2005);
    const month = getRandomInt(1, 12).toString().padStart(2, '0');
    const day = getRandomInt(1, 28).toString().padStart(2, '0'); // To avoid issues with month lengths
    return `${year}-${month}-${day}`;
}

/**
 * Generates a random gender.
 * @returns {string} - 'Male' or 'Female'.
 */
function generateGender() {
    return getRandomElement(['Male', 'Female']);
}

/**
 * Generates a random occupation.
 * @returns {string} - A random occupation.
 */
function generateOccupation() {
    const occupations = [
        'Software Engineer', 'Teacher', 'Doctor', 'Nurse', 'Accountant', 'Artist', 'Writer', 'Chef',
        'Electrician', 'Plumber', 'Designer', 'Marketing Manager', 'Sales Representative',
        'Project Manager', 'Data Scientist', 'Financial Analyst', 'Graphic Designer', 'Mechanic'
    ];
    return getRandomElement(occupations);
}

/**
 * Generates a random company name.
 * @returns {string} - A random company name.
 */
function generateCompany() {
    const prefixes = ['Global', 'Tech', 'United', 'Alpha', 'Dynamic', 'Future', 'Prime', 'Apex'];
    const names = ['Solutions', 'Innovations', 'Systems', 'Ventures', 'Corp', 'Group', 'Enterprises', 'Labs'];
    return `${getRandomElement(prefixes)} ${getRandomElement(names)}`;
}

/**
 * Generates a random email address.
 * @param {string} firstName - User's first name.
 * @param {string} lastName - User's last name.
 * @returns {string} - A random email address.
 */
function generateEmail(firstName, lastName) {
    const domains = ['example.com', 'mail.com', 'test.org', 'email.net', 'domain.co'];
    const namePart = `${firstName.toLowerCase().replace(/\s/g, '')}.${lastName.toLowerCase().replace(/\s/g, '')}`; // Remove spaces
    return `${namePart}${getRandomInt(1, 99)}@${getRandomElement(domains)}`;
}

/**
 * Generates a random 16-digit credit card number (MasterCard/Visa like).
 * @returns {string} - A random credit card number.
 */
function generateCreditCard() {
    let cardNumber = '';
    const issuer = Math.random() < 0.5 ? '4' : '5'; // 4 for Visa, 5 for MasterCard
    cardNumber += issuer;

    for (let i = 0; i < 15; i++) {
        cardNumber += Math.floor(Math.random() * 10);
    }
    return cardNumber.replace(/(.{4})/g, '$1 ').trim(); // Format with spaces
}

/**
 * Generates a random 3-digit security code (CVV).
 * @returns {string} - A random 3-digit security code.
 */
function generateSecurityCode() {
    return getRandomInt(100, 999).toString();
}

/**
 * Generates a random credit card expiration date.
 * @returns {string} - An expiration date in MM/YY format.
 */
function generateExpirationDate() {
    const currentYear = new Date().getFullYear();
    const expMonth = getRandomInt(1, 12).toString().padStart(2, '0');
    const expYear = getRandomInt(currentYear + 1, currentYear + 5).toString().slice(-2); // Next 1 to 5 years
    return `${expMonth}/${expYear}`;
}

// Consolidate all country data into single objects/arrays
export const ALL_SUPPORTED_COUNTRIES = [
    ...new Set([ // Use Set to ensure unique country codes
        ...SUPPORTED_COUNTRIES_PART1,
        ...SUPPORTED_COUNTRIES_PART2,
        ...SUPPORTED_COUNTRIES_PART3,
        ...SUPPORTED_COUNTRIES_PART4,
        ...SUPPORTED_COUNTRIES_PART5,
        ...SUPPORTED_COUNTRIES_PART6,
        ...SUPPORTED_COUNTRIES_PART7,
        ...SUPPORTED_COUNTRIES_PART8 // Add Part8 data
    ])
];

export const ALL_CITIES_DATA = {
    ...CITIES_DATA_PART1, ...CITIES_DATA_PART2, ...CITIES_DATA_PART3, ...CITIES_DATA_PART4,
    ...CITIES_DATA_PART5, ...CITIES_DATA_PART6, ...CITIES_DATA_PART7, ...CITIES_DATA_PART8 // Add Part8 data
};

export const ALL_STATES_DATA = {
    ...STATES_DATA_PART1, ...STATES_DATA_PART2, ...STATES_DATA_PART3, ...STATES_DATA_PART4,
    ...STATES_DATA_PART5, ...STATES_DATA_PART6, ...STATES_DATA_PART7, ...STATES_DATA_PART8 // Add Part8 data
};

export const ALL_ZIP_FORMATS_DATA = {
    ...ZIP_FORMATS_DATA_PART1, ...ZIP_FORMATS_DATA_PART2, ...ZIP_FORMATS_DATA_PART3, ...ZIP_FORMATS_DATA_PART4,
    ...ZIP_FORMATS_DATA_PART5, ...ZIP_FORMATS_DATA_PART6, ...ZIP_FORMATS_DATA_PART7, ...ZIP_FORMATS_DATA_PART8 // Add Part8 data
};

export const ALL_PHONE_FORMATS_DATA = {
    ...PHONE_FORMATS_DATA_PART1, ...PHONE_FORMATS_DATA_PART2, ...PHONE_FORMATS_DATA_PART3, ...PHONE_FORMATS_DATA_PART4,
    ...PHONE_FORMATS_DATA_PART5, ...PHONE_FORMATS_DATA_PART6, ...PHONE_FORMATS_DATA_PART7, ...PHONE_FORMATS_DATA_PART8 // Add Part8 data
};

export const ALL_FIRST_NAMES_DATA = {
    ...FIRST_NAMES_DATA_PART1, ...FIRST_NAMES_DATA_PART2, ...FIRST_NAMES_DATA_PART3, ...FIRST_NAMES_DATA_PART4,
    ...FIRST_NAMES_DATA_PART5, ...FIRST_NAMES_DATA_PART6, ...FIRST_NAMES_DATA_PART7, ...FIRST_NAMES_DATA_PART8 // Add Part8 data
};

export const ALL_LAST_NAMES_DATA = {
    ...LAST_NAMES_DATA_PART1, ...LAST_NAMES_DATA_PART2, ...LAST_NAMES_DATA_PART3, ...LAST_NAMES_DATA_PART4,
    ...LAST_NAMES_DATA_PART5, ...LAST_NAMES_DATA_PART6, ...LAST_NAMES_DATA_PART7, ...LAST_NAMES_DATA_PART8 // Add Part8 data
};

// Mapping for Country Codes to Full Names
export const COUNTRY_FULL_NAMES = {
    'US': 'United States', 'UK': 'United Kingdom', 'CA': 'Canada', 'AU': 'Australia', 'DE': 'Germany',
    'FR': 'France', 'JP': 'Japan', 'MM': 'Myanmar', 'TH': 'Thailand', 'SG': 'Singapore',
    'MY': 'Malaysia', 'ID': 'Indonesia', 'PH': 'Philippines', 'VN': 'Vietnam', 'LA': 'Laos',
    'KH': 'Cambodia', 'BN': 'Brunei', 'CN': 'China', 'IN': 'India', 'BR': 'Brazil',
    'RU': 'Russia', 'ZA': 'South Africa', 'EG': 'Egypt', 'NG': 'Nigeria', 'MX': 'Mexico',
    'AR': 'Argentina', 'ES': 'Spain', 'IT': 'Italy', 'KR': 'South Korea', 'NZ': 'New Zealand',
    'IE': 'Ireland', 'SE': 'Sweden', 'CH': 'Switzerland', 'AT': 'Austria', 'BE': 'Belgium',
    'NL': 'Netherlands', 'FI': 'Finland', 'NO': 'Norway', 'DK': 'Denmark', 'PT': 'Portugal',
    'GR': 'Greece', 'PL': 'Poland', 'CZ': 'Czech Republic', 'HU': 'Hungary', 'RO': 'Romania',
    'TR': 'Turkey', 'SA': 'Saudi Arabia', 'AE': 'United Arab Emirates', 'QA': 'Qatar', 'KW': 'Kuwait',
    'OM': 'Oman', 'BH': 'Bahrain', 'JO': 'Jordan', 'LB': 'Lebanon', 'SY': 'Syria',
    'IQ': 'Iraq', 'IR': 'Iran', 'PK': 'Pakistan', 'BD': 'Bangladesh', 'LK': 'Sri Lanka',
    'SK': 'Slovakia', 'SI': 'Slovenia', 'HR': 'Croatia', 'BG': 'Bulgaria', 'UA': 'Ukraine',
    'LT': 'Lithuania', 'LV': 'Latvia', 'EE': 'Estonia', 'BY': 'Belarus', 'MD': 'Moldova',
    'AL': 'Albania', 'BA': 'Bosnia and Herzegovina', 'RS': 'Serbia', 'ME': 'Montenegro', 'XK': 'Kosovo',
    'MK': 'North Macedonia', 'CY': 'Cyprus',
    'DZ': 'Algeria', 'MA': 'Morocco', 'KE': 'Kenya', 'ET': 'Ethiopia', 'GH': 'Ghana',
    'CI': 'Ivory Coast', 'SN': 'Senegal', 'CM': 'Cameroon', 'CD': 'Democratic Republic of the Congo', 'AO': 'Angola',
    // Add new countries from Part8
    'AD': 'Andorra', 'AG': 'Antigua and Barbuda', 'AM': 'Armenia', 'AZ': 'Azerbaijan', 'BS': 'Bahamas',
    'BB': 'Barbados', 'BZ': 'Belize', 'BJ': 'Benin', 'BT': 'Bhutan', 'BO': 'Bolivia'
};

/**
 * Returns the full country name for a given country code.
 * @param {string} countryCode - The 2-letter country code (e.g., 'US', 'MM').
 * @returns {string} - The full country name, or the code itself if not found.
 */
export function getCountryName(countryCode) {
    return COUNTRY_FULL_NAMES[countryCode.toUpperCase()] || countryCode;
}

/**
 * Returns a list of supported country codes for fake address generation.
 * @returns {Array<string>} - An array of supported country codes.
 */
export function getSupportedCountries() {
    return ALL_SUPPORTED_COUNTRIES;
}

/**
 * Generates a fake address for a specified country.
 * @param {string} countryCode - The 2-letter country code (e.g., 'US', 'UK', 'MM', 'TH').
 * @returns {object|null} - An object containing fake address details, or null if country is not supported.
 */
export function generateFakeAddress(countryCode) {
    const code = countryCode.toUpperCase();

    // Check if the country is supported
    if (!ALL_SUPPORTED_COUNTRIES.includes(code)) {
        console.error(`Country code ${code} is not supported.`);
        return null;
    }

    const firstNames = ALL_FIRST_NAMES_DATA[code];
    const lastNames = ALL_LAST_NAMES_DATA[code];
    const cities = ALL_CITIES_DATA[code];
    const states = ALL_STATES_DATA[code];
    const zipFormat = ALL_ZIP_FORMATS_DATA[code];
    const phoneFormat = ALL_PHONE_FORMATS_DATA[code];

    if (!firstNames || !lastNames || !cities || !states || !zipFormat || !phoneFormat) {
        console.error(`Missing data for country code ${code}.`);
        return null;
    }

    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const streetAddress = `${getRandomInt(1, 999)} ${generateStreetName()}`;
    const city = getRandomElement(cities);
    const state = getRandomElement(states);
    const zipCode = zipFormat();
    const phoneNumber = phoneFormat();
    const email = generateEmail(firstName, lastName);
    const dob = generateDateOfBirth();
    const gender = generateGender();
    const occupation = generateOccupation();
    const company = generateCompany();
    const creditCard = generateCreditCard();
    const securityCode = generateSecurityCode();
    const expirationDate = generateExpirationDate();

    return {
        fullName: `${firstName} ${lastName}`,
        firstName: firstName,
        lastName: lastName,
        streetAddress: streetAddress,
        city: city,
        state: state,
        zipCode: zipCode,
        country: code, // Keep country code here
        fullCountryName: getCountryName(code), // Add full country name for display
        phoneNumber: phoneNumber,
        email: email,
        dateOfBirth: dob,
        gender: gender,
        occupation: occupation,
        company: company,
        creditCard: creditCard,
        securityCode: securityCode,
        expirationDate: expirationDate
    };
}

// Log the total number of unique countries supported after consolidation
console.log(`[fakeAddressGenerator] Total unique countries supported: ${ALL_SUPPORTED_COUNTRIES.length}`);
