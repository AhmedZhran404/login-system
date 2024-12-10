let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let btnLogin = document.getElementById("btnLogin");


btnLogin.addEventListener('click' , fullChick);



function fullChick() {
    if(localStorage.getItem("usersInfo") !== null){
        let usersInLocalS = JSON.parse(localStorage.getItem("usersInfo"));
        
        for(let i =0; i<usersInLocalS.length; i++) {
            if(userEmail.value === usersInLocalS[i].email && userPassword.value === usersInLocalS[i].password){
                clearForm();
                sessionStorage.setItem( "UserNameAccepted"  ,  usersInLocalS[i].name);
                window.location.href = "welcome.html";
                return;
            }
        }
    }


    document.getElementById("alertWarning").classList.remove("d-none");
}




function clearForm() {
    userEmail.value = null;
    userPassword = null;
}












