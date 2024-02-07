import { generateElement, Icon } from '../scripts/utility/index.js';
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
const inputTemperature = document.getElementById("input-temperature;");
const inputDescription = document.getElementById("input-description");
const inputFeels = document.getElementById("input-feels_like");
const inputSunrise = document.getElementById("input-sunrise");
const inputSunset = document.getElementById("input-sunset");
const inputHumidity = document.getElementById("input-humidity");
const inputWindSpd = document.getElementById("input-windspd");
const inputWindDgr = document.getElementById("input-winddgr");
const inputPressure = document.getElementById("input-pressure");
const inputPrecipitation = document.getElementById("input-precipitation");
const inputAirQlIndex = document.getElementById("input-airql_index");
const inputAirQlCateg = document.getElementById("input-airql_ctg");
const inputUvIndex = document.getElementById("input-uv_index");
const inputVisibility = document.getElementById("input-visibility");
const inputLatitude = document.getElementById("input-latitude");
const inputLongitude = document.getElementById("input-longitude");


const inputSearch = document.getElementById("form-search");

const inputId = document.getElementById("form-id");

// Element penampung weather list
const weatherListContainer = document.getElementById("card-weather-list");

document.addEventListener("DOMContentLoaded", () => {
    /*====={ BERIKUT ADALAH CODE UNTUK MENAMBAHKAN WEATHER KE API }=====*/
    // Fungsi ketika tombol submit di klik maka akan mengirim data ke API untuk ditambahkan

    // submitButton.addEventListener("click", async (e) => {
    //     /**
    //      * e.preventDefault() adalah untuk mencegah
    //      * form mengirim data ke halaman lain
    //      */
    //     e.preventDefault();
    
    //     /**
    //      * Kita akan mengambil data dari inputan
    //      * Lalu value inputan tersebut akan kita masukkan ke dalam objek payload
    //     */
    //     const payload = {
    //         question: inputQuestion?.value || "",
    //         category: inputCategory?.value || "",
    //         language: inputLanguage?.value || "",
    //         answer: inputAnswer?.value || "",
    //     };
    
    //     if (inputId.value === "") {
    //         handleAddQuestion(payload);
    //     } else {
    //         handleUpdateQuestionById(inputId.value, payload);
    //     }
    // });
    
    /*====={ BERIKUT ADALAH CODE UNTUK MENGEDIT WEATHER }=====*/
    // Fungsi untuk menampilkan data berdasarkan id
    async function handleShowQuestionById(id) {
        try {
            const result = await getQuestionById({ id });
        
            if (!result) return;
        
            inputQuestion.value = result?.question;
            inputAnswer.value = result?.answer;
            inputCategory.value = result?.category;
            inputLanguage.value = result?.language;
            inputId.value = result?.id;
        
            // submitButton.classList.remove("button-submit");
            // submitButton.classList.add("button-submit-edit");
        
            // submitButton.innerText = "Update";
        } catch (error) {
            console.error("Error ngirim Nih: ", {
            error,
            });
        }
    }
    
    /*====={ BERIKUT ADALAH CODE UNTUK MENGHAPUS WEATHER }=====*/
    
    /*====={ BERIKUT ADALAH CODE UNTUK MENAMPILKAN LIST WEATHER }=====*/
    
    async function handleAllWeather() {
        try {
            // mengambil semua data
            const weathers = await getWeathers();

            renderWeathers(weathers);
        } catch (error) {
            console.log("Error", { error });
        }
    }
    handleAllWeather();

    function renderWeathers(semuaData) {
        // melakukan perulangan data
        semuaData.forEach((data) => {
            // Kita buat element pembungkus section kiri
            const sectionLeftWeather = generateElement({
                tag: "div",
                className: "section-left",
            });
        
            // kota
            const weatherCity = generateElement({
                tag: "p",
                id: "weather-list-city",
                value: data.city + ",",
            });
        
            // negara
            const weatherCountry = generateElement({
                tag: "p",
                id: "weather-list-country",
                value: data.country,
            });
        
            // Kita buat element pembungkus section middle
            const sectionMiddleWeather = generateElement({
                tag: "div",
                className: "section-middle",
            });
        
            // descrription
            const weatherDescription = generateElement({
                tag: "p",
                id: "weather-list-description",
                value: data.description,
            });
        
            // Kita buat element pembungkus section right
            const sectionRightWeather = generateElement({
                tag: "div",
                className: "section-right",
            });
        
            const containerWeather = generateElement({
                tag: "div",
                className: "section",
            });
        
            // Buat element button untuk edit
            const buttonEdit = generateElement({
                tag: "button",
                id: "button-edit",
                className: "btn btn-edit",
                elementHTML: Icon.update,
            });
        
            // Ketika tombol edit di klik maka akan menjalankan fungsi handleShowQuestionById
            buttonEdit.addEventListener("click", async (e) => {
                e.preventDefault();
            
                handleShowQuestionById(question.id);
            });
        
            // Buat element button untuk delete
            const buttonDelete = generateElement({
                tag: "button",
                id: "button-delete",
                className: "btn btn-delete",
                elementHTML: Icon.delete,
            });
        
            // Ketika tombol delete di klik maka akan menjalankan fungsi handleDeleteQuestion
            buttonDelete.addEventListener("click", async (e) => {
                e.preventDefault();
            
                handleDeleteQuestion(question.id);
            });
        
            sectionLeftWeather.append(...[weatherCity,weatherCountry]);
        
            sectionMiddleWeather.append(...[weatherDescription]);
        
            // Sekarang kita masukan element button edit dan delete ke dalam section kanan
            sectionRightWeather.append(...[buttonEdit, buttonDelete]);
        
            containerWeather.append(...[sectionLeftWeather,sectionMiddleWeather,sectionRightWeather]);
            weatherListContainer.append(containerWeather);

        });
    }
    
});