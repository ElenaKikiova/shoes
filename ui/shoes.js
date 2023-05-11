import { getBrandsDropdown } from "./scripts/brandsHelper.js";
import { changePaginator, getPaginator } from "./scripts/paginatorHelper.js";
import { getShoeList } from "./scripts/shoesHelper.js";

getShoeList();
getPaginator();

getBrandsDropdown(true);

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const priceRange = document.getElementById("priceRange").value;
  const brandId = document.getElementById("brandsDropdown").value;

  const filters = {}
  
  if(nameSearch != '') filters.name = nameSearch;
  if(priceRange != '') filters.priceRange = priceRange;
  if(brandId != '') filters.brandId = brandId;

  console.log(filters);
});

document.getElementById("pageSize").addEventListener("change", () => changePaginator(70))