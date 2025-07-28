import {loadHome} from "./home.js"
import {loadMenu} from "./menu.js"
import {loadAbout} from "./about.js"

loadHome();

import "./styles.css";
import sushi from './sushi.jpg'

document.querySelector("#menu-button").addEventListener('click', () => {
  document.querySelector("#content").innerHTML = "";
  loadMenu();
})

document.querySelector("#home-button").addEventListener('click', () => {
  document.querySelector("#content").innerHTML = "";
  loadHome();
})

document.querySelector("#about-button").addEventListener('click', () => {
  document.querySelector("#content").innerHTML = "";
  loadAbout();
})
