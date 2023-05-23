const getPaginator = (itemCount, currentPage, getData) => {

  const pageSize = Number(document.getElementById("pageSize").value);
  const left = itemCount % pageSize;
  const pageCount = left === 0 ? itemCount / pageSize : Math.floor(itemCount / pageSize) + 1;

  let paginatorItems = '';
  for(let i = 0; i < pageCount; i++){
    paginatorItems += renderPaginatorItem(i, currentPage);
  }

  document.getElementById("paginator").innerHTML = paginatorItems;

  paginatorItems = document.getElementsByClassName("paginatorItem");
  for(let i = 0; i < paginatorItems.length; i++){
    paginatorItems[i].addEventListener("click", () => {
      setCurrentPage(paginatorItems[i].getAttribute("data-page-number"));
      getData();
    })
  }

}

const renderPaginatorItem = (page, currentPage) => {
  return `<div class="paginatorItem" data-page-number="${page + 1}" ${currentPage === page + 1 ? 'id="active"' : ''}>${page + 1}</div>`;
}

const getCurrentPage = () => {
  const currentlyActive = document.querySelector(`.paginatorItem#active`);
  return currentlyActive ? currentlyActive.getAttribute("data-page-number") : 1;
}

const setCurrentPage = (pageNumber) => {
  const currentlyActive = document.querySelector(`.paginatorItem#active`);
  if(currentlyActive) currentlyActive.removeAttribute("id");
  document.querySelector(`.paginatorItem[data-page-number="${pageNumber}"]`).setAttribute("id", "active");
}

const changePaginator = (getData) => {
  setCurrentPage(1);
  getData();
}

const setResultsCount = (data) => {
  const count = typeof data === 'number' ? data : data.length;
  document.getElementById("resultsCount").innerHTML = count;
  document.getElementById("noResults").style.display = count === 0 ? 'block' : 'none';
}

export { getPaginator, renderPaginatorItem, changePaginator, setCurrentPage, getCurrentPage, setResultsCount }