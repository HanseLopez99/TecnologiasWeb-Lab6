"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navBar = void 0;

const navBar = (tabs, contenedor) => {
  const navbarElement = document.createElement("nav");
  navbarElement.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-dark");
  navbarElement.setAttribute("id", "navbar");
  const containerFluid = document.createElement("div");
  containerFluid.setAttribute("class", "container-fluid");
  const navbarBrand = document.createElement("a");
  navbarBrand.setAttribute("class", "navbar-brand");
  navbarBrand.setAttribute("id", "navbarBrand");
  navbarBrand.innerHTML = "WASD GAMES - Game Development";
  const navbarToggler = document.createElement("button");
  navbarToggler.setAttribute("class", "navbar-toggler");
  navbarToggler.setAttribute("type", "button");
  navbarToggler.setAttribute("data-bs-toggle", "collapse");
  navbarToggler.setAttribute("data-bs-target", "#navbarSupportedContent");
  navbarToggler.setAttribute("aria-controls", "navbarSupportedContent");
  navbarToggler.setAttribute("aria-expanded", "false");
  navbarToggler.setAttribute("aria-label", "Toggle navigation");
  const navbarTogglerSpan = document.createElement("span");
  navbarTogglerSpan.setAttribute("class", "navbar-toggler-icon");
  navbarToggler.appendChild(navbarTogglerSpan);
  const navbarCollapse = document.createElement("div");
  navbarCollapse.setAttribute("class", "collapse navbar-collapse mx-3");
  navbarCollapse.setAttribute("id", "navbarSupportedContent");
  const navbarNav = document.createElement("ul");
  navbarNav.setAttribute("class", "navbar-nav me-auto mb-2 mb-lg-0");

  for (let i = 0; i < tabs.length; i++) {
    const navbarItem = document.createElement("li");
    navbarItem.setAttribute("class", "nav-item");
    const navbarLink = document.createElement("a");
    navbarLink.setAttribute("class", "nav-link");
    navbarLink.setAttribute("id", tabs[i].dest);
    navbarLink.innerHTML = tabs[i].name;
    navbarItem.appendChild(navbarLink);
    navbarNav.appendChild(navbarItem);
  }

  navbarCollapse.appendChild(navbarNav);
  containerFluid.appendChild(navbarBrand);
  containerFluid.appendChild(navbarToggler);
  navbarElement.appendChild(containerFluid);
  navbarElement.appendChild(navbarCollapse);
  contenedor.appendChild(navbarElement);
  return contenedor;
};

exports.navBar = navBar;