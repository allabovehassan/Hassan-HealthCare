document.querySelector("#form").addEventListener("submit", check);

function check(event) {
  event.preventDefault();
  let userE = document.querySelector("#email").value;
  let userP = document.querySelector("#pas").value;
  let arrEmail = JSON.parse(localStorage.getItem("dataE"));
  let arrPas = JSON.parse(localStorage.getItem("dataP"));
  let Ematch = false;
  let Pmatch = false;
  for (let i = 0; i < arrEmail.length; i++) {
    if (arrEmail[i] == userE) {
      Ematch = true;
      break;
    }
  }
  for (let i = 0; i < arrPas.length; i++) {
    if (arrPas[i] == userP) {
      Pmatch = true;
      break;
    }
  }
  flag = false;
  localStorage.setItem("flag", flag);
  if (Pmatch == true && Ematch == true) {
    alert("Login Successful");
    flag = true;
    localStorage.setItem("flag", flag);
    location.href = "/carts.html";
  } else {
    alert("Invalid Credentials");
    flag = false;
    location.href = "/Login/login.html";

    alert("Login Again");
  }
  // Pmatch == true && Ematch == true
  //   ? alert("Login Successful")
  //   : alert("Invalid Credentials");
  // flag = true;
  // localStorage.setItem("flag", flag);
  // location.href = "/hassan-health-care/carts.html";
}
