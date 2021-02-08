

fetch('https://restcountries.eu/rest/v2/all')

.then(res => res.json())
.then(data =>displayCountry(data))


const displayCountry = countries =>{

 
    const countriesDiv = document.getElementById("show-country")


countries.forEach(country => {

       const countriesDiv = document.getElementById("show-country")

       const countryDiv = document.createElement("div")
        countryDiv.className ='country'
         const countryInfo =`
    
        <h3 class="country-name">${country.name}</h3>

        <p>${country.capital}</p>

        <button onclick="displayCountryDetails('${country.name}')">Details</button>
    
    `
        countryDiv.innerHTML = countryInfo;

       countriesDiv.appendChild(countryDiv);
    
});


}



//country details--------------------------------

const displayCountryDetails = name =>{

const url = `https://restcountries.eu/rest/v2/name/${name}`

fetch(url)

.then(res => res.json())
.then(data => renderCountryInfo(data[0]))

}


const renderCountryInfo = country =>{

    const countryDiv = document.getElementById("countryDetails")
    countryDiv.innerHTML =` 
    <h1>${country.name}</h1>
    <p>population : ${country.population}</p>
    <p>Area : ${country.area}</p>

    <img src="${country.flag}">
    
    `


}