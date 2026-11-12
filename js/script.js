/* DEDAL DES COULEURS — scripts (menu mobile, filtres, formulaire) */
(function () {
  "use strict";

  /* --- Menu burger (mobile) --- */
  var burger = document.querySelector(".burger");
  var menu = document.getElementById("menu");

  if (burger && menu) {
    burger.addEventListener("click", function () {
      var ouvert = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!ouvert));
      burger.setAttribute("aria-label", ouvert ? "Ouvrir le menu" : "Fermer le menu");
      menu.classList.toggle("ouvert", !ouvert);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("ouvert")) {
        burger.click();
        burger.focus();
      }
    });
  }

  /* --- Filtres de la page Les Œuvres --- */
  var filtres = document.querySelectorAll(".filtre");
  var oeuvres = document.querySelectorAll("#liste-oeuvres .oeuvre");
  var compteur = document.getElementById("compteur");

  filtres.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
      var choix = bouton.getAttribute("data-filtre");
      var visibles = 0;

      filtres.forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === bouton));
      });

      oeuvres.forEach(function (oeuvre) {
        var afficher = choix === "toutes" || oeuvre.getAttribute("data-categorie") === choix;
        oeuvre.hidden = !afficher;
        if (afficher) {
          visibles += 1;
        }
      });

      if (compteur) {
        compteur.textContent = visibles + (visibles > 1 ? " illustrations" : " illustration");
      }
    });
  });

  /* --- Formulaire d'inscription (démonstration, pas d'envoi réel) --- */
  var formulaire = document.getElementById("formulaire");
  var message = document.getElementById("message-envoi");

  if (formulaire && message) {
    formulaire.addEventListener("submit", function (e) {
      e.preventDefault();
      message.textContent = "Merci ! Votre inscription a bien été prise en compte.";
      formulaire.reset();
    });
  }
}());
