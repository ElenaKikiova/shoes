import { API_URL } from "../constants.js";

const headers = () => {
  const token = localStorage.getItem('userToken');
  return ({
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  })
}


async function get(url = "") {
  const request = {
    method: "GET", 
    mode: "cors", 
    cache: "no-cache",
    credentials: "same-origin",
    headers: headers()
  };
  
  try {
    const response = await fetch(API_URL + url, request);
    if(response.status === 401){
      window.location.href = "index.html";
    }
    return response;
  } catch (error) {
    handleError(error);
  }
}


async function post(url = "", data = {}) {
  // Default options are marked with *
  const request = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: headers(),
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
 
  
  try {
    const response = await fetch(API_URL + url, request);
    if(response.status === 401){
      window.location.href = "index.html";
    }
    return response;
  } catch (error) {
    handleError(error);
  }
}

async function put(url = "", data = {}) {
  // Default options are marked with *
  const request = {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: headers(),
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
  
  
  try {
    const response = await fetch(API_URL + url, request);
    if(response.status === 401){
      window.location.href = "index.html";
    }
    return response;
  } catch (error) {
    handleError(error);
  }
}

async function deleteConfirmed(url = "") {
  // Default options are marked with *
  const request = {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: headers()
  };
  
  
  try {
    const response = await fetch(API_URL + url, request);
    if(response.status === 401){
      window.location.href = "index.html";
    }
    return response;
  } catch (error) {
    handleError(error);
  }
}

const handleError = (error) => {
  console.error('ERROR', error);
  window.alert("An error occured. Please try later");
}


export { get, post, put, deleteConfirmed, handleError }