const passwdInput = ''
let splitInput = ''
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
