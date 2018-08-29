const PubSub = require('../helpers/pub_sub.js');

const CountriesView = function(element){
  this.element = element;
}

CountriesView.prototype.bindEvents = function(){
  PubSub.subscribe("Countries:countries-loaded", (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
  })

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = event.target.value;
    PubSub.publish('CountryView:change', selectedIndex);
  });
}

CountriesView.prototype.populate = function(countryData){
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = CountriesView;
