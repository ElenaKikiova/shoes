import { guardRoute } from "./scripts/authHelper.js";
import { getBrandsList } from "./scripts/brandsHelper.js";

guardRoute();

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const filters = {
    name: nameSearch
  }

  getBrandsList(filters);
});

getBrandsList();


