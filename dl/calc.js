
function sum(){
    var firstValue = document.getElementById("val1").value;
    var secondValue = document.getElementById("val2").value;
    var result = parseInt(firstValue) + parseInt(secondValue);
    alert(result);
};

function subtract(){
    var firstValue = document.getElementById("val1").value;
    var secondValue = document.getElementById("val2").value;
    var result = parseInt(firstValue) - parseInt(secondValue);
    alert(result);
}

function multiply(){
    var firstValue = document.getElementById("val1").value;
    var secondValue = document.getElementById("val2").value;
    var result= parseInt(firstValue) * parseInt(secondValue);
    alert(result);
}