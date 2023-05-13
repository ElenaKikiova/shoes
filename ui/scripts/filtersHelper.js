
import { getCurrentPage } from "./paginatorHelper.js";

const getUrlWithParams = (url, filters) => {
  console.log(url, filters);

  // pagination filters
  if(document.getElementById("pageSize")){
    filters.pageSize = Number(document.getElementById("pageSize").value);
    filters.pageNumber = getCurrentPage();
  }

  const hasFilters = Object.keys(filters).length > 0;

  return url + (hasFilters ? '?' + new URLSearchParams(filters).toString() : '');
}

export { getUrlWithParams }