import { generateElement } from '../scripts/utility/index.js';
import {
    getWeathers,
    createWeather,
    getWeatherById,
    deleteWeatherById,
    updateWeatherById
} from '../scripts/api.js';

const weatherList = document.getElementById("card-weather-list");

/**
 * mengambil input dari html
 */
const inputCountry = document.getElementById("input-country;");
const inputCity = document.getElementById("input-city;");