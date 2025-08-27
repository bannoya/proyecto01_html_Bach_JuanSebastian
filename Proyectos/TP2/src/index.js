function producto(num1, num2) {
    return num1 * num2;
}

function suma(num1, num2) {
    return num1 + num2;
}

function porcentaje(total, porc) {
    return (porc * total) / 100;
}

function mostrar(total, total_mas_porc, hours) {
    if (hours <= 160) {
        return total;
    } else {

        return total_mas_porc;
    }
}

function calcular() {
    let pay = parseInt(document.getElementById("pay").value);
    let hours = parseInt(document.getElementById("hours").value);
    let name = document.getElementById("name").value;

    let total = producto(pay, hours);
    let veinte_porc = porcentaje(total, 20);
    let total_mas_porc = suma(total, veinte_porc);

    let salario = mostrar(total, total_mas_porc, hours);

    document.getElementById("salario").innerHTML = name + " su salario es: " + salario + "$" ;
}



