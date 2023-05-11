import { getCategoryById } from "./scripts/categoriesHelper.js";

const id = new URLSearchParams(window.location.search).get('id');
const category = getCategoryById(id);

console.log('fetched category', category);

document.getElementById("name").value = category.name;
document.getElementById("description").value = category.description;

const redirectToCategories = () => {
  window.location.href = 'categories.html';
}

document.getElementById("save").addEventListener("click", () => {
  const newCategoryData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value
  }
  console.log('saved', newCategoryData);
  // redirectToCategories();
});

document.getElementById("cancel").addEventListener("click", () => {
  redirectToCategories();
});