// 1. Crear una clase Empleado con los atributos nombre, salarioBase y 
// horasTrabajadas. Implementar un método que calcule el salario total 
// considerando que cada hora trabajada se paga a una tarifa fija.

class Empleado {
    nombre: string;
    salarioBase: number;
    horasTrabajadas: number;

    constructor(nombre: string, salarioBase: number, horasTrabajadas: number) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
        this.horasTrabajadas = horasTrabajadas;
    }

    calcularSalarioTotal(): void {
        const tarifaHora = 15; // Tarifa fija por hora
        const salarioTotal = this.salarioBase + (this.horasTrabajadas * tarifaHora);
        console.log(`El salario total de ${this.nombre} es: $${salarioTotal}`);
    }

    mostrarInformacion(): void {
        console.log(`Empleado: ${this.nombre}, Salario Base: $${this.salarioBase}, Horas Trabajadas: ${this.horasTrabajadas}`);
    }


}

const empleado1 = new Empleado("Juan", 2000, 40);
empleado1.calcularSalarioTotal();
empleado1.mostrarInformacion();