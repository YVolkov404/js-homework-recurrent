const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach(element => {
    const item = element.firstElementChild;
    console.log(`Category: ${item.textContent}`);
    console.log(`Animals: ${[...item.nextElementSibling.children].length}`);
});
