export const persona = 
{
    lastName: "chavez",
    age: 20,
    address: {
        city: 'medellin',
        zio: 50026,
        lat: 14.999,
        lag: 'espanol',
        lng: 56.9993
    }
}; //as const;  // si se agrega lo anterior solo sera lectura la constante no podran ser editados los campos como el ejemplo de abajo

//persona.age = 21;


/*
1. En javascript todos los objetos pasan por referencias
2. Cuando se le hace una asignacion de una constante a otra como el ejemplo de abajo, pasa hacer por refencia
3. Operador spread ( ...nombre de la constante) sirve para asignar todas las propiedades a nuevos nuevo objeto que se estan creando
4. Operador spread tambien crea un nuevo objeto
5. Al hacer esto " const persona2 = {...persona}; " se crea una copia de la constante perosna 
6. El operador spread sirve para objetos que no son anidados como el lastName, pero no sirve con objetos como el address ya que es anidado


*/

// const persona2 = persona; se Muestran los mismos datos en los dos
// const persona2 = {...persona}; // si le hago un cambio a (persona2) se cambia lo de (persona) por referencia
// const persona2 = {...persona, address: {...persona.address}}; // de esta forma se puede hacer para que sirva con objetos anidados pero no es recomendable, ya que si hay mas objetos como address  se tiene que hacer lo mismo que se hizo con address y seria muy largo y desorganizado

const persona2 = structuredClone(persona); // esta es una forma mas sencilla y mejor para hacer una copia en ves del spread 

persona2.address.city = 'bogota';
persona2.address.zio = 50027;
persona2.lastName = 'pedro';

console.log({persona});
console.log({persona2});