import { guardRoute } from "./scripts/authHelper.js";
import { showErrors } from "./scripts/formsHelper.js";
import { get, handleError, post, put } from "./scripts/httpService.js";

guardRoute();

const id = new URLSearchParams(window.location.search).get('id');

if(id){

  get(`/categories/${id}`).then(async (response) => {
    const category = (await response.json()).data;

    console.log('fetched category', category);

    document.getElementById("name").value = category.name;
    document.getElementById("description").value = category.description;
    document.getElementById("season").value = category.season;
  }, handleError);
}
else {
  document.querySelector("#editCategory>h3").innerHTML = 'Create category';
}

const redirectToCategories = () => {
  window.location.href = 'categories.html';
}

const validate = (data) => {
  const errors = [];
  if(data.name.length === 0  || data.name.length > 100) errors.push('name');
  if(data.description.length < 5 || data.description.length > 100) errors.push('description');

  showErrors(errors);
  return errors.length === 0;
}


document.getElementById("save").addEventListener("click", () => {
  const newCategoryData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    season: document.getElementById("season").value
  }

  console.log('saved', newCategoryData);

  const isValid = validate(newCategoryData);
  console.log('is valid:', isValid);
  if(isValid){
    if(isValid){
    
      if(id){
        put("/categories/" + id, newCategoryData).then((data) => {
          redirectToCategories();
        }, handleError)
      }
      else {
        post("/categories", newCategoryData).then((data) => {
          redirectToCategories();
        }, handleError)
      }
  
    }
  }
});

document.getElementById("cancel").addEventListener("click", () => {
  redirectToCategories();
});