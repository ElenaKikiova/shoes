
const guardRoute = () => {
  const userToken = localStorage.getItem("userToken");
  if(!userToken) window.location.href = "index.html";
}

export { guardRoute }