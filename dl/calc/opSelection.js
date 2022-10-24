var original = '    <ul class="breadcrumb"><li><a href="../index.html">Home</a></li><li>Calculadora</li></ul><div class="main"><h1 style="display: flex; justify-content: center; font-weight: bold;">Selecciona el tipo de operación:</h1><div id="selector" style="display: flex; justify-content: center; padding: 10px; margin: 10px;"><input type="button" value="Suma" onclick="selectSuma()"><input type="button" value="Resta" onclick="selectResta()"><input type="button" value="Multiplicacion" onclick="selectMultiply()"></div><hr /></div>'
var sumaSelected = '    <h1 style="display: flex; justify-content: center; font-weight: bold;">Suma</h1><div style="display: flex; justify-content: center;"><input type="number" name="value1" id="val1" placeholder="Primer valor"><p> + </p><input type="number" name="value2" id="val2" placeholder="Segundo valor"><input type="button" value="Sumar" id="sumButton" onclick="sum()"></div><hr /><div style="display: flex; justify-content: center;"><p>Resultado de la operación: </p><p id="opResult"></p></div><hr /><div style="display: flex; justify-content: center;"><input type="button" value="Seleccionar otra operación" id="resetButton" onclick="reset()"></div>'
var restaSelected = '    <div style="display: flex; justify-content: center;"><input type="number" name="value1" id="val1" placeholder="Primer valor"><p> - </p><input type="number" name="value2" id="val2" placeholder="Segundo valor"><input type="button" value="Restar" id="sumButton" onclick="subtract()"></div><hr /><div style="display: flex; justify-content: center;"><p>Resultado de la operación: </p><p id="opResult"></p></div><hr /><div style="display: flex; justify-content: center;"><input type="button" value="Seleccionar otra operación" id="resetButton" onclick="reset()"></div>'
var multiplySelected = '    <div style="display: flex; justify-content: center;"><input type="number" name="value1" id="val1" placeholder="Primer valor"><p> * </p><input type="number" name="value2" id="val2" placeholder="Segundo valor"><input type="button" value="Multiplicar" id="sumButton" onclick="multiply()"></div><hr /><div style="display: flex; justify-content: center;"><p>Resultado de la operación: </p><p id="opResult"></p></div><hr /><div style="display: flex; justify-content: center;"><input type="button" value="Seleccionar otra operación" id="resetButton" onclick="reset()"></div>'

function selectSuma(){
    document.querySelector("body").innerHTML = sumaSelected;
}

function selectResta(){
    document.querySelector("body").innerHTML = restaSelected;
}

function selectMultiply(){
    document.querySelector("body").innerHTML = multiplySelected;
}

function reset(){
    document.querySelector("body").innerHTML = original;
}


var he =     '<ul class="breadcrumb"><li><a href="../index.html">Home</a></li><li>Calculadora</li></ul><div class="main"><h1 style="display: flex; justify-content: center; font-weight: bold;">Selecciona el tipo de operación:</h1><div id="selector" style="display: flex; justify-content: center; padding: 10px; margin: 10px;"><input type="button" value="Suma" onclick="selectSuma()"><input type="button" value="Resta" onclick="selectResta()"><input type="button" value="Multiplicacion" onclick="selectMultiply()"></div><hr /></div>'