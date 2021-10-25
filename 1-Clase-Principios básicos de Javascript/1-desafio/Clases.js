class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = [],
        this.mascotas = []
    }
    getFullName() {
        console.log(`Nombre completo de usuario: ${this.nombre} ${this.apellido}.`); //template strings
    }
    
    addMascotas(...mascota) {
        this.mascotas.push(mascota);
        console.log(this.mascotas);
    }
    
    countMascotas(...mascota) {
        mascota.forEach(e => this.mascotas.push(e))
        console.log(this.mascotas);
    }

    addBook(nombre, autor) {
        const libro = {Nombre: nombre, Autor: autor}
        this.libros.push(libro);
        console.log(this.libros);
    }
    
    getBookNames(nombres) {
        nombres.forEach(e => this.libros.push(e.nombre))
        return console.log(this.libros);
    }
    
}

const usuario = new Usuario(
    "Leandro",//nombre
    "Mena",//apellido
    MisLibros = [{ nombre: "Padre Rico, Padre Pobre", autor: "Robert Kiyosaki y Sharon Lechter" },
    { nombre: "La chica de nieve", autor: "Javier Castillo"}],//array objeto
    MisMascotas = ["perro", "gato", "tortuga"] //array string
)

// usuario.getFullName() 
// usuario.countMascotas(MisMascotas.length);
// usuario.addBook("harry potter","J. K. Rowling");
// usuario.getBookNames(MisLibros);
// usuario.addMascotas("Loro", "Pez");

































// interface Libros {
//     nombre: string,
//     autor: string
// }

// class Usuario {
//     private nombre: string;
//     private apellido: string;
//     private libros: Libros[];
//     private mascotas: string[];

//     constructor(nombre: string, apellido: string, libros: Libros[], mascotas: string[]) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.libros = libros;
//         this.mascotas = mascotas;
//     }

//     getFullName(): string {
//         return `${this.nombre} ${this.apellido}`
//     }

//     getMascotas(): number {
//         return this.mascotas.length
//     }

//     getBooks(): string[] {
//         const nombreLibros: string[] = [];
//         this.libros.forEach(libro=>nombreLibros.push(libro.nombre))
//         return nombreLibros;
//     }

//     addMascota(mascota: string): void {
//         this.mascotas.push(mascota)
//     }

//     addBook(book: Libros): void {
//         this.libros.push(book)
//     }
// }


// const usuario = new Usuario(
//     "Juan",
//     "Perez",
//     [{ nombre: "Libro 1", autor: "Autor 1" }],
//     ["gato", "pez"]
// )

// console.log(usuario.getFullName())

// usuario.addMascota('perro')
// console.log(usuario.getMascotas())

// usuario.addBook({ nombre: "Libro 2", autor: "Autor 2" })
// console.log(usuario.getBooks());
