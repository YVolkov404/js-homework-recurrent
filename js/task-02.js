/**
 * Write a script that, for each element in the ingredients array.
 * Will create a separate <li> element. Be sure to use the document.createElement() method.
 * Will add the ingredient name as its text content.
 * Will add the item class to the element.
 * Then will insert all <li> to the ul#ingredients list in a single operation.
 */

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const listElement = ingredients.map((element) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = element;
  return item;
});

list.append(...listElement);
