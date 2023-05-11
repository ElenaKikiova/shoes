import { getBrandsDropdown } from "./scripts/brandsHelper.js";
import { getCategoriesDropdown } from "./scripts/categoriesHelper.js";
import { getShoeById, renderShoeDetails } from "./scripts/shoesHelper.js";

const id = new URLSearchParams(window.location.search).get('id');
const shoe = getShoeById(id);

console.log('fetched shoe', shoe);

/* View shoe */

document.getElementById("viewShoe").innerHTML = renderShoeDetails(shoe);
document.getElementById("imagePreview").style.backgroundImage = `url(${shoe.imageURL})`;

document.getElementById("openEdit").addEventListener("click", () => {
  document.getElementById("editShoe").style.display = 'block';
});


/* Edit shoe */


document.getElementById("name").value = shoe.name;
document.getElementById("imagePreview").style.backgroundImage = `url(${shoe.imageURL})`;
document.getElementById("imageURL").value = shoe.imageURL;
document.getElementById("sizesMin").value = shoe.sizes[0];
document.getElementById("sizesMax").value = shoe.sizes[1];
document.getElementById("genderF").checked = shoe.gender.indexOf('f') > -1;
document.getElementById("genderM").checked = shoe.gender.indexOf('m') > -1;
document.getElementById("price").value = shoe.price;

getBrandsDropdown();
console.log(shoe.brandId, document.getElementById("brandsDropdown").value)
document.getElementById("brandsDropdown").value = shoe.brandId;
console.log(shoe.brandId, document.getElementById("brandsDropdown").value)

getCategoriesDropdown();
for(let i = 0; i < shoe.categoryIds.length; i++){
  document.querySelector(`#categoriesDropdown>option[value="${shoe.categoryIds[i]}"]`).selected = true;
}


const redirectToShoes = () => {
  window.location.href = 'index.html';
}

document.getElementById("apply").addEventListener("click", () => {
  const newShoeData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value
  }
  console.log('saved', newShoeData);
  redirectToShoes();
});

document.getElementById("cancel").addEventListener("click", () => {
  redirectToShoes();
});