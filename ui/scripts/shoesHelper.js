const mockShoes = [
  {id: '1', name: 'elele', gender: ['f'], description: 'Comfy and cool', sizes: [36, 41], price: '155', imageURL: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw548572d2/images/a_08/162056C_A_08X1.jpg?sw=406'},
  {id: '2', name: 'qwrwe', gender: ['f', 'm'], description: 'Comfy and cool', sizes: [36, 45], price: '120', imageURL: 'https://www.converse.com/dw/image/v2/BJJF_PRD/on/demandware.static/-/Sites-cnv-master-catalog-we/default/dw4fb98925/images/c_08/M9166_C_08X1.jpg?sw=406'}
]

const getShoeList = () => {

  let shoeItems = '';

  for(let i = 0; i < 50; i++){
    shoeItems += renderShoeItem(mockShoes[0]);
    shoeItems += renderShoeItem(mockShoes[1]);
  }
  
  document.getElementById("shoeList").innerHTML = shoeItems;

  const shoes = document.getElementsByClassName("shoeItem");

  for(let i = 0; i < shoes.length; i++) {
    shoes[i].addEventListener("click", () => {
      window.location.href = "viewShoe.html?id=" + shoes[i].getAttribute('id');
    })
  }
}


const renderShoeItem = (shoe) => {
  return `<div class="shoeItem" id="${shoe.id}">
    <div class="shoeItem--image" style="background-image: url(${shoe.imageURL})"></div>
    <div class="shoeItem--label">${shoe.name}</div>
    <div class="shoeItem--price">${shoe.price}lv</div>
  </div>`
}


const renderShoeDetails = (shoe) => {
  return `<div class="shoeDetails" id="${shoe.id}">
    <div class="shoeDetails--image" style="background-image: url(${shoe.imageURL})"></div>
    <div class="shoeItem--label">${shoe.name}</div>
    <div class="shoeDetails--sizes">${shoe.sizes.join(' - ')} EU size</div>
    <div class="shoeDetails--gender">${shoe.gender.join(', ').replace('m', 'Men').replace('f', 'Women')}</div>
    <div class="shoeDetails--price">${shoe.price}lv</div>
  </div>`
}

const getShoeById = (shoeId) => {
  return mockShoes.filter((s) => s.id === shoeId)[0];
}

export { getShoeList, renderShoeItem, getShoeById, renderShoeDetails }