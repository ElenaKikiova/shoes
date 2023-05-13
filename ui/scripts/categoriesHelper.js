import { getUrlWithParams } from "./filtersHelper.js";
import { get } from "./httpService.js";
import { handleEditAndDeleteButtons } from "./listHelper.js";
import { setResultsCount } from "./paginatorHelper.js";

const getCategoriesList = (filters = {}) => {

  const urlWithParams = getUrlWithParams('/categories', filters);
  get(urlWithParams).then(async (response) => {
    const categories = (await response.json()).data;
    console.log(categories)

    renderCategoryItems(categories);

    handleEditAndDeleteButtons('category', 'categories');
    setResultsCount(categories);

  });
}

const getCategoriesDropdown = (afterLoading) => {
  let categoryItems = '';

  get('/categories').then(async (response) => {
    const categories = (await response.json()).data;
    for(let i = 0; i < categories.length; i++){
      categoryItems += `<option value="${categories[i]._id}">${categories[i].name}</option>`;
    }
    document.getElementById("categoriesDropdown").innerHTML = categoryItems;
    
    // if there is passed a function that should execute after loading (selecting items in the dropdown for example)
    if(afterLoading){
      afterLoading();
    }
  });
  
}

const renderCategoryItems = (categories) => {
  let categoryItems = '';
  for(let i = 0; i < categories.length; i++){
    const category = categories[i];
    categoryItems += `<div class="categoryItem" data-id="${category._id}">
      <div>${category.name}</div>
      <div class="note" data-id="${category._id}">Click again to confirm delete</div>
      <div>
        <button class="edit" data-id="${category._id}">Edit</button>
        <button class="delete" data-id="${category._id}">Delete</button>
      </div>
    </div>`
  }
  document.getElementById("categoriesList").innerHTML = categoryItems;
}


export { getCategoriesList, getCategoriesDropdown }