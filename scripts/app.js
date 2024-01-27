/** deklarasi DOM */
const modeToggler = document.getElementsByClassName("mode_toggler")[0];

const theme = document.documentElement; //* mengambil elemen/tag "html"

/** dark mode <==> light mode */ 
modeToggler.addEventListener("click", () => {
    const logoLight = document.getElementsByClassName("logo-light")[0];
    const logoDark = document.getElementsByClassName("logo-dark")[0];
    const modeImage = document.getElementById("mode-image");

    // jika DOM 'theme' memiliki atribut data-theme dengan value "light"
    if (theme.getAttribute("data-theme") === "light") {
        // TRUE, ubah value dari atribut data-theme menjadi dark
        theme.setAttribute("data-theme", "dark");
        // ubah logo menjadi dark
        logoLight.classList.toggle("hidden");
        logoDark.classList.toggle("hidden");
        // ubah tombol sun menjadi moon
        modeImage.setAttribute("src", "assets/svg/dark-mode.svg");

    } else {
        // FALSE, ubah value dari atribut data-theme menjadi dark
        theme.setAttribute("data-theme", "light");
        // ubah logo menjadi light
        logoLight.classList.toggle("hidden");
        logoDark.classList.toggle("hidden");
        // ubah tombol moon menjadi sun
        modeImage.setAttribute("src", "assets/svg/light-mode.svg");
    }
});