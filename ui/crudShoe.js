import { getBrandsDropdown } from "./scripts/brandsHelper.js";
import { getCategoriesDropdown } from "./scripts/categoriesHelper.js";
import { showErrors } from "./scripts/formsHelper.js";
import { getShoeById, renderShoeDetails } from "./scripts/shoesHelper.js";

const id = new URLSearchParams(window.location.search).get('id');

const imageURL = document.getElementById("imageURL");
const name = document.getElementById("name");
const imagePreview = document.getElementById("imagePreview");
const sizesMin = document.getElementById("sizesMin");
const sizesMax = document.getElementById("sizesMax");
const genderF = document.getElementById("genderF");
const genderM = document.getElementById("genderM");
const price = document.getElementById("price");
const brandsDropdown = document.getElementById("brandsDropdown");

const defaultImg = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg';


imageURL.addEventListener("input", () => {
  console.log(imageURL)
  imagePreview.style.backgroundImage = `url(${imageURL.value})` ?? defaultImg;
})


if(id){

  const shoe = getShoeById(id);

  console.log('fetched shoe', shoe);
  
  /* View shoe */

  document.getElementById("viewShoe").innerHTML = renderShoeDetails(shoe);
  imagePreview.style.backgroundImage = `url(${shoe.imageURL})`;

  document.getElementById("openEdit").addEventListener("click", () => {
    document.getElementById("viewShoe").style.display = 'none';
    document.getElementById("editShoe").style.display = 'block';
  });


  /* Edit shoe */

  name.value = shoe.name;
  imagePreview.style.backgroundImage = `url(${shoe.imageURL})`;
  imageURL.value = shoe.imageURL;
  sizesMin.value = shoe.sizes[0];
  sizesMax.value = shoe.sizes[1];
  genderF.checked = shoe.gender.indexOf('f') > -1;
  genderM.checked = shoe.gender.indexOf('m') > -1;
  price.value = shoe.price;

  getBrandsDropdown(false);
  brandsDropdown.value = shoe.brandId;

  getCategoriesDropdown();

  for(let i = 0; i < shoe.categoryIds.length; i++){
    document.querySelector(`#categoriesDropdown>option[value="${shoe.categoryIds[i]}"]`).selected = true;
  }

}
else {
  document.getElementById("viewShoe").style.display = 'none';
  document.getElementById("editShoe").style.display = 'block';

  imagePreview.style.backgroundImage = `url('${defaultImg}')`

  document.querySelector("#editShoe>h3").innerHTML = 'Create shoe';
  getBrandsDropdown(false);
  getCategoriesDropdown();

}

const redirectToShoes = () => {
  window.location.href = 'index.html';
}

const validate = (data) => {
  const errors = [];
  if(data.name.length < 5) errors.push('name');
  if(data.imageURL.length < 5) errors.push('imageURL');
  if(data.price < 1) errors.push('price');
  if(data.sizes[0] === '' || data.sizes[1] === '' || Number(data.sizes[0]) >= Number(data.sizes[1]) || Number(data.sizes[0]) < 1) errors.push('sizes');
  if(data.categoryIds.length === 0) errors.push('categories');
  if(data.gender.length === 0) errors.push('gender');

  showErrors(errors);
  return errors.length === 0;
}

document.getElementById("save").addEventListener("click", () => {
  
  let genderArr = [];
  if(genderM.checked) genderArr.push('m');
  if(genderF.checked) genderArr.push('f');

  let categoryIds = [];
  const options = document.querySelectorAll("#categoriesDropdown>option");
  for(let i = 0; i < options.length; i++){
    if(options[i].selected) categoryIds.push(options[i].value);
  }

  const newShoeData = {
    name: name.value,
    imageURL: imageURL.value,
    sizes: [sizesMin.value, sizesMax.value],
    gender: genderArr,
    price: price.value,
    brandId: brandsDropdown.value,
    categoryIds: categoryIds,
  }

  console.log('saved', newShoeData);

  const isValid = validate(newShoeData);
  console.log('is valid:', isValid);
  if(isValid){
    // redirectToShoes();
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  redirectToShoes();
});