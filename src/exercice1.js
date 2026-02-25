var Producto = /** @class */ (function () {
    function Producto(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    Producto.prototype.calcularTotal = function () {
        if (this.precio < 0 || this.cantidad < 0) {
            console.error('precio o cantidad no valido, porfavor ingresa un numero valido');
            return 0;
        }
        var preciototal = this.precio * this.cantidad;
        console.log("El precio total del producto ".concat(this.nombre, " es: $").concat(preciototal));
        return preciototal;
    };
    Producto.prototype.mostrarDetalle = function () {
        console.log("El producto: ".concat(this.nombre, ", con una cantidad de ").concat(this.cantidad, " unidades, tiene el precio total de: $").concat(this.precio));
    };
    return Producto;
}());
var producto1 = new Producto("Laptop", 0, 0);
producto1.calcularTotal();
producto1.mostrarDetalle();
