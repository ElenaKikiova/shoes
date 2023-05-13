import { deleteConfirmed, get, handleError } from "./httpService.js";
import { deleteOnClick } from "./formsHelper.js";
import { getUrlWithParams } from "./filtersHelper.js";

const getBrandsList = (filters = {}) => {

  let brandItems = '';

  const urlWithParams = getUrlWithParams('/brands', filters);

  get(urlWithParams).then(async (response) => {
    const brands = (await response.json()).data;
    console.log(brands)

    for(let i = 0; i < brands.length; i++){
      brandItems += renderBrandItem(brands[i])
    }
    
    document.getElementById("brandsList").innerHTML = brandItems;

    const editButtons = document.getElementsByClassName("edit");

    for(let i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener("click", () => {
        window.location.href = "brand.html?id=" + editButtons[i].getAttribute("data-id");
      })
    }
    
    const deleteButtons = document.getElementsByClassName("delete");

    for(let i = 0; i < deleteButtons.length; i++) {
      const id = deleteButtons[i].getAttribute("data-id");
      deleteButtons[i].addEventListener("click", () => deleteOnClick(id, () => {
        deleteConfirmed(`/brands/${id}`).then((response) => {
          getBrandsList();
        }, handleError)
      }))
    }

    document.getElementById("noResults").style.display = brands.length === 0 ? 'block' : 'none';
  });
}

const getBrandsDropdown = (search) => {
  let brandItems = search ? '<option value="">All</option>' : '';

  get('/brands').then(async (response) => {
    const brands = (await response.json()).data;
    for(let i = 0; i < brands.length; i++){
      brandItems += `<option value="${brands[i]._id}">${brands[i].name}</option>`;
    }

    document.getElementById("brandsDropdown").innerHTML = brandItems;
  });
}


const renderBrandItem = (brand) => {
  return `<div class="brandItem" data-id="${brand._id}">
  <div>${brand.name}</div>
  <div class="note" data-id="${brand._id}">Click again to confirm delete</div>
  <div>
    <button class="edit" data-id="${brand._id}">Edit</button>
    <button class="delete" data-id="${brand._id}">Delete</button>
  </div>
  </div>`;
}

export { getBrandsList, renderBrandItem, getBrandsDropdown }