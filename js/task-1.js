
const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.getElementsByClassName('item');
console.log('Number of categories:', categoryItems.length);

for (const categoryItem of categoryItems) {
    const categoryTitle = categoryItem.querySelector('h2').textContent;

    const categoryElements = categoryItem.querySelectorAll('ul > li');

    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
}