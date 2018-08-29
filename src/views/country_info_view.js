const PubSub = require("../helpers/pub_sub.js");

const CountryInfoView = function(container){
  this.container = container;
}

CountryInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:selected-country-ready', (event) => {
    const country = event.detail;
    this.render(country);
    console.log(country);
  });
};

CountryInfoView.prototype.render = function(country){
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `Country: ${country.name} & Region: ${country.region}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
  const flagImage = document.createElement('img');
  flagImage.src = country.flag;
  this.container.appendChild(flagImage);
};

module.exports = CountryInfoView;
