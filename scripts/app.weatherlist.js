import { generateElement, Icon } from '../scripts/utility/index.js';
import {
    getWeathers,
    createWeather,
    getWeatherById,
    deleteWeatherById,
    updateWeatherById
} from '../scripts/api.js';
import moment from 'https://cdn.jsdelivr.net/npm/moment@2.30.1/+esm';

/**
 * mengambil input dari html
 */
const inputCountry = document.getElementById("input-country");
const inputCity = document.getElementById("input-city");
const inputTemperature = document.getElementById("input-temperature");
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

const submitButton = document.getElementById("button-submit");

const inputSearch = document.getElementById("form-search");

const inputId = document.getElementById("form-id");

// Element penampung weather list
const weatherListContainer = document.getElementById("card-weather-list");

document.addEventListener("DOMContentLoaded", () => {
    /*====={ BERIKUT ADALAH CODE UNTUK MENAMBAHKAN WEATHER KE API }=====*/
    async function handleAddWeather(payload) {
        try {
          /**
           * Kita akan panggil fungsi createWeather yang sudah kita buat di file `api.js`
           * Lalu kita akan kirim payload ke dalam fungsi tersebut
           */
          const result = await createWeather({ payload: payload });
    
          /**
           * Kita lakukan pengecekan jika ketika respon kode yang diberikan itu 201 (Created)
           * Maka munculkan alert "Berhasil menambahkan data", kosongkan inputan dan reload halaman
           */
    
          if (result?.code === 201) {
            alert("Berhasil menambahkan data");
    
          inputCountry.value = "";
          inputCity.value = "";
          inputTemperature.value = "";
          inputDescription.value = "";
          inputFeels.value = "";
          inputSunrise.value = "";
          inputSunset.value = "";
          inputHumidity.value = "";
          inputWindSpd.value = "";
          inputWindDgr.value = "";
          inputPressure.value = "";
          inputPrecipitation.value = "";
          inputAirQlIndex.value = "";
          inputAirQlCateg.value = "";
          inputUvIndex.value = "";
          inputVisibility.value = "";
          inputLatitude.value = "";
          inputLongitude.value = "";
    
            window.location.reload();
          }
        } catch (error) {
          console.error("Error ngirim Nih: ", {
            error,
          });
        }
      }
    
      // Fungsi untuk mengupdate data
      async function handleUpdateWeatherById(id, payload) {
        try {
          const result = await updateWeatherById({ id, payload });
    
          if (!result) return;
    
          if (result?.code === 200) {
            alert("Berhasil mengupdate data");
    
            window.location.reload();
          }
        } catch (error) {
          console.error("Error ngirim Nih: ", {
            error,
          });
        }
      }
    
    
    // Fungsi ketika tombol submit di klik maka akan mengirim data ke API untuk ditambahkan
    submitButton.addEventListener("click", async (e) => {
        try {
          e.preventDefault();

          const currentDateTime = moment();
          const formattedDate = currentDateTime.format("YYYY-MM-DD");
      
          /**
            * Kita akan mengambil data dari inputan
            * Lalu value inputan tersebut akan kita masukkan ke dalam objek payload
          */
          const payload = {
            country: inputCountry?.value || "",
            city: inputCity?.value || "",
            temperature: inputTemperature?.value || "",
            description: inputDescription?.value || "",
            feels_like: inputFeels?.value || "",
            sunrise: `${formattedDate}T${inputSunrise?.value}:00.000Z` || "",
            sunset: `${formattedDate}T${inputSunset?.value}:00.000Z` || "",
            humidity: inputHumidity?.value || "",
            wind_speed: inputWindSpd?.value || "",
            wind_degree: inputWindDgr?.value || "",
            pressure: inputPressure?.value || "",
            precipitation: inputPrecipitation?.value || "",
            air_quality:{
                index: inputAirQlIndex?.value || "",
                category: inputAirQlCateg?.value || ""
            },
            uv_index: inputUvIndex?.value || "",
            visibility: inputVisibility?.value || "",
            location:{
                latitude: inputLatitude?.value || "",
                longitude: inputLongitude?.value || "",
            },
          };
      
          if (inputId.value === "") {
            // Panggil fungsi untuk menambahkan data cuaca
            handleAddWeather(payload);
          } else {
            // Panggil fungsi untuk mengupdate data cuaca berdasarkan ID
            handleUpdateWeatherById(inputId.value, payload);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      });
    /*====={ BERIKUT ADALAH CODE UNTUK MENGEDIT WEATHER }=====*/
    // Fungsi untuk menampilkan data berdasarkan id
    async function handleShowWeatherById(id) {
        try {
          const result = await getWeatherById({ id });
    
          if (!result) return;
    
          inputCountry.value = result?.country;
          inputCity.value = result?.city;
          inputTemperature.value = result?.temperature;
          inputDescription.value = result?.description;
          inputFeels.value = result?.feels_like;
          inputSunrise.value = moment.utc(result?.sunrise).format("HH:mm");
          inputSunset.value = moment.utc(result?.sunset).format("HH:mm");
          inputHumidity.value = result?.humidity;
          inputWindSpd.value = result?.wind_speed;
          inputWindDgr.value = result?.wind_degree;
          inputPressure.value = result?.pressure;
          inputPrecipitation.value = result?.precipitation;
          inputAirQlIndex.value = result?.air_quality.index;
          inputAirQlCateg.value = result?.air_quality.category;
          inputUvIndex.value = result?.uv_index;
          inputVisibility.value = result?.visibility;
          inputLatitude.value = result?.location.latitude;
          inputLongitude.value = result?.location.longitude;
          inputId.value = result?.id;
    
          submitButton.classList.remove("button-submit");
          submitButton.classList.add("button-submit-edit");
    
          submitButton.innerText = "Update";
        } catch (error) {
          console.error("Error ngirim Nih: ", {
            error,
          });
        }
      }
    
    /*====={ BERIKUT ADALAH CODE UNTUK MENGHAPUS WEATHER }=====*/
    async function handleDeleteWeather(id) {
        try {
          const result = await deleteWeatherById({ id });
    
          if (!result) return;
    
          if (result?.code === 200) {
            alert("Berhasil menghapus data");
    
            window.location.reload();
          }
        } catch (error) {
          console.error("Error ngirim Nih: ", {
            error,
          });
        }
      }
    
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
        
            // Ketika tombol edit di klik maka akan menjalankan fungsi handleShowWeatherById
            buttonEdit.addEventListener("click", async (e) => {
                e.preventDefault();
            
                handleShowWeatherById(data.id);
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
            
                handleDeleteWeather(data.id);
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