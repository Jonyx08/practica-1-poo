// 1. Crear una clase Empleado con los atributos nombre, salarioBase y 
// horasTrabajadas. Implementar un método que calcule el salario total 
// considerando que cada hora trabajada se paga a una tarifa fija.
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salarioBase, horasTrabajadas) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas;
    }
    Empleado.prototype.calcularSalarioTotal = function () {
        var tarifaHora = 15; // Tarifa fija por hora
        var salarioTotal = this.salarioBase + (this.horasTrabajadas * tarifaHora);
        console.log("El salario total de ".concat(this.nombre, " es: $").concat(salarioTotal));
    };
    Empleado.prototype.mostrarInformacion = function () {
        console.log("Empleado: ".concat(this.nombre, ", Salario Base: $").concat(this.salarioBase, ", Horas Trabajadas: ").concat(this.horasTrabajadas));
    };
    return Empleado;
}());
var empleado1 = new Empleado("Juan", 2000, 40);
empleado1.calcularSalarioTotal();
empleado1.mostrarInformacion();
