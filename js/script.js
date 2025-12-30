let operator = "";
let num1 = 0;
let num2 = 0;
let sum = 0;
console.log(document.getElementById("num").value);


function addFun() {
    num1 = Number(document.getElementById("num").value);
    document.getElementById("num").value = "";
    operator = "+";
}

function subFun() {
    num1 = Number(document.getElementById("num").value);
    document.getElementById("num").value = "";
    operator = "-";
}

function mulFun() {
    num1 = Number(document.getElementById("num").value);
    document.getElementById("num").value = "";
    operator = "*";
}

function divFun() {
    num1 = Number(document.getElementById("num").value);
    document.getElementById("num").value = "";
    operator = "/";
}

function modFun() {
    num1 = Number(document.getElementById("num").value);
    document.getElementById("num").value = "";
    operator = "%";
}

function sqrFun() {
    num1 = Number(document.getElementById("num").value);
    document.getElementById("num").value = "";
    sum = `${num1 * num1}`;
    document.getElementById("num").value = sum;
    operator = "^2";
}

function cubFun() {
    num1 = Number(document.getElementById("num").value);
    document.getElementById("num").value = "";
    sum = `${num1 * num1 * num1}`;
    document.getElementById("num").value = sum;
    operator = "^3";
}

function clrFun() {
    document.getElementById("num").value = "";
}

function resultFun() {
    num2 = Number(document.getElementById("num").value);
    if (num1 === 0) {
       alert("Invalid")
    }
   
    else {
        if (operator === "+") {
            sum = `${num1 + num2}`;
        }
        else if (operator === "-") {
            sum = `${num1 - num2}`;
        }
        else if (operator === "*") {
            sum = `${num1 * num2}`;
        }
        else if (operator === "/") {
            sum = `${num1 / num2}`;
        }
        else if (operator === "%") {
            sum = `${num1 % num2}`;
        }
        else {
            sum = num2;
        }
    }


    document.getElementById("num").value = sum;

}