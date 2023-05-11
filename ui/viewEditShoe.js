import { getShoeById, renderShoeDetails } from "./scripts/shoesHelper.js";

const id = new URLSearchParams(window.location.search).get('id');
const shoe = getShoeById(id);

console.log('fetched shoe', shoe);

/* View shoe */

document.getElementById("viewShoe").innerHTML = renderShoeDetails(shoe);

/* Edit shoe */

document.getElementById("name").value = shoe.name;
document.getElementById("imagePreview").style.backgroundImage = `url(${shoe.imageURL})`;
document.getElementById("imageURL").value = shoe.imageURL;
document.getElementById("sizesMin").value = shoe.sizes[0];
document.getElementById("sizesMax").value = shoe.sizes[1];
document.getElementById("genderF").checked = shoe.gender.indexOf('f') > -1;
document.getElementById("genderM").checked = shoe.gender.indexOf('m') > -1;
document.getElementById("price").value = shoe.price;

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