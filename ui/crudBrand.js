import { get, handleError, post, put } from "./httpService.js";
import { showErrors } from "./scripts/formsHelper.js";

const id = new URLSearchParams(window.location.search).get('id');

const redirectToBrands = () => {
  window.location.href = 'brands.html';
}

if(id){
  const response = await get('/brands/' + id);
  const brand = (await response.json()).data;

  console.log('fetched brand', brand);

  document.getElementById("name").value = brand.name;
  document.getElementById("description").value = brand.description;
}
else {
  document.querySelector("#editBrand>h3").innerHTML = 'Create brand';
}


const validate = (data) => {
  const errors = [];
  if(data.name.length === 0) errors.push('name');
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
    
    if(id){
      put("/brands/" + id, newBrandData).then((data) => {
        redirectToBrands();
      }, handleError)
    }
    else {
      post("/brands", newBrandData).then((data) => {
        redirectToBrands();
      }, handleError)
    }
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  redirectToBrands();
});