const body = document.querySelector("body")
const list_item1 = document.querySelector(".list__item1-btn")
const list_item2 = document.querySelector(".list__item2-btn")
const list_item3 = document.querySelector(".list__item3-btn")
const list_item4 = document.querySelector(".list__item4-btn")
let btn = document.querySelector(".btn")
let li = document.querySelector(".countries")

const worldCountries = [
    "Belize",
    "Costa Rica",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "Bolivia",
    "Brazil",
    "Colombia",
    " Ecuador",
    "French Guiana",
    " Galápagos Islands",
    "Guyana",
    "Paraguay",
    " Peru",
    "Suriname",
    " Venezuela",
    "Suriname",
    "Venezuela",
    "Nicaragua",
    "Panama",
    " Anguilla",
    "Antigua and Barbuda",
    "Aruba",
    "Bahamas",
    "Barbados",
    "British Virgin Islands",
    "Cayman Islands",
    "Cuba",
    "Dominica",
    " Dominican Republic",
    "Grenada",
    "Guadeloupe",
    "Haiti",
    "Jamaica",
    "Martinique",
    " Montserrat",
    " Netherlands Antilles",
    "Puerto Rico",
    "Saint Barthélemy",
    "Saint Kits and Nevis",
    "Saint Lucia",
    " Saint Martin (France)",
    "Saint Vincent and the Grenadines",

    " Turks and Cacaos Islands",
    " United States Virgin Islands",
    "CENTRAL AFRICA - List of Tropical Countries",
    "Angola",
    "Cameroon",
    "Central African Republic",
    "Chad",
    "Congo",
    "Democratic Republic of Congo (Zaire)",
    "Equatorial Guinea",
    "Gabon",
    "Sudan",
    "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic ",
    "Chad", "Algeria", "Angola", "Comoros", "Congo", "Cote d'Ivoire", "Djibouti", "Egypt",
    "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
    "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho",
    "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco",
    "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe",
    "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa",
    "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe",

    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
    "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France",
    "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
    "North Macedonia (formerly Macedonia)", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia",
    "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom (UK)", "Vatican City (Holy See)",
    "Brazil",
    "Colombia", "Argentina", "Peru", "Venezuela", "Chile", "Trinidad and Tobago", "Cuba",
    "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname", "Costa Rica",
    " El Salvador", " Guatemala", "Honduras", "Nicaragua", "Panama", "USA", "Canada", "Belize"
]

let CountriesInAmetica = ["Brazil",
    "Colombia", "Argentina", "Peru", "Venezuela", "Chile", "Trinidad and Tobago", "Cuba",
    "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Guyana", "Suriname", "Costa Rica",
    " El Salvador", " Guatemala", "Honduras", "Nicaragua", "Panama", "USA", "Canada", "Belize"
]


let countriesInAsia = ["Afghanistan",
    "Azerbaijan", "Armenia", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia",
    "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan",
    "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar (formerly Burma)",
    "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Russia", "Saudi Arabia",
    "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste",
    "Turkey", "Turkmenistan", "United Arab Emirates (UAE)", "Uzbekistan", "Vietnam", "Yemen"
]

let countriesInafrika = ["Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic ",
    "Chad", "Algeria", "Angola", "Comoros", "Congo", "Cote d'Ivoire", "Djibouti", "Egypt",
    "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia",
    "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho",
    "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco",
    "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "Sao Tome and Principe",
    "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa",
    "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
]


let countriesInEurop = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria",
    "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France",
    "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kazakhstan", "Kosovo", "Latvia",
    "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands",
    "North Macedonia (formerly Macedonia)", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia",
    "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom (UK)", "Vatican City (Holy See)",
]



btn.addEventListener("click", function () {

    let getrandom = Math.floor(Math.random() * countriesInEurop.length)

    li.textContent = worldCountries[getrandom]
})


list_item1.addEventListener("click", function () {

    let getrandom = Math.floor(Math.random() * countriesInafrika.length)

    li.textContent = countriesInafrika[getrandom]
})

list_item2.addEventListener("click", function () {

    let getrandom = Math.floor(Math.random() * CountriesInAmetica.length)

    li.textContent = CountriesInAmetica[getrandom]
})
list_item3.addEventListener("click", function () {

    let getrandom = Math.floor(Math.random() * countriesInAsia.length)

    li.textContent = countriesInAsia[getrandom]
})
list_item4.addEventListener("click", function () {

    let getrandom = Math.floor(Math.random() * countriesInEurop.length)

    li.textContent = countriesInEurop[getrandom]
})