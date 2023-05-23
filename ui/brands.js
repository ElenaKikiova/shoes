import { guardRoute } from "./scripts/authHelper.js";
import { getBrandsList } from "./scripts/brandsHelper.js";
import { changePaginator } from "./scripts/paginatorHelper.js";

guardRoute();

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const filters = {
    name: nameSearch
  }

  getBrandsList(filters);
});

getBrandsList();
document.getElementById("pageSize").addEventListener("change", () => changePaginator(getBrandsList))


