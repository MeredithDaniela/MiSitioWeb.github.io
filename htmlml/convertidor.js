function convertir() {
    var input = document.getElementById("temperatura").value;
    var tipo = document.getElementById("tipoConversion").value;
    var divResultado = document.getElementById("resultado");

    if (input.trim() === "") {
        alert("Por favor, ingresa una temperatura.");
        return;
    }

    var temp = parseFloat(input);
    var resultado = 0;

    if (tipo === "cToF") {
        resultado = (temp * 9 / 5) + 32;
        divResultado.innerHTML = "Temperatura ingresada: " + temp + " °C<br>Resultado: <strong>" + resultado.toFixed(2) + " °F</strong>";
    } else {
        resultado = (temp - 32) * 5 / 9;
        divResultado.innerHTML = "Temperatura ingresada: " + temp + " °F<br>Resultado: <strong>" + resultado.toFixed(2) + " °C</strong>";
    }
}