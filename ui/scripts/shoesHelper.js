import { get } from "./httpService.js";

const getShoeList = () => {

  let shoeItems = '';

  get('/shoes').then(async (response) => {
    const shoes = (await response.json()).data;
    console.log(shoes)

    for(let i = 0; i < shoes.length; i++){
      shoeItems += renderShoeItem(shoes[i]);
    }
    
    document.getElementById("shoeList").innerHTML = shoeItems;
  
    shoeItems = document.getElementsByClassName("shoeItem");
  
    for(let i = 0; i < shoeItems.length; i++) {
      shoeItems[i].addEventListener("click", () => {
        window.location.href = "shoe.html?id=" + shoeItems[i].getAttribute("data-id");
      })
    }
  });
}


const renderShoeItem = (shoe) => {
  return `<div class="shoeItem" data-id="${shoe._id}">
    <div class="shoeItem--image" style="background-image: url(${shoe.imageURL})"></div>
    <div class="shoeItem--label">${shoe.name}</div>
    <div class="shoeItem--price">${shoe.price}lv</div>
  </div>`
}


const renderShoeDetails = (shoe) => {
  return `<div id="shoeDetails">
    <div class="shoeDetails--image" style="background-image: url(${shoe.imageURL})"></div>
    <div id="shoeDetails--leftpanel">
      <div id="shoeDetails--label">${shoe.name}</div>
      <div id="shoeDetails--sizes">Comes in sizes: ${shoe.sizes.join(' - ')} (EU)</div>
      <div id="shoeDetails--gender">Suitable for: ${shoe.gender.join(', ').replace('m', 'Men').replace('f', 'Women')}</div>
      <div id="shoeDetails--price">${shoe.price}lv</div>
      
      <div class="note" data-id="${shoe._id}">Click again to confirm delete</div>
      <button id="openEdit">Edit</button><button id="deleteShoe" data-id="${shoe._id}">Delete</button>
    </div>
  </div>`
}


export { getShoeList, renderShoeItem, renderShoeDetails }