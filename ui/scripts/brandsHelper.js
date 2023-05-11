const mockBrands = [
  {id: '1', name: 'Puma', description: 'Running shoes'},
  {id: '2', name: 'Nike', description: 'Sports shoes'},
  {id: '3', name: 'Tamaris', description: 'For a formal dinners'},
  {id: '4', name: 'Converse', description: 'Cool kid'}
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

const getBrandsDropdown = () => {
  let brandItems = '';

  for(let i = 0; i < mockBrands.length; i++){
    brandItems += `<option value="${mockBrands[i].id}">${mockBrands[i].name}</option>`;
  }
    
  document.getElementById("brandsDropdown").innerHTML = brandItems;
}


const renderBrandItem = (brand) => {
  return `<div class="brandItem" id="${brand.id}">
  <div>${brand.name}</div>
  <div><button class="edit" id="${brand.id}">Edit</button><button class="delete">Delete</button></div>
  </div>`;
}

const getBrandById = (brandId) => {
  return mockBrands.filter((c) => c.id === brandId)[0];
}

export { getBrandsList, renderBrandItem, getBrandById, getBrandsDropdown }