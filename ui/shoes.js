import { getBrandsDropdown } from "./scripts/brandsHelper.js";

import { changePaginator } from "./scripts/paginatorHelper.js";
import { getShoeList } from "./scripts/shoesHelper.js";

getShoeList();

getBrandsDropdown(true);

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const priceRange = document.getElementById("priceRange").value;
  const brandId = document.getElementById("brandsDropdown").value;

  const filters = {}
  
  if(nameSearch != '') filters.name = nameSearch;
  if(priceRange != '') {
    const regex = priceRange.match(new RegExp("([0-9]+)-([0-9]*)"));
    if(regex[1] != 0) filters.minPrice = regex[1];
    if(regex[2] != '') filters.maxPrice = regex[2];
  }
  if(brandId != '') filters.brandId = brandId;

  getShoeList(filters);
});

document.getElementById("pageSize").addEventListener("change", () => changePaginator())