// Select elements
const currentTemp = document.querySelector("#current-temp");
const description = document.querySelector("#description");
const highTemp = document.querySelector("#temp-high");
const lowTemp = document.querySelector("#temp-low");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const weatherIcon = document.querySelector("#weather-icon");

const tomorrow = document.querySelector("#tomorrow");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");

// Variables for URL
const key = "41ba0ae754f6c527508670f044cd4fb2";
const lat = "52.22581";
const lon = "21.00507";

// URLs
const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

// Fetch current weather data
async function apiFetch() {
    try {
        const response = await fetch(url);

        if(response.ok)
        {
            const data = await response.json();
            //console.log(data);
            displayResults(data);
        }
        else 
        {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

// Fetch forecast data
async function apiFetchForecast() {
    try {
        const response = await fetch(forecastUrl);

        if(response.ok)
        {
            const forecastData = await response.json();
            //console.log(forecastData);
            displayForecastResults(forecastData);
        }
        else 
        {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

// Display JSON data
function displayResults(data) {
    //Icon Display
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    //Current Weather Display
    currentTemp.innerHTML = `${Math.round(data.main.temp)}°c`;
    description.innerHTML = data.weather[0].description;
    highTemp.innerHTML = `${Math.round(data.main.temp_max)}°`;
    lowTemp.innerHTML = `${Math.round(data.main.temp_min)}°`;
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed} km/h`;
}

function displayForecastResults(forecastData) {
    tomorrow.innerHTML = `${Math.round(forecastData.list[1].main.temp_max)}°/${Math.round(forecastData.list[1].main.temp_min)}°c`;
    day2.innerHTML = `${Math.round(forecastData.list[2].main.temp)}°c`;
    day3.innerHTML = `${Math.round(forecastData.list[3].main.temp)}°c`;
}

// Final display
apiFetch();
apiFetchForecast();