let welcomeAlert = document.getElementById("welcomeAlert");
let btnLogout = document.getElementById("btnLogout");

let userNameAccepted = sessionStorage.getItem("UserNameAccepted");

welcomeAlert.innerHTML += userNameAccepted;



btnLogout.addEventListener( 'click'  , function(){

    sessionStorage.clear();

    window.location.href = "index.html";

} )
































