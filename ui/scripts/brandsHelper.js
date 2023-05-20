import { get, handleError } from "./httpService.js";
import { getUrlWithParams } from "./filtersHelper.js";
import { handleEditAndDeleteButtons } from "./listHelper.js";
import { setResultsCount } from "./paginatorHelper.js";

const getBrandsList = (filters = {}) => {

  const urlWithParams = getUrlWithParams('/brands', filters);

  get(urlWithParams).then(async (response) => {
    const brands = (await response.json()).data;

    renderBrandItems(brands);

    handleEditAndDeleteButtons('brand', 'brands', getBrandsList);

    setResultsCount(brands);
  }, handleError);
}

const getBrandsDropdown = (search, afterLoading) => {
  let brandItems = search ? '<option value="">All</option>' : '';

  get('/brands').then(async (response) => {
    const brands = (await response.json()).data;
    for(let i = 0; i < brands.length; i++){
      brandItems += `<option value="${brands[i]._id}">${brands[i].name}</option>`;
    }

    document.getElementById("brandsDropdown").innerHTML = brandItems;

    if(afterLoading) {
      afterLoading();
    }
  });
}


const renderBrandItems = (brands) => {
  let brandItems = '';
  for(let i = 0; i < brands.length; i++){
    const brand = brands[i];
    brandItems += `<div class="brandItem" data-id="${brand._id}">
      <div>${brand.name}</div>
      <div class="note" data-id="${brand._id}">Click again to confirm delete</div>
      <div>
        <button class="edit" data-id="${brand._id}">Edit</button>
        <button class="delete" data-id="${brand._id}">Delete</button>
      </div>
    </div>`;
  }
  
  document.getElementById("brandsList").innerHTML = brandItems;
}

export { getBrandsList, getBrandsDropdown }