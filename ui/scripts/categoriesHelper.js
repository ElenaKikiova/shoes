const getCategoriesList = () => {

  let categoryItems = '';

  for(let i = 0; i < 6; i++){
    categoryItems += renderCategoryItem({id: '1', name: 'Sports'})
  }
  
  document.getElementById("categoriesList").innerHTML = categoryItems;
}


const renderCategoryItem = (category) => {
  return `<div class="categoryItem" id="${category.id}">
  <div>${category.name}</div>
  <div><button class="edit">Edit</button><button class="delete">Delete</button></div>
  </div>`
}

export { getCategoriesList, renderCategoryItem }