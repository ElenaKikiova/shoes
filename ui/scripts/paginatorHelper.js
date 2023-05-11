import { getShoeList } from "./shoesHelper.js";

const getPaginator = () => {

  const pageSize = Number(document.getElementById("pageSize").value);
  const left = 70 % pageSize;
  const pageCount = left === 0 ? 70 / pageSize : Math.floor(70 / pageSize) + 1;
  console.log(pageCount, pageSize)

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