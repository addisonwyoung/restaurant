import sanji from "./sanji.jpg"
export function loadAbout()
{
  let container = document.createElement('div');
  container.classList.add("container");

  let heading = document.createElement("h1");
  heading.textContent = "About";

  let sanjiImg = document.createElement("img");
  sanjiImg.src = sanji;
  sanjiImg.id = "sanjiAbout";
  let description = document.createElement('p');
  description.id = "description";

  description.textContent = "Welcome to Sanji’s Floating Bistro, where the Grand Line’s finest flavors meet gourmet excellence. Helmed by the Straw Hat Pirates’ very own Black Leg Sanji, this culinary sanctuary sails from island to island, delighting taste buds with a menu crafted from the rarest ingredients the sea has to offer. From fiery All Blue seafood stews to perfectly seared sky-beef steaks, every dish is a symphony of flavor, elegance, and heart. Sanji’s cooking isn’t just food—it’s love on a plate, served with a sharp suit, a lit cigarette, and unwavering respect for every lady who walks through the door. Whether you're a famished pirate, a sea-worn traveler, or a curious land-dweller, Sanji’s Shop promises warmth, satisfaction, and a taste of the legendary All Blue in every bite."

  container.appendChild(heading);
  container.appendChild(sanjiImg);
  container.appendChild(description);

  document.getElementById("content").appendChild(container);
}