const applyFitlers = () => {
  const nameSearch = document.getElementById("name").value;
  const priceRange = document.getElementById("priceRange").value;

  const filters = {
    name: nameSearch,
    priceRange: priceRange
  }

  console.log(filters);
}

export { applyFitlers }