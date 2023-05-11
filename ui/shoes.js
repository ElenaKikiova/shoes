import { applyFitlers } from "./scripts/filtersHelper.js";
import { changePaginator, getPaginator } from "./scripts/paginatorHelper.js";
import { getShoeList } from "./scripts/shoesHelper.js";

getShoeList();
getPaginator();

document.getElementById("applyFilters").addEventListener("click", applyFitlers);

document.getElementById("pageSize").addEventListener("change", changePaginator)