
import { getCurrentPage } from "./paginatorHelper.js";

const getUrlWithParams = (url, filters,  pagination) => {
  console.log(url, filters)

  // pagination filters
  if(pagination){
    filters.pageSize = Number(document.getElementById("pageSize").value);
    filters.pageNumber = getCurrentPage();
  }

  return url + '?' + new URLSearchParams(filters).toString();
}

export { getUrlWithParams }