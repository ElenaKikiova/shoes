const mockCategories = [
  {_id: '1', name: 'Sports', description: 'Running shoes, hiking shoes, etc'},
  {_id: '2', name: 'Casual', description: 'For walks in parks'},
  {_id: '3', name: 'Elegant', description: 'For a formal dinner'}
]

const getCategoriesList = () => {

  let categoryItems = '';

  for(let i = 0; i < mockCategories.length; i++){
    categoryItems += renderCategoryItem(mockCategories[i])
  }
  
  document.getElementById("categoriesList").innerHTML = categoryItems;

  const editButtons = document.getElementsByClassName("edit");

  for(let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", () => {
      window.location.href = "category.html?id=" + editButtons[i].getAttribute('id');
    })
  }
}

const getCategoriesDropdown = () => {
  let categoryItems = '';

  for(let i = 0; i < mockCategories.length; i++){
    categoryItems += `<option value="${mockCategories[i]._id}">${mockCategories[i].name}</option>`;
  }
  
  document.getElementById("categoriesDropdown").innerHTML = categoryItems;
}

const renderCategoryItem = (category) => {
  return `<div class="categoryItem" id="${category._id}">
  <div>${category.name}</div>
  <div><button class="edit" id="${category._id}">Edit</button><button class="delete">Delete</button></div>
  </div>`;
}


const getCategoryById = (categoryId) => {
  return mockCategories.filter((c) => c._id === categoryId)[0];
}

export { getCategoriesList, renderCategoryItem, getCategoryById, getCategoriesDropdown }