import { getBrandsList } from "./scripts/brandsHelper.js";

document.getElementById("applyFilters").addEventListener("click", () => {
  const nameSearch = document.getElementById("name").value;
  const filters = {
    name: nameSearch
  }

  console.log(filters);
});


getBrandsList();
