let SingUpform = document.querySelector("#form");

SingUpform.addEventListener("submit", myFun);
let arrPas = JSON.parse(localStorage.getItem("dataP")) || [];
let arrEmail = JSON.parse(localStorage.getItem("dataE")) || [];
function myFun(event) {
  event.preventDefault();

  let var1 = document.querySelector("#email").value;
  let var2 = document.querySelector("#pas").value;

  arrPas.push(var2);
  arrEmail.push(var1);
  localStorage.setItem("dataP", JSON.stringify(arrPas));
  localStorage.setItem("dataE", JSON.stringify(arrEmail));
  window.location.href = "/Login/login.html";
}
