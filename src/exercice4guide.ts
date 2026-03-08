// 4. Crear una clase Libro con los atributos titulo, autor y numeroPaginas. 
// Instanciar al menos dos objetos y mostrar la información de cada uno utilizando un método.

class Libro{
    titulo: string;
    autor: string;
    numeroDePaginas;

     constructor(titulo: string, autor: string, numeroDePaginas: number){
        this.titulo = titulo,
        this.autor = autor,
        this.numeroDePaginas = numeroDePaginas
     }

     mostrarInfo(): void{
        console.log(`Tu libro ${this.titulo}, con el autor: ${this.autor}, cuenta con un numero de ${this.numeroDePaginas} paginas`);
        
     }
}


const libro1 = new Libro('El arte que te importe un carajo', 'Mark Manson', 300)
const libro2 = new Libro('Generacion Idiota', 'Agustín Laje', 400)

libro1.mostrarInfo();
libro2.mostrarInfo();


