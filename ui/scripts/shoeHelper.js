const getShoeList = () => {

  let shoeItems = '';

  for(let i = 0; i < 70; i++){
    shoeItems += renderShoeItem({id: '1', title: 'elele', price: '155', imageURL: 'https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw548572d2/images/a_08/162056C_A_08X1.jpg?sw=406'})
  }
  
  document.getElementById("shoeList").innerHTML = shoeItems;
}


const renderShoeItem = (shoe) => {
  return `<div class="shoeItem" id="${shoe.id}">
    <div class="shoeItem--image" style="background-image: url(${shoe.imageURL})"></div>
    <div class="shoeItem--label">${shoe.title}</div>
    <div class="shoeItem--price">${shoe.price}lv</div>
  </div>`
}

export { getShoeList, renderShoeItem }