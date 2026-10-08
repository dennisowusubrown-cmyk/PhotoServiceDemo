// =========================
// MENU MOBILE
// =========================

function toggleMenu() {

    const nav = document.querySelector(".nav");

    nav.classList.toggle("active");
}


// Fermer le menu après avoir cliqué sur un lien

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const nav = document.querySelector(".nav");

        nav.classList.remove("active");

    });

});


// =========================
// FORMULAIRE
// =========================

function sendForm(event) {

    event.preventDefault();

    alert(
        "Ceci est une démonstration. " +
        "Le formulaire sera connecté à un vrai système de contact sur le site final."
    );

}