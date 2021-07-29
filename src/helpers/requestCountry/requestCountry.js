const countryURL = 'https://restcountries.eu/rest/v2/name/';

const RequestCountry = (countryName) => fetch(`${countryURL}${countryName}`);

export default RequestCountry;
