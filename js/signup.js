let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let allInputs = document.querySelectorAll('input');
let allMassageAlert = document.querySelectorAll('.error-message');
let MassageAlertName = document.getElementById('errorMassageName');
let MassageAlertEmail = document.getElementById('errorMassageEmail');
let MassageAlertPassword = document.getElementById('errorMassagePassword');

let btnLogin = document.getElementById("btnLogin");


let userList = []

if(localStorage.getItem("usersInfo") !== null) {
    userList = JSON.parse(localStorage.getItem("usersInfo"));
}


btnLogin.addEventListener('click' , addUser);


function addUser(){

    if(!IsEmailFound() && validation(userName , MassageAlertName) && validation(userEmail , MassageAlertEmail) && validation(userPassword , MassageAlertPassword)) {
        console.log("added Element in list");
        let user = {
            name: userName.value,
            email: userEmail.value,
            password: userPassword.value
        }
    
        userList.push(user);
        clearForm();
        localStorage.setItem("usersInfo" , JSON.stringify(userList));
    }
}


function IsEmailFound(){

    if(userName.value === "" || userEmail.value === "" || userPassword.value === "") {
        document.getElementById("alertEmtyInputs").classList.remove("d-none");
        document.getElementById("alertSuccess").classList.add("d-none");
        return true;
    }
    if(JSON.parse(localStorage.getItem("usersInfo")) !== null){
        let arrayOfUsers   = JSON.parse(localStorage.getItem("usersInfo"));
        for(let i =0; i<arrayOfUsers.length; i++) {
            if(arrayOfUsers[i].email === userEmail.value){
                document.getElementById("alertDanger").classList.remove("d-none");
                document.getElementById("alertSuccess").classList.add("d-none");
                return true;
            }
        }
    }

    document.getElementById("alertDanger").classList.add("d-none");
    if(validation(userName , MassageAlertName) && validation(userEmail , MassageAlertEmail) && validation(userPassword , MassageAlertPassword)){
        document.getElementById("alertSuccess").classList.remove("d-none");
        document.getElementById("alertEmtyInputs").classList.add("d-none");
    }

    if(userName.value !== "" && userEmail.value !== "" && userPassword.value !== ""){
        document.getElementById("alertEmtyInputs").classList.add("d-none");
    }

    return false;
}


function clearForm() {
    userName.value = null;
    userEmail.value = null;
    userPassword.value = null;
}

for(let i =0; i<allInputs.length; i++) {
    allInputs[i].addEventListener( 'input' , function(){
        validation(allInputs[i] , allMassageAlert[i]);
    } );
}

function validation(element , msgId) {
    if(userName.value !== "" && userEmail.value !== "" && userPassword.value !== ""){
        document.getElementById("alertEmtyInputs").classList.add("d-none");
    }
    
    let term = element.value;
    let regex = {
        userName : /^[A-Za-z\s]{2,50}$/,
        userEmail : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        userPassword : /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/
    }

    if(regex[element.id].test(term)){
        msgId.classList.add("d-none");
        return true
    }

    else {
        msgId.classList.remove("d-none");
        return false;
    }
}



























