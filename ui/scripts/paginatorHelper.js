import { getShoeList } from "./shoesHelper.js";

const getPaginator = (itemCount) => {

  const pageSize = Number(document.getElementById("pageSize").value);
  const left = itemCount % pageSize;
  const pageCount = left === 0 ? itemCount / pageSize : Math.floor(itemCount / pageSize) + 1;

  console.log(pageCount, pageSize)
  let paginatorItems = '';
  for(let i = 0; i < pageCount; i++){
    paginatorItems += renderPaginatorItem(i);
  }

  document.getElementById("paginator").innerHTML = paginatorItems;
  setCurrentPage(1);

  paginatorItems = document.getElementsByClassName("paginatorItem");
  for(let i = 0; i < paginatorItems.length; i++){
    paginatorItems[i].addEventListener("click", () => {
      setCurrentPage(paginatorItems[i].getAttribute("data-page-number"));
    })
  }
}

const renderPaginatorItem = (page) => {
  return `<div class="paginatorItem" data-page-number="${page + 1}">${page + 1}</div>`;
}

const getCurrentPage = () => {
  const currentlyActive = document.querySelector(`.paginatorItem#active`);
  console.log(currentlyActive)
  return currentlyActive ? currentlyActive.getAttribute("data-page-number") : 1;
}

const setCurrentPage = (pageNumber) => {
  const currentlyActive = document.querySelector(`.paginatorItem#active`);
  if(currentlyActive) currentlyActive.removeAttribute("id");
  document.querySelector(`.paginatorItem[data-page-number="${pageNumber}"]`).setAttribute("id", "active");
}

const changePaginator = () => {
  console.log('e')
  setCurrentPage(1);
  getShoeList();
}


export { getPaginator, renderPaginatorItem, changePaginator, setCurrentPage, getCurrentPage }