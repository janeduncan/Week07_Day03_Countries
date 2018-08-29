const Countries = require("./models/countries.js")
const CountriesView = require("./views/countries_view.js")
const CountriesInfoView = require("./views/country_info_view.js")

document.addEventListener('DOMContentLoaded', function () {

  const selectElement = document.querySelector('select#countries');
  const countriesDropdown = new CountriesView(selectElement);
  countriesDropdown.bindEvents();

  const countryDiv = document.querySelector('div#country')
  const CountriesInfoDisplay = new CountriesInfoView(countryDiv);
  CountriesInfoDisplay.bindEvents();

  const countries = new Countries();
  countries.getData();

});
