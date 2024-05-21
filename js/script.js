let operacion = prompt ("Que tipo de operacion desea realizar: 1-Suma / 2-Resta / 3-Division / 4-Multiplicacion");
let numeroUno = Number(prompt("Ingrese el primer numero"));
let numeroDos = Number(prompt("Ingrese el segundo numero"));
let total;

if (operacion == 1){
    total = numeroUno+numeroDos
    alert("El resultado es igual a" + " " + total);
} else if (operacion == 2){
    total = numeroUno-numeroDos
    alert("El resultado es igual a" + " " + total);
} else if (operacion == 3){
    total = numeroUno/numeroDos
    alert("El resultado es igual a" + " " + total);
} else if (operacion == 4){
    total = numeroUno*numeroDos
    alert("El resultado es igual a" + " " + total);
}else{
    alert("Usted a ingresado una operacion incorrecta")
}


