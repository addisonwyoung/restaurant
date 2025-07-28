import curry from "./curry.jpg";
import bento from "./bento.jpg";
import friedRice from "./fried_rice.jpg"

export function loadMenu()
{
 
  let container = document.createElement('div');
  container.classList.add("container");
let heading = document.createElement("h1");
heading.textContent = "Menu";

  let curryImg = document.createElement("img");
  curryImg.src = curry;

  let descriptionCurry = document.createElement("p");
  descriptionCurry.textContent = "Sanji famous curry";


  let bentoImg = document.createElement("img");
  bentoImg.src = bento;

  let descriptionBento = document.createElement("p");
  descriptionBento.textContent = "Sanji famous bento";


  
  let friedRiceImg = document.createElement("img");
  friedRiceImg.src = friedRice;

  let descriptionFR = document.createElement("p");
  descriptionFR.textContent = "Sanji famous fried rice";
  
  let curryDiv = document.createElement("div");
  curryDiv.appendChild(curryImg);
  curryDiv.appendChild(descriptionCurry);

  curryDiv.classList.add("food");
  let bentoDiv = document.createElement("div");
  bentoDiv.appendChild(bentoImg);
  bentoDiv.appendChild(descriptionBento);

  bentoDiv.classList.add("food");

  let FRDiv = document.createElement("div");
  FRDiv.appendChild(friedRiceImg);
  FRDiv.appendChild(descriptionFR);

  FRDiv.classList.add("food");
container.appendChild(heading);
container.appendChild(curryDiv);
container.appendChild(bentoDiv);
container.appendChild(FRDiv);

document.getElementById("content").appendChild(container);


}