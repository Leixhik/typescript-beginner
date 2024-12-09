class Pelicula{
    nombre?: string;
    protagonistas?: string[];
    actores?: string[];

    proyectarEnCine(){
        console.log(`La película ${this.nombre} está siendo proyectada`)
    }

    constructor(nombre: string, protagonistas: string[], actores: string[]){
        this.nombre = nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Act 1', 'Act 2'])
const pelicula2 = new Pelicula('Oppenheimer', ['Si'], ['No'])

console.log(pelicula)
console.log(pelicula2)