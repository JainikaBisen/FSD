function add() {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    let result = x + y;
    document.getElementById("resultDisplay").textContent = result;
}

function sub() {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    let result = x - y;
    document.getElementById("resultDisplay").textContent = result;
}

function multiply() {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    let result = x * y;
    document.getElementById("resultDisplay").textContent = result;

}
function divide() {
    x = parseFloat(document.getElementById("num1").value);
    y = parseFloat(document.getElementById("num2").value);
    if(y === 0){
        alert("Cannot divide the number by zero");
        clearFields();
    }
    else{
        let result = x / y;
        document.getElementById("resultDisplay").textContent = result;
    }
}

function clearFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultDisplay").textContent = "";
}
