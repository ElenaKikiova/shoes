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
  if(priceRange != '') filters.priceRange = priceRange;
  if(brandId != '') filters.brandId = brandId;

  getShoeList(filters);
});

document.getElementById("pageSize").addEventListener("change", () => changePaginator())