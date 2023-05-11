import { applyFitlers } from "./scripts/filtersHelper.js";
import { changePaginator, getPaginator } from "./scripts/paginatorHelper.js";
import { getShoeList } from "./scripts/shoesHelper.js";

getShoeList();
getPaginator();

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const priceRange = document.getElementById("priceRange").value;

  const filters = {
    name: nameSearch,
    priceRange: priceRange
  }

  console.log(filters);
});

document.getElementById("pageSize").addEventListener("change", () => changePaginator(70))