let maincard = document.getElementById("maincard");
let seccard = document.getElementById("seccard");
let thcard = document.getElementById("thcard");
let fourthcard =document.getElementById("fourthcard")
let fifthcard =document.getElementById("fifthcard")
let sixthcard=document.getElementById("sixthcard")



const nav = document.getElementById("navbarSection");
const header = document.getElementById("header");
window.addEventListener('scroll', () => {
  if(window.scrollY >= nav.offsetHeight)
  {
    nav.classList.add('bg-primary')

  }
  else {
    nav.classList.remove('bg-primary')
  }
})

async function currentweather(res) {
    let current = res.current;
    let location = res.location;
    let box = '';
    box += `
    <div class="header-custom-ligth card-header d-flex justify-content-center">
                <div class="day">${new Date().toLocaleDateString('en-US', { weekday: 'long' })}</div>
                <div class="date">${new Date().toLocaleDateString()}</div>
              </div>
              <div class="body-custom-ligth card-body text-center">
                <h5 class="card-title">${location.name}, ${location.country}</h5>

                <div class="card-txt">
                  <div class="degree d-flex justify-content-between">
                    <h2>${current.temp_c}<sub class="sub-top">o</sub>C</h2>
                    <img src="${current.condition.icon}" alt="${current.condition.text}">
                  </div>
                  <div class="weatherCondition">${current.condition.text}</div>
                  <span class="px-2">${current.humidity}%</span>
                  <span class="px-2">${current.wind_kph} km/h</span>
                  <span class="px-2">${current.wind_dir}</span>
                </div>
              </div>
    `;
    maincard.innerHTML = box;
    loading.classList.add('d-none');

    // Change body background based on weather condition
    
}


async function seacondwether(res) {
    let forecast = res.forecast.forecastday[1]; // Tomorrow
    let box = '';
    box += `<div class="header-custom-dark card-header d-flex justify-content-center">
                <div class="day">${new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
              </div>
              <div class="body-custom-dark card-body text-center">
              <div class='cardimg'>
                 <img src="${forecast.day.condition.icon}" alt="${forecast.day.condition.text}">
                </div>
                <div class="degreeAfter">
                <h4>${forecast.day.maxtemp_c}<sub class="sub-top">o</sub>C</h4>
                <small>${forecast.day.mintemp_c}o</small>
                <p>${forecast.day.condition.text}</p>
                    
              </div>
              </div>`;
    seccard.innerHTML = box;
    
}

async function thirdwether(res) {
    let forecast = res.forecast.forecastday[2]; // Day after tomorrow
    let box = '';
    box += `<div class="header-custom-dark card-header d-flex justify-content-center">
                <div class="day">${new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
              </div>
              <div class="body-custom-dark card-body text-center">
              <div class='cardimg'>
                 <img src="${forecast.day.condition.icon}" alt="${forecast.day.condition.text}">
                </div>
                <div class="degreeAfter">
                <h4>${forecast.day.maxtemp_c}<sub class="sub-top">o</sub>C</h4>
                <small>${forecast.day.mintemp_c}o</small>
                <p>${forecast.day.condition.text}</p>
                    
              </div>
              </div>`;
    thcard.innerHTML = box;
}

async function fourthwether(res) {
    let forecast = res.forecast.forecastday[3]; // Day after tomorrow
    let box = '';
    box += `<div class="header-custom-dark card-header d-flex justify-content-center">
                <div class="day">${new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
              </div>
              <div class="body-custom-dark card-body text-center">
              <div class='cardimg'>
                 <img src="${forecast.day.condition.icon}" alt="${forecast.day.condition.text}">
                </div>
                <div class="degreeAfter">
                <h4>${forecast.day.maxtemp_c}<sub class="sub-top">o</sub>C</h4>
                <small>${forecast.day.mintemp_c}o</small>
                <p>${forecast.day.condition.text}</p>
                    
              </div>
              </div>`;
    fourthcard.innerHTML = box;
}

async function fifthwether(res) {
    let forecast = res.forecast.forecastday[4]; // Day after tomorrow
    let box = '';
    box += `<div class="header-custom-dark card-header d-flex justify-content-center">
                <div class="day">${new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
              </div>
              <div class="body-custom-dark card-body text-center">
              <div class='cardimg'>
                 <img src="${forecast.day.condition.icon}" alt="${forecast.day.condition.text}">
                </div>
                <div class="degreeAfter">
                <h4>${forecast.day.maxtemp_c}<sub class="sub-top">o</sub>C</h4>
                <small>${forecast.day.mintemp_c}o</small>
                <p>${forecast.day.condition.text}</p>
                    
              </div>
              </div>`;
    fifthcard.innerHTML = box;
}

async function sixthwether(res) {
    let forecast = res.forecast.forecastday[5]; // Day after tomorrow
    let box = '';
    box += `<div class="header-custom-dark card-header d-flex justify-content-center">
                <div class="day">${new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long' })}</div>
              </div>
              <div class="body-custom-dark card-body text-center">
              <div class='cardimg'>
                 <img src="${forecast.day.condition.icon}" alt="${forecast.day.condition.text}">
                </div>
                <div class="degreeAfter">
                <h4>${forecast.day.maxtemp_c}<sub class="sub-top">o</sub>C</h4>
                <small>${forecast.day.mintemp_c}o</small>
                <p>${forecast.day.condition.text}</p>
                    
              </div>
              </div>`;
    sixthcard.innerHTML = box;
}
// Function to fetch weather data
async function fetchApi(x = 'egypt') {
    try {
        let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3e71a2275ba1409e9f1230406251912&q=${x}&days=7&aqi=yes&alerts=yes`);
        let res = await data.json();
        console.log(res);
        await currentweather(res);
        await seacondwether(res);
        await thirdwether(res);
        await fourthwether(res);
        await fifthwether(res);
        await sixthwether(res)

        populateForecastTable(res);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to populate the forecast table
function populateForecastTable(res) {
    const tableBody = document.querySelector('#weather-table tbody');
    tableBody.innerHTML = '';
    res.forecast.forecastday.forEach(day => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = new Date(day.date).toLocaleDateString();
        row.insertCell(1).textContent = `${day.day.maxtemp_c}°C / ${day.day.mintemp_c}°C`;
        row.insertCell(2).textContent = day.day.condition.text;
        row.insertCell(3).textContent = `${day.day.avghumidity}%`;
        row.insertCell(4).textContent = `${day.day.maxwind_kph} km/h`;
    });
}

// Event listeners for search
document.getElementById('search-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        fetchApi(query);
    }
});

document.getElementById('search-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query) {
            fetchApi(query);
        }
    }
});

// Load default weather on page load
fetchApi();
