import type{ Carros } from "../data/carros";
import { getCarrosById } from "./practicaImpor-Export/practicaImpor-Export"

/*
console.log('Inicio');

new Promise( (resolve, reject ) => {
    //console.log('cuerpo de la promesa');

    setTimeout(() => {
        //resolve('mi amigo cumplio');

        reject('mi amigo no cumplio');
    }, 2000);

    
})
    .then(( mensaje ) => console.log( mensaje ))
    .catch(error => console.log(error))
    .finally(() => console.log('fin de la promesa'))


console.log('Final')

*/

/*
1. si no se agrega :Promise<Carros> va a decir que la promesa es <unknown> y no dejara traer informacion
2. se pone el <Carros> para que traiga la informacion de carros se cambia segun lo que se quiere traer
3. las promesas se utilizan para trabajo asincrono o syncrono
*/


/*

// Forma 1

const getCarrosByIdAsync = (idCarro: number):Promise<Carros> => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

           const carro = getCarrosById( idCarro );

           if ( carro )
           {
            resolve(carro);
            return;
           }
            reject(`no se encontro ningun carro con el: #${idCarro}`);  

        }, 2000);
    })
}


*/

//Forma 2 con codigo mas compacto 

const getCarrosByIdAsync = (idCarro: number):Promise<Carros> => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {

           const carro = getCarrosById( idCarro );

           carro 
                ? resolve(carro) 
                : reject(`no se encontro ningun carro con el: #${idCarro}`); // ternario
          
        }, 2000);
    })
}

getCarrosByIdAsync(2)
    .then(carro => console.log('el nombre es', carro.Nombre))
    .catch( mensajeError => alert(mensajeError))

