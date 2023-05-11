import { getBrandById } from "./scripts/brandsHelper.js";

const id = new URLSearchParams(window.location.search).get('id');
const brand = getBrandById(id);

console.log('fetched brand', brand);

document.getElementById("name").value = brand.name;
document.getElementById("description").value = brand.description;

const redirectToBrands = () => {
  window.location.href = 'brands.html';
}

document.getElementById("save").addEventListener("click", () => {
  const newBrandData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value
  }
  console.log('saved', newBrandData);
  redirectToBrands();
});

document.getElementById("cancel").addEventListener("click", () => {
  redirectToBrands();
});