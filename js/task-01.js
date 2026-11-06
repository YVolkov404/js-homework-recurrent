/**
 * Write a script that:
 * Will count and display in the console the number of categories in ul#categories, that   is, li.item elements.
 * For each li.item element in the ul#categories list, will find and display in the console the element header
 * text (<h2> tag) and the number of elements in the category (all nested <li>).
 * As a result, the following messages will be displayed in the console.
 *
 *      Number of categories: 3
 *      Category: Animals
 *      Elements: 4
 *      Category: Products
 *      Elements: 3
 *      Category: Technologies
 *      Elements: 5
 */

const categories = document.querySelector("#categories");

console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((element) => {
  const item = element.firstElementChild;
  console.log(`Category: ${item.textContent}`);
  console.log(`Animals: ${[...item.nextElementSibling.children].length}`);
});
