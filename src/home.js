import sanji from "./sanji.jpg";
export function loadHome()
{
 
  const sanjiImg = document.createElement("img");
  sanjiImg.src = sanji;
  sanjiImg.id = "sanji";
  let container = document.createElement('div');
container.classList.add("container");
let heading = document.createElement("h1");
heading.textContent = "Sanji's Restaurant";
let p = document.createElement("p");
p.textContent = "None should ever go hungry!";

container.appendChild(heading);
container.appendChild(p);
container.appendChild(sanjiImg);

document.getElementById("content").appendChild(container);

console.log("hey");
}