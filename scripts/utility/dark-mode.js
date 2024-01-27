/** deklarasi DOM */
const modeToggler = document.getElementsByClassName("mode_toggler")[0];
const logoLight = document.getElementsByClassName("logo-light")[0];
const logoDark = document.getElementsByClassName("logo-dark")[0];

const theme = document.documentElement; //* mengambil elemen/tag "html"

/** dark mode <==> light mode */ 
function lightMode() {
    theme.setAttribute("data-theme", "light");
    // ubah logo menjadi light
    logoLight.classList.toggle("hidden");
    logoDark.classList.toggle("hidden");
}
function darkMode() {
    theme.setAttribute("data-theme", "dark");
    // ubah logo menjadi dark
    logoLight.classList.toggle("hidden");
    logoDark.classList.toggle("hidden");
}

modeToggler.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("Theme");
    const modeImage = document.getElementById("mode-image");

    // jika DOM 'theme' memiliki atribut data-theme dengan value "light"
    if (theme.getAttribute("data-theme") === "light") {
        // TRUE, ubah value dari atribut data-theme menjadi dark
        darkMode();
        // ubah tombol sun menjadi moon
        modeImage.setAttribute("src", "assets/svg/dark-mode.svg");
        // 
        localStorage.setItem("Theme", "dark");

    } else {
        // FALSE, ubah value dari atribut data-theme menjadi light
        lightMode();
        // ubah tombol moon menjadi sun
        modeImage.setAttribute("src", "assets/svg/light-mode.svg");
        // 
        localStorage.setItem("Theme", "light");
    }
});

function checkTheme() {
    if (localStorage.getItem("Theme") === "light") {
        lightMode();
    } else {
        darkMode();
    }
}