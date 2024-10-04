

const firstName =  'Mauricio';
const lastNmae = 'Jimenez';

console.log(`${firstName} ${lastNmae}`);

/*
///////////////////////////////
    PRACTICA #2
///////////////////////////////
*/

const persona = 
{
    name: 'Mauricio',
    age: 22,
    address: {
        city: 'Medellin',
        zio: 50026,
        lat: 14.999,
        lag: 'espanol',
        lng: 56.999,
    }
}

//const persona2 = {...persona}; // no poner amenos que sea objeto no anidado

const persona2 = structuredClone(persona); // objetos diferentes ya que se clona la estructura pero si se le hace un cambio de refencia se le aplica al el otro objeto

persona2.address.city = 'bucaramanga';

console.log({persona, persona2});



/*
///////////////////////////////
    PRACTICA #3
///////////////////////////////
*/



const array = [1,2,3,4,5,6,7,8,9,10];

const array2 = [...array];

array2.push(12,13,14);

console.log({array, array2});



/*
///////////////////////////////
    PRACTICA #4
///////////////////////////////
*/

/*

function claroQueSi(mensaje:string)
{
    return mensaje; // otra forma  => `si abueno,  ${mensaje}`;
}
*/

/*
const claroQuesi = (mensaja:string) => 
{
    return mensaja;
}
*/

/*
const claroQuesi = (mensaje:string) => mensaje; // forma conrta cuando es un solo return
*/

/*

//forma 1

const claroQuesi = () => 
{
    return {
        name: 'bon esponja',
        vive: 'piña de bajo del mar',
    }
}

//forma 2
const claroQuesi3 = () => 
    ({
            name: 'risa risa',
            vive: 'pujajaja',     
    });
*/

//const claroQuesi2 = structuredClone(claroQuesi());

//claroQuesi2.name = 'patricio estrella';
//claroQuesi2.vive = 'casa piedra';

//console.log(claroQuesi(), claroQuesi2); // llamo a una funcion y a un nuevo objeto que se asignaron diferentes valores
//console.log(claroQuesi3());

//console.log(claroQuesi('calamardo el peludo'));




