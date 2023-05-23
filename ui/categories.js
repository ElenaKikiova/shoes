import { guardRoute } from "./scripts/authHelper.js";
import { getCategoriesList } from "./scripts/categoriesHelper.js";
import { changePaginator } from "./scripts/paginatorHelper.js";

guardRoute();

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const filters = {
    name: nameSearch
  }

  getCategoriesList(filters);
});

getCategoriesList();
document.getElementById("pageSize").addEventListener("change", () => changePaginator(getCategoriesList))
