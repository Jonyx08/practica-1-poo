class Producto {
    nombre: string;
    precio: number;
    cantidad: number;

    constructor(nombre: string, precio: number, cantidad: number){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotal(): void {
        if (this.precio <= 0 || this.cantidad <= 0) {
            console.error('precio o cantidad no valido, porfavor ingresa un numero valido');
            return;
        }
        const preciototal = this.precio * this.cantidad;
        console.log(`El precio total del producto ${this.nombre} es: $${preciototal}`);
    }

    mostrarDetalle(): void {
         if (this.precio <= 0 || this.cantidad <= 0) {
            console.error('precio o cantidad no valido, porfavor ingresa un numero valido');
            return;
        }
        console.log(`El producto: ${this.nombre}, con una cantidad de ${this.cantidad} unidades, tiene el precio total de: $${this.precio * this.cantidad}`);
    }
}

const producto1 = new Producto("Laptop", 1000, 2);
producto1.calcularTotal();
producto1.mostrarDetalle();