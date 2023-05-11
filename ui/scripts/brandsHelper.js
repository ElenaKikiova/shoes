const mockBrands = [
  {_id: '1', name: 'Puma', description: 'Running shoes'},
  {_id: '2', name: 'Nike', description: 'Sports shoes'},
  {_id: '3', name: 'Tamaris', description: 'For a formal dinners'},
  {_id: '4', name: 'Converse', description: 'Cool kid'}
]

const getBrandsList = () => {

  let brandItems = '';

  for(let i = 0; i < mockBrands.length; i++){
    brandItems += renderBrandItem(mockBrands[i])
  }
  
  document.getElementById("brandsList").innerHTML = brandItems;

  const editButtons = document.getElementsByClassName("edit");

  for(let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener("click", () => {
      window.location.href = "brand.html?id=" + editButtons[i].getAttribute('id');
    })
  }
}

const getBrandsDropdown = (search) => {
  let brandItems = search ? '<option value="">All</option>' : '';

  for(let i = 0; i < mockBrands.length; i++){
    brandItems += `<option value="${mockBrands[i]._id}">${mockBrands[i].name}</option>`;
  }

  document.getElementById("brandsDropdown").innerHTML = brandItems;
}


const renderBrandItem = (brand) => {
  return `<div class="brandItem" id="${brand._id}">
  <div>${brand.name}</div>
  <div><button class="edit" id="${brand._id}">Edit</button><button class="delete">Delete</button></div>
  </div>`;
}

const getBrandById = (brandId) => {
  return mockBrands.filter((c) => c._id === brandId)[0];
}

export { getBrandsList, renderBrandItem, getBrandById, getBrandsDropdown }