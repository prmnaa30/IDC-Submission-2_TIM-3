import { getWeatherById } from "./api.js";
import { generateRandomNumber } from "./utility/index.js";    

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

// Generate random weather
const buttonRandom = document.getElementById("random-btn");

document.addEventListener("DOMContentLoaded", () => {
    city.innerHTML = "...";
    country.innerHTML = "...";
    temperature.innerHTML = "...";
    weatherCondition.innerHTML = "...";
    weatherImage.setAttribute("src", "...");
    feelsLike.innerHTML = "...";
    sunrise.innerHTML = "...";
    sunset.innerHTML = "...";
    humidity.innerHTML = "...";
    windValue.innerHTML = "...";
    windDegree.innerHTML = "...";
    pressure.innerHTML = "...";
    precipitation.innerHTML = "...";
    airQualIndex.innerHTML = "...";
    airQualVal.innerHTML = "...";
    uvIndex.innerHTML = "...";
    visibility.innerHTML = "...";

    buttonRandom.addEventListener("click", async () => {
        // Generate angka random dari fungsi generateRandomNumber
        const generateNumber = 1;

        try {
            // Call API dengan id didapat dari fungsi generateNumber
            const response = await getWeatherById({ id: generateNumber });

            if (!response) return;

            city.innerHTML = response.city;
            country.innerHTML = "...";
            temperature.innerHTML = "...";
            weatherCondition.innerHTML = "...";
            weatherImage.setAttribute("src", "...");
            feelsLike.innerHTML = "...";
            sunrise.innerHTML = "...";
            sunset.innerHTML = "...";
            humidity.innerHTML = "...";
            windValue.innerHTML = "...";
            windDegree.innerHTML = "...";
            pressure.innerHTML = "...";
            precipitation.innerHTML = "...";
            airQualIndex.innerHTML = "...";
            airQualVal.innerHTML = "...";
            uvIndex.innerHTML = "...";
            visibility.innerHTML = "...";

            console.log(response);
        } catch (error) {
            console.log("Error", { error });
        }
    });
});

