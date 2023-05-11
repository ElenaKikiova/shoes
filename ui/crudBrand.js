import { getBrandById } from "./scripts/brandsHelper.js";
import { showErrors } from "./scripts/formsHelper.js";

const id = new URLSearchParams(window.location.search).get('id');

if(id){
  const brand = getBrandById(id);

  console.log('fetched brand', brand);

  document.getElementById("name").value = brand.name;
  document.getElementById("description").value = brand.description;
}
else {
  document.querySelector("#editBrand>h3").innerHTML = 'Create brand';
}

const redirectToBrands = () => {
  window.location.href = 'brands.html';
}

const validate = (data) => {
  const errors = [];
  if(data.name.length < 5) errors.push('name');
  if(data.description.length < 5) errors.push('description');

  showErrors(errors);
  return errors.length === 0;
}

document.getElementById("save").addEventListener("click", () => {
  const newBrandData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value
  }
  console.log('saved', newBrandData);

  const isValid = validate(newBrandData);
  console.log('is valid:', isValid);
  if(isValid){
    // redirectToBrands();
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  redirectToBrands();
});