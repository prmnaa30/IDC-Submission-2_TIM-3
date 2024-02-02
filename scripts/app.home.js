import { getWeatherById, getWeatherByName } from "./api.js";
import { generateRandomNumber, weatherImageSrc } from "./utility/index.js";
import moment from 'moment';

// Weather Data
const city = document.getElementById("city-name");
const country = document.getElementById("country-name");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weather-condition");
const weatherImage = document.getElementById("weather-image");
const feelsLike = document.getElementById("feels-value");
const sunrise = document.getElementById("sunrise-value")
const sunset = document.getElementById("sunset-value");
const humidity = document.getElementById("humidity-value")
const windValue = document.getElementById("wind-value");
const windDegree = document.getElementById("wind-degree");
const pressure = document.getElementById("pressure-value");
const precipitation = document.getElementById("precipitation-value");
const airQualIndex = document.getElementById("air-quality-index");
const airQualVal = document.getElementById("air-quality-value");
const uvIndex = document.getElementById("uv-index-value");
const visibility = document.getElementById("visibility-value");

// Buttons, Input field
const buttonRandom = document.getElementById("random-btn");
const buttonCitySearch = document.getElementById("search-button");
const inputCity = document.getElementById("search-input");

/** innerHTML func */
function innerHTMLvalue(api_response) {
    city.innerHTML = api_response?.city + ", ";
    country.innerHTML = api_response?.country;
    temperature.innerHTML = api_response?.temperature + "°";
    weatherCondition.innerHTML = api_response?.description;
    weatherImageSrc(api_response?.description, weatherImage);
    feelsLike.innerHTML = api_response?.feels_like + "°";
    sunrise.innerHTML = moment.utc(api_response?.sunrise).format("HH:mm");
    sunset.innerHTML = moment.utc(api_response?.sunset).format("HH:mm");
    humidity.innerHTML = api_response?.humidity;
    windValue.innerHTML = api_response?.wind_speed + " km/h | ";
    windDegree.innerHTML = api_response?.wind_degree + "°";
    pressure.innerHTML = api_response?.pressure + " mb";
    precipitation.innerHTML = api_response?.precipitation;
    airQualVal.innerHTML = api_response?.air_quality.category + " | ";
    airQualIndex.innerHTML = api_response?.air_quality.index;
    uvIndex.innerHTML = api_response?.uv_index;
    visibility.innerHTML = api_response?.visibility;
};


document.addEventListener("DOMContentLoaded", () => {
    city.innerHTML = "...";
    // country.innerHTML = "...";
    temperature.innerHTML = "...";
    weatherCondition.innerHTML = "...";
    feelsLike.innerHTML = "...";
    sunrise.innerHTML = "...";
    sunset.innerHTML = "...";
    humidity.innerHTML = "...";
    windValue.innerHTML = "...";
    // windDegree.innerHTML = "...";
    pressure.innerHTML = "...";
    precipitation.innerHTML = "...";
    // airQualVal.innerHTML = "...";
    airQualIndex.innerHTML = "...";
    uvIndex.innerHTML = "...";
    visibility.innerHTML = "...";
    
    /** GET RANDOM WEATHER using Random Number */
    buttonRandom.addEventListener("click", async () => {
        // Generate angka random dari fungsi generateRandomNumber
        const generateNumber = generateRandomNumber(1, 1);

        try {
            const result = await getWeatherById({ id: generateNumber });

            if (!result) return;

            innerHTMLvalue(result);

        } catch (error) {
            console.log("Error", { error });
        }
    });

    /** GET WEATHER BY CITY */
    buttonCitySearch.addEventListener("click", async () => {
        const cityValue = inputCity.value;
        
        try {
            if (!cityValue) return;

            const result = await getWeatherByName({ city: cityValue });

            if (!result) return;

            innerHTMLvalue(result);
        } catch (error) {
            console.log("Error", { error });
        }
    });

    // async function getWeatherByName() {
    //     try {
    //         const weathers = await getWeathers();
    //         const filteredCity = [...weathers];

    //         if (!weathers) return;

    //         inputCity.addEventListener("keyup", (e) => {
    //             e.preventDefault();

    //             const searchTerm = inputCity.value;
    //             const filtered = filteredCity.filter(
    //                 (weather) => 
    //                     weather.city === (searchTerm)
    //             );

    //             getName(filtered);
    //         });
    //     } catch (error) {
    //         console.log("Error", { error });
    //     }
    // }

    // getWeatherByName();

    // function getName(weathers) {
    //     weathers.forEach(weather => {
    //         buttonCitySearch.addEventListener("click", () => {
    //             if (weather.id === null) {
    //                 alert("lol")
    //             } else {
    //                 showWeather(weather.id);
    //             }
                
    //         });
    //     });
    // };

    // async function showWeather(id) {
    //     try {
    //         const result = await getWeatherById({ id });

    //         if (!result) return;

    //         innerHTMLvalue(result);

    //     } catch (error) {
    //         console.log("Error", { error });
    //     }
    // }

    /**  */
});