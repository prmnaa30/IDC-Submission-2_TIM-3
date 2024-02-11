/** deklarasi DOM */
const modeToggler = document.getElementById("mode_toggler");

let weatherImage = document.getElementById("weather-image");
let weatherIcons = document.querySelectorAll(".left-part img");
let sunRise_Set = document.querySelectorAll(".sunrise-sunset img");

const theme = document.documentElement; //* mengambil elemen/tag "html"

let darkMode = false;

// Periksa key 'darkMode' pada localStorage (jika tersedia)
window.addEventListener("load", () => {
    // jika pada localStorage terdapat key/item darkMode
    if (localStorage.getItem('darkMode')) {
        darkMode = JSON.parse(localStorage.getItem('darkMode'));
        toggleDarkMode();
    }
});

// Fungsi saat tombol darkMode toggle diklik
modeToggler.addEventListener("click", () => {
    darkMode = !darkMode;
    toggleDarkMode();
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
});

function toggleDarkMode() {
    const darkFilter = darkMode ? 'invert(0.95)' : 'invert(0)';
    weatherIcons.forEach(image => { image.style.filter = darkFilter; });
    sunRise_Set.forEach(image => { image.style.filter = darkFilter; });
    if (weatherImage) weatherImage.style.filter = darkFilter;

    const logoImage = darkMode ? '../assets/svg/logo_dark.svg' : '../assets/svg/logo_light.svg';
    document.getElementById("logo-image").src = logoImage;
    const togglerImage = darkMode ? '../assets/svg/dark-mode.svg' : '../assets/svg/light-mode.svg';
    document.getElementById("mode-image").src = togglerImage;

    const currentTheme = darkMode ? 'dark' : 'light';
    theme.setAttribute("data-theme", currentTheme);
}

/** NOTES */

/** const abcdef = condition ? ifTrue : ifFalse
 * adalah shorthand dari fungsi if else, bentuk aslinya:
 * 
 * const abcdef = "";
 * if (condition) {
 *     abcdef = ifTrue;
 * } else {
 *     abcdef = ifFalse;
 * }
 */
