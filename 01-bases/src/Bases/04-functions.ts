/*

function buenaPersona( nombre:string ) 
{
    return `Hola ${ nombre}`;
}

    console.log(buenaPersona('mauricio esteban'));

*/



/*
//Funcion de flecha 
const buenaPersona = ( nombre:string ) => {
    return `Hola ${ nombre}`;
};

console.log(buenaPersona('mauricio esteban'));
*/



/*
// Forma corta de una funcion de flecha cuando solo hay un return 
const buenaPersona = ( nombre:string ) => `Hola ${ nombre}`;

console.log(buenaPersona('mauricio esteban'));
*/



/*
// forma 1

const buenUsuario = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
};

*/



// solo retorna un objetop se puede aplicar la misma logica que la funcion de flecha corta
// se le agregan parantesis para que no se genere error, y descir que todo el objeto es el valor de retorno
// cuando tenga parentesis en una fucnion de flecha significa que es un retorno implicito de un objeto como el ejemplo de abajo ( ({ estas son }) )
const buenUsuario = ( uid:string, username:string ) => 
({
    uid: uid,
    username: username
});

console.log(buenUsuario('xyz-990', 'marcosos87'));



const heroes = [
    {
        id: 1,
        nombre: 'cr7',
        power: 'mentality',
    },
    {
        id: 2,
        nombre: 'messi',
        mundial: 1,
    },

];

const hero = heroes.find( (hero) => hero.id === 1 );
console.log(hero?.power?.toUpperCase()); // null check,tiene que tener el simbolo de ( ? ) se va a segurar que el codigo no estalle
                            // lo que hace es decir, si eso no es nulo toma el valor que te piden como ejemplo el nombre, id u otro
                            // ahora con el power, si es nulo que no hace nada, pero si no es nulo que haga el UpperCase
