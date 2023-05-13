import { deleteOnClick } from "./formsHelper.js";
import { deleteConfirmed, get, handleError } from "./httpService.js";

const getCategoriesList = () => {

  get('/categories').then(async (response) => {
    const categories = (await response.json()).data;
    console.log(categories)
    let categoryItems = '';

    for(let i = 0; i < categories.length; i++){
      categoryItems += renderCategoryItem(categories[i])
    }
    
    document.getElementById("categoriesList").innerHTML = categoryItems;

    const editButtons = document.getElementsByClassName("edit");

    for(let i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", () => {
        window.location.href = "category.html?id=" + editButtons[i].getAttribute("data-id");
      })
    }
    
    const deleteButtons = document.getElementsByClassName("delete");

    for(let i = 0; i < deleteButtons.length; i++) {
      const id = deleteButtons[i].getAttribute("data-id");
      deleteButtons[i].addEventListener("click", () => deleteOnClick(id, () => {
        deleteConfirmed(`/categories/${id}`).then((response) => {
          getCategoriesList();
        }, handleError)
      }))
    }

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

const renderCategoryItem = (category) => {
  return `<div class="categoryItem" data-id="${category._id}">
  <div>${category.name}</div>
  <div class="note" data-id="${category._id}">Click again to confirm delete</div>
  <div>
    <button class="edit" data-id="${category._id}">Edit</button>
    <button class="delete" data-id="${category._id}">Delete</button>
  </div>
  </div>`;
}


export { getCategoriesList, renderCategoryItem, getCategoriesDropdown }