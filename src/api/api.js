export const Service = {
  async getAllCountries() {
    const response = await fetch('https://restcountries.eu/rest/v2/all');
    return await response.json();
  },

  async seacrhByName(filter, value) {
    const response = await fetch(
      `https://restcountries.eu/rest/v2/${filter}/${value}`
    );
    return await response.json();
  },
};
