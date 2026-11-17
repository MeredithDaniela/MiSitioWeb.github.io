
function calcularPromedio() {
    // 1. Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var c1Texto = document.getElementById("calif1").value.trim();
    var c2Texto = document.getElementById("calif2").value.trim();
    var c3Texto = document.getElementById("calif3").value.trim();
    var divResultado = document.getElementById("resultado");

    // 2. Validar que ningún campo esté vacío
    if (nombre === "" || c1Texto === "" || c2Texto === "" || c3Texto === "") {
        alert("Por favor, completa el nombre del estudiante y las tres calificaciones.");
        return;
    }

    // Convertir las calificaciones a números
    var calif1 = parseFloat(c1Texto);
    var calif2 = parseFloat(c2Texto);
    var calif3 = parseFloat(c3Texto);

    // 3. Validar que sean números válidos y estén entre 0 y 10
    if (isNaN(calif1) || isNaN(calif2) || isNaN(calif3)) {
        alert("Por favor, ingresa solo números válidos en las calificaciones.");
        return;
    }

    if (calif1 < 0 || calif1 > 10 || calif2 < 0 || calif2 > 10 || calif3 < 0 || calif3 > 10) {
        alert("Las calificaciones deben estar en un rango de 0 a 10.");
        return;
    }

    // 4. Calcular el promedio
    var promedio = (calif1 + calif2 + calif3) / 3;
    var promedioRedondeado = promedio.toFixed(2);

    // 5. Determinar estado (APROBADO / REPROBADO) y observación
    var estado = "";
    var observacion = "";

    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
    } else {
        estado = "REPROBADO";
    }

    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 6. Mostrar todos los resultados dentro de la página
    divResultado.innerHTML = `
        <h3>Resultados de la evaluación:</h3>
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${calif1}, ${calif2}, ${calif3}</p>
        <p><strong>Promedio obtenido:</strong> ${promedioRedondeado}</p>
        <p><strong>Estado:</strong> ${estado}</p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}