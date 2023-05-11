import { getShoeList } from "./shoesHelper.js";

const getPaginator = (itemCount) => {

  const pageSize = Number(document.getElementById("pageSize").value);
  const left = itemCount % pageSize;
  const pageCount = left === 0 ? itemCount / pageSize : Math.floor(itemCount / pageSize) + 1;

  let paginatorItems = '';
  for(let i = 0; i < pageCount; i++){
    paginatorItems += renderPaginatorItem(i);
  }

  document.getElementById("paginator").innerHTML = paginatorItems;

}

const renderPaginatorItem = (page) => {
  return `<div class="paginatorItem" id="${page + 1}">${page + 1}</div>`
}

const changePaginator = () => {
  getPaginator();
  getShoeList();
}

export { getPaginator, renderPaginatorItem, changePaginator }