import { getCategoriesList } from "./scripts/categoriesHelper.js";
import { applyFitlers } from "./scripts/filtersHelper.js";
import { changePaginator, getPaginator } from "./scripts/paginatorHelper.js";
import { getShoeList } from "./scripts/shoeHelper.js";

getCategoriesList();

document.getElementById("applyFilters").addEventListener("click", applyFitlers);

document.getElementById("pageSize").addEventListener("change", changePaginator)