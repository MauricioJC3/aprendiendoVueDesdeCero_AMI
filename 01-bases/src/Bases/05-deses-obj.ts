//desestructuracion
// tomar todos los valores que se quieren, es como hacer una estructura o el esqueleto de lo que tendra el proyecto
// tambien para poner limites a la desestructuracion

interface Hero {
    nombre: string;
    age: number;
    codigoNombre: string;
    power?: string;
}

export const persona: Hero = {
    nombre: 'mauricio',
    age: 22,
    codigoNombre: 'xskj-9927',
};

//const { age, nombre, power = 'no tiene poder'} = persona; //puede ser un objeto o un array
//console.log({age, nombre, power});

interface createHeroArgs {
    nombre: string;
    age: number;
    codigoNombre: string;
    power?: string;
}

const crearHeroe = ( {nombre,age,codigoNombre,power} :createHeroArgs ) => ({
    id: 12313,
    nombre: nombre,
    age: age,
    codigoNombre: codigoNombre,
    power: power ?? 'no tiene poderes' // si es nulo utiliza el valor que en este caso es no tiene poderes
});


console.log( crearHeroe(persona))
