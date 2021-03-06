"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.casaAmigo = void 0;

var _navBar = require("../../tools/navBar");

var _footer = require("../../tools/footer");

var _home = require("../Home/home");

var _pisoArriba = require("../PisoArriba/pisoArriba");

var _puertaPiso = require("../PuertaPiso/puertaPiso");

var _casaAmigo = _interopRequireDefault(require("../../assets/images/casaAmigo.jpg"));

var _terrorSound = _interopRequireDefault(require("../../assets/sounds/terrorSound.mp3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const casaAmigo = () => {
  const body = document.getElementById("body-container");
  body.innerHTML = "";
  window.scrollTo(0, 0);
  let navbarElement = document.createElement("header");
  navbarElement = (0, _navBar.navBar)([{
    name: "Home",
    dest: "homeTab"
  }], navbarElement);
  body.appendChild(navbarElement);
  let articleElement = document.createElement("article");
  articleElement.setAttribute("class", "container-md my-3");
  articleElement.setAttribute("id", "casaAmigo");
  let h2Element = document.createElement("h2");
  h2Element.innerHTML = "Entras a la casa de tu preciado amigo";
  h2Element.setAttribute("class", "animate__animated animate__headShake");
  let imgContainerElement = document.createElement("div");
  imgContainerElement.setAttribute("class", "text-center");
  let imgElement = document.createElement("img");
  imgElement.src = _casaAmigo.default;
  imgElement.setAttribute("alt", "Trulli");
  imgElement.setAttribute("class", "img-fluid");
  imgElement.setAttribute("id", "imgCasaAmigo");
  let audioContainerElement = document.createElement("div");
  audioContainerElement.setAttribute("class", "text-center");
  audioContainerElement.setAttribute("id", "audioContainer");
  let audioElement = document.createElement("audio");
  audioElement.setAttribute("controls", "");
  audioElement.setAttribute("autoplay", "");
  audioElement.setAttribute("loop", "");
  audioElement.innerHTML = "Tu navegador no soporta HTML5 audio.";
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", _terrorSound.default);
  sourceElement.setAttribute("type", "audio/mpeg");
  let pElement = document.createElement("p");
  pElement.setAttribute("class", "container my-2");
  pElement.innerHTML = "De camino hacia la casa de tu amigo, te sientes muy observado pero a la vez muy solo, \n  no puedes esperarel momento de llegar para pasar tiempo con tu viejo amigo. Al llegar notas que la casa tiene \n  un aspecto muy tenebroso puede ser por aspectos como que esta muy descolorida, o la madera muy sucia, o que \n  las plantas del jardin ya estaban muertas, etc. Entras a la casa pero nadie te recibe, tratas de anunciar tu \n  llegada pero nadie te responde. Solo ves unas gradas que van hacia arriba y una puerta en el piso que va hacia \n  abajo un lugar tan oscuro que no se observa la profundidad.";
  pElement.setAttribute("id", "pCasaAmigo");
  let h3Element = document.createElement("h3");
  h3Element.innerHTML = "Selecciona la accion que deseas hacer:";
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  let col1 = document.createElement("div");
  col1.setAttribute("class", "col");
  let buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "btn-lg btn-primary");
  buttonElement.setAttribute("id", "btn1");
  buttonElement.innerHTML = "Subir las gradas.";
  buttonElement.setAttribute("type", "button");
  buttonElement.addEventListener("click", _pisoArriba.pisoArriba);
  let col2 = document.createElement("div");
  col2.setAttribute("class", "col");
  let buttonElement2 = document.createElement("button");
  buttonElement2.setAttribute("class", "btn-lg btn-primary");
  buttonElement2.setAttribute("id", "btn2");
  buttonElement2.innerHTML = "Abrir la puerta del piso y bajar";
  buttonElement2.setAttribute("type", "button");
  buttonElement2.addEventListener("click", _puertaPiso.puertaPiso);
  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", "progress");
  labelElement.innerHTML = "Game progress:";
  labelElement.setAttribute("class", "form-label");
  labelElement.setAttribute("id", "progressLabel");
  let progressElement = document.createElement("div");
  progressElement.setAttribute("class", "progress");
  progressElement.setAttribute("id", "progressBar");
  let progressBarElement = document.createElement("div");
  progressBarElement.setAttribute("class", "progress-bar");
  progressBarElement.setAttribute("role", "progressbar");
  progressBarElement.setAttribute("aria-valuenow", "25");
  progressBarElement.setAttribute("aria-valuemin", "0");
  progressBarElement.setAttribute("aria-valuemax", "100");
  progressBarElement.setAttribute("style", "width: 25%");
  progressBarElement.setAttribute("id", "progressBarValue");
  progressBarElement.innerHTML = "25%";
  articleElement.appendChild(h2Element);
  imgContainerElement.appendChild(imgElement);
  articleElement.appendChild(imgContainerElement);
  audioContainerElement.appendChild(audioElement);
  audioElement.appendChild(sourceElement);
  articleElement.appendChild(audioContainerElement);
  articleElement.appendChild(pElement);
  articleElement.appendChild(h3Element);
  container.appendChild(row);
  row.appendChild(col1);
  col1.appendChild(buttonElement);
  row.appendChild(col2);
  col2.appendChild(buttonElement2);
  articleElement.appendChild(container);
  articleElement.appendChild(labelElement);
  articleElement.appendChild(progressElement);
  progressElement.appendChild(progressBarElement);
  body.appendChild(articleElement);
  let footerElement = document.createElement("footer");
  footerElement = (0, _footer.footer)(footerElement);
  body.appendChild(footerElement);
  let logoTabElement = document.getElementById("navbarBrand");
  logoTabElement.addEventListener("click", _home.home);
  let homeTabElement = document.getElementById("homeTab");
  homeTabElement.addEventListener("click", _home.home);
};

exports.casaAmigo = casaAmigo;