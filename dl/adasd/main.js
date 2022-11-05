const passwdInput = ''
let splitInput = ''

function checkUname() {
    const unameInput = document.getElementById("unameInput").value;
    console.log(unameInput);
    if ( unameInput.indexOf('/') > -1 || unameInput.infexOf('p') > -1){
        alert("username bbbbb");
    } else {
        console.log("asd");
    }
}

function checkPasswd() {
    const passwdInput = document.getElementById("passwdInput").value
    const splitInput = passwdInput.toString().split('')
    if ( splitInput.length < 8 ) {
        console.log(splitInput);
        alert("Your password is too short");
    } else {
        console.log("Your password is ok.");
    }
}

function checkEmail(){
    const emailInput = document.getElementById("emailInput").value;
    console.log(emailInput);
    if( emailInput.indexOf('@') > -1 && emailInput.indexOf('.com') > -1){
        console.log("Email is correct")
    } else {
        alert("incorrect email");
    }
}