"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footer = void 0;

const footer = contenedor => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "container-fluid");
  const hr = document.createElement('hr');
  const p = document.createElement('p');
  p.innerHTML = "© WASD GAMES - Todos los derechos reservados";
  divContainer.appendChild(hr);
  divContainer.appendChild(p);
  contenedor.appendChild(divContainer);
  return contenedor;
};

exports.footer = footer;