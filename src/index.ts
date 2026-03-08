class Estudiante {
    private nombre: string;
    private carnet: string;
    public notaFinal: number = 0;

    constructor(nombre: string, carnet: string) {
        this.nombre = nombre;
        this.carnet = carnet;
    }

    mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}, Carnet: ${this.carnet}, Nota Final: ${this.notaFinal}`);
    }

    actualizarNota(nuevaNota: number): void {
        if (nuevaNota > 0 && nuevaNota <= 10) {
            this.notaFinal = nuevaNota;
        } else {
            console.error("La nota debe ser un número entre 1 y 10.");
        }
    }
    
    actualizarCarnet(nuevoCarnet: string): void {
        this.carnet = nuevoCarnet;
    }
}

const alumno1 = new Estudiante("Juan Perez", "20210001");
alumno1.mostrarInformacion(); // Nombre: Juan Perez, Carnet: 20210001, Nota Final: 0    
const alumno2 = new Estudiante("Maria Lopez", "20210002");
alumno2.mostrarInformacion(); // Nombre: Maria Lopez, Carnet: 20210002, Nota Final: 0
const alumno3 = new Estudiante("Carlos Sanchez", "20210003");

alumno1.actualizarCarnet("20210010");

alumno1.actualizarNota(10);

alumno1.mostrarInformacion(); //Nombre juan perez y al final tendra la nota de 10 con un nuevo carnet
