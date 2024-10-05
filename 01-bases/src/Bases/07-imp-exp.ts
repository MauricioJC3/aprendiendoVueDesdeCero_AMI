import heroes, { type Owner, } from "../data/heroes";


// find se utiliza para traer el primer elemento que cumpla con la condiccion 
 export const getHeroById = ( id:number ) => {
    return heroes.find( hero => hero.id === id ) ?? {};

};

console.log(getHeroById(5))



//filter se utiliza para traer todo lo relcionado con la condicion
export const getHeroByOwner = (owner: Owner) => {
    return heroes.filter( h => h.owner === owner );
};


console.log( getHeroByOwner('DC') );


