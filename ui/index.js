import { handleError, post } from "./scripts/httpService.js";

document.getElementById("login").addEventListener("click", () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  post("/auth/login", {
    username, password
  }).then(async (response) => {
    const result = (await response.json());
    console.log(result)
    if(result.data){
      document.getElementById("error").style.display = "none";
      localStorage.setItem("userToken", result.data.token);
      window.location.href = "shoes.html";
    }
    else {
      document.getElementById("error").style.display = "block";
    }
  }, handleError)
})