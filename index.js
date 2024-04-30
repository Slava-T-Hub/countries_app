let nameStr = "";
for (const nameOfCountry of allCountriesArr) {
  nameStr += `<option> ${nameOfCountry.name.common} </option>`;
}
document.querySelector("#searchOptions").innerHTML = nameStr;

// // ****************************************

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchOptions = document.getElementById("searchOptions");
  const searchBtn = document.getElementById("searchBtn");

  searchInput.addEventListener("focus", function () {
    searchOptions.hidden = false;
  });

  searchOptions.addEventListener("change", function () {
    const selectedCountry = this.value;
    objectFromJson(selectedCountry);
  });
  searchBtn.addEventListener("click", function () {
    const selectedCountry = searchInput.value;
    objectFromJson(selectedCountry);
  });
});
// ****************************************

function objectFromJson(countryName) {
  //let inputValue = document.querySelector("#searchInput").value;
  for (const theCountryObj of allCountriesArr) {
    if (theCountryObj.name.common.toLowerCase() === countryName.toLowerCase()) {
      console.log(theCountryObj);

      // Adding the name of country on screen
      document.querySelector("#countryName").innerText =
        theCountryObj.name.official;

      // Adding the flag image on screen
      document
        .querySelector("#countryFlag")
        .setAttribute("src", theCountryObj.flags.svg);
      document.querySelector("#countryFlag").setAttribute("alt", "Flag");

      //-------------- languages element ---------
      languagesStr = "<ul>";
      for (const [k, v] of Object.entries(theCountryObj.languages)) {
        languagesStr += `<li> ${k} : ${v} </li>`;
      }
      languagesStr += "</ul>";
      document.querySelector("#myLanguagesDiv").innerHTML = languagesStr;

      //-------------- Population: element ---------
      document.querySelector("#myPopulationDiv").innerHTML =
        theCountryObj.population;

      //-------------- Capital: element ---------
      document.querySelector("#myCapitalDiv").innerHTML = theCountryObj.capital;

      //-------------- AlternativeSpellings: element ---------
      let altSpellingsStr = "<ul>";
      for (let i = 0; i < theCountryObj.altSpellings.length; i++) {
        altSpellingsStr += `<li> ${theCountryObj.altSpellings[i]} </li>`;
      }
      altSpellingsStr += "</ul>";
      document.querySelector("#myAlternativeSpellingsDiv").innerHTML =
        altSpellingsStr;

      //-------------- Region: element ---------
      document.querySelector("#myRegionDiv").innerHTML = theCountryObj.region;

      //-------------- Subregion: element ---------
      document.querySelector("#mySubregionDiv").innerHTML =
        theCountryObj.subregion;

      //-------------- Lititude: element ---------
      const Lititude = theCountryObj.latlng[0];
      document.querySelector("#myLititudeDiv").innerHTML = `${Lititude}`;

      //-------------- Longitude: element ---------
      const Longitude = theCountryObj.latlng[1];
      document.querySelector("#myLongitudeDiv").innerHTML = `${Longitude}`;
      //-------------- timezones:: element ---------
      document.querySelector("#myTimezonesDiv").innerHTML =
        theCountryObj.timezones;

      //-------------- Borders: element ---------
      let bordersStr = "<ul>";
      if (theCountryObj.borders && theCountryObj.borders.length) {
        for (let i = 0; i < theCountryObj.borders.length; i++) {
          bordersStr += `<li>${theCountryObj.borders[i]}</li>`;
        }
      } else {
        bordersStr += "<li>No borders</li>";
      }
      bordersStr += "</ul>";

      document.querySelector("#myBordersDiv").innerHTML = bordersStr;

      //-------------- nativeName: element ---------

      let nativeNamesStr = "<ul>";
      for (const [_, v] of Object.entries(theCountryObj.name.nativeName)) {
        nativeNamesStr += `<li> ${v.common}  </li> 
                           <li> ${v.official}</li>`;
      }
      nativeNamesStr += "</ul>";
      document.querySelector("#myNativeNameDiv").innerHTML = nativeNamesStr;

      //-------------- myCurrencieseDiv: element ---------
      let currencieseStr = "<ul>";
      for (const [_, v] of Object.entries(theCountryObj.currencies)) {
        currencieseStr += `<li> ${v.name}  </li>`;
      }
      currencieseStr += "</ul>";
      document.querySelector("#myCurrencieseDiv").innerHTML = currencieseStr;

      //-------------- Code: element ---------

      let postalCodeStr = "";
      for (const [_, v] of Object.entries(theCountryObj.idd)) {
        postalCodeStr += v;
      }
      document.querySelector("#myCodeeDiv").innerHTML = postalCodeStr;
      //-------------- mySimbolDiv: element ---------

      document
        .querySelector("#mySimbolImg")
        .setAttribute("src", theCountryObj.coatOfArms.png);
    }
  }
}
// ****************************************
