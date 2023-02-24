var Ejercicios3 = /** @class */ (function () {
    function Ejercicios3() {
    }
    Ejercicios3.prototype.ejercicio1 = function () {
        var _a, _b;
        var uva1 = 1;
        var uva2 = 2;
        var medida1 = 1;
        var medida2 = 2;
        var precioUva;
        var medidaUva;
        var tamanioUva;
        medidaUva = parseInt((_a = prompt('Captura que tipo de uva se va a vender\n1. Tipo A (Uva verde)\n2. Tipo B (Uva morada)')) !== null && _a !== void 0 ? _a : "");
        tamanioUva = parseInt((_b = prompt('Captura el mañano de la uva que se va a vender\n1. Tamaño 1 (Uva pequeña)\n2. Tamaño 2 (Uva grande)')) !== null && _b !== void 0 ? _b : "");
        precioUva = Number(prompt('Captura el costo del Kg de la uva'));
        // Uva verde
        if (medidaUva == uva1) {
            // Uva verde pequeña
            if (tamanioUva == medida1) {
                precioUva = precioUva + 0.20;
                alert('El total de la venta es de ' + precioUva);
            }
            // Uva verde grande
            if (tamanioUva == medida2) {
                precioUva = precioUva + 0.30;
                alert('El total de la venta es de ' + precioUva);
            }
        }
        // Uva morada
        if (medidaUva == uva2) {
            // Uva morada pequeña
            if (tamanioUva == medida1) {
                precioUva = precioUva - 0.30;
                alert('El total de la venta es de ' + precioUva);
            }
            // Uva morada grande
            if (tamanioUva == medida2) {
                precioUva = precioUva - 0.50;
                alert('El total de la venta es de ' + precioUva);
            }
        }
    };
    Ejercicios3.prototype.Ejercicio2 = function () {
        var estudiantes;
        var total = 0;
        estudiantes = Number(prompt('Cantidad a estudiante que asistiran'));
        if (estudiantes >= 100) {
            total = estudiantes * 65;
        }
        if (estudiantes >= 50 && estudiantes < 100) {
            total = estudiantes * 70;
        }
        if (estudiantes >= 30 && estudiantes < 50) {
            total = estudiantes * 95;
        }
        if (estudiantes < 30) {
            total = estudiantes * 500;
        }
        alert('todos los estudiantes deben pagar la suma de ' + total + ' Euros' + '\nla renta del autobus es de 4000 y cada estudiante pagara ' + (4000 / estudiantes));
    };
    return Ejercicios3;
}());
var objeto = new Ejercicios3();
//objeto.ejercicio1();
objeto.Ejercicio2();
