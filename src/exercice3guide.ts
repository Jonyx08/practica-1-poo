// 3. Crear una clase Vehiculo con los atributos marca, modelo y año. 
// Implementar un método que muestre la información completa del vehículo.


class Vehiculo {
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo: string, año: number){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarInfoVehiculo(): void {
        console.log(`El vehiculo que desea comprar es: ${this.marca}, modelo: ${this.modelo}, y año: ${this.año}`);
    }
}



const vehiculo1 = new Vehiculo('toyota corrolla', 'SE', 2006)

vehiculo1.mostrarInfoVehiculo();



