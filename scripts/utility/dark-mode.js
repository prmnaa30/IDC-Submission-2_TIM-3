/** deklarasi DOM */
const modeToggler = document.getElementsByClassName("mode_toggler")[0];
const logoLight = document.getElementsByClassName("logo-light")[0];
const logoDark = document.getElementsByClassName("logo-dark")[0];

let weatherImage = document.getElementById("weather-image");
let weatherIcon = document.querySelectorAll(".left-part img");
let sunRiseSet = document.querySelectorAll(".sunrise-sunset img");

const theme = document.documentElement; //* mengambil elemen/tag "html"

/** dark mode <==> light mode */ 
function lightMode() {
    theme.setAttribute("data-theme", "light");
    // ubah logo menjadi light
    logoLight.classList.toggle("hidden");
    logoDark.classList.toggle("hidden");
    // ubah weather icon menjadi dark
    weatherImage.style.filter = "invert(0)";
    weatherIcon.forEach(image => { image.style.filter = "invert(0)"; });
    sunRiseSet.forEach(image => { image.style.filter = "invert(0)"; });
}
function darkMode() {
    theme.setAttribute("data-theme", "dark");
    // ubah logo menjadi dark
    logoLight.classList.toggle("hidden");
    logoDark.classList.toggle("hidden");
    // ubah weather icon menjadi light
    weatherImage.style.filter = "invert(0.95)";
    weatherIcon.forEach(image => { image.style.filter = "invert(0.95)"; });
    sunRiseSet.forEach(image => { image.style.filter = "invert(0.95)"; });
}

document.addEventListener("DOMContentLoaded", () => {
    window.localStorage.setItem("Theme", "Light");

    modeToggler.addEventListener("click", () => {
    const modeImage = document.getElementById("mode-image");

    // jika DOM 'theme' memiliki atribut data-theme dengan value "light"
    if (theme.getAttribute("data-theme") === "light") {
        // TRUE, ubah value dari atribut data-theme menjadi dark
        darkMode();
        // ubah tombol sun menjadi moon
        modeImage.setAttribute("src", "assets/svg/dark-mode.svg");
        // 
        localStorage.setItem("Theme", "Dark");

    } else {
        // FALSE, ubah value dari atribut data-theme menjadi light
        lightMode();
        // ubah tombol moon menjadi sun
        modeImage.setAttribute("src", "assets/svg/light-mode.svg");
        // 
        localStorage.setItem("Theme", "Light");
    }
});
})

/** function checkTheme
 * Untuk mengecek theme saat ini (light / dark).
 * Berguna agar saat berpindah halaman, mode dark/light mengikuti halaman sebelumnya (index <=> weather_CRUD).
 */
function checkTheme() {
    if (localStorage.getItem("Theme") === "Light") {
        lightMode();
    } else {
        darkMode();
    }
}