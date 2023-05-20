import { guardRoute } from "./scripts/authHelper.js";
import { getCategoriesList } from "./scripts/categoriesHelper.js";

guardRoute();

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const filters = {
    name: nameSearch
  }

  getCategoriesList(filters);
});

getCategoriesList();
