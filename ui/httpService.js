import { API_URL } from "./constants.js";

async function get(url = "", data = {}) {
  // Default options are marked with *
  const request = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(API_URL + url, request);
  return response; // parses JSON response into native JavaScript objects
}


async function post(url = "", data = {}) {
  // Default options are marked with *
  const request = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
  const response = await fetch(API_URL + url, request);
  return response; // parses JSON response into native JavaScript objects
}

async function put(url = "", data = {}) {
  // Default options are marked with *
  const request = {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };
  const response = await fetch(API_URL + url, request);
  return response; // parses JSON response into native JavaScript objects
}

async function deleteConfirmed(url = "") {
  // Default options are marked with *
  const request = {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
    }
  };
  const response = await fetch(API_URL + url, request);
  return response; // parses JSON response into native JavaScript objects
}

const handleError = (error) => {
  console.error('ERROR', error)
}

export { get, post, put, deleteConfirmed, handleError }