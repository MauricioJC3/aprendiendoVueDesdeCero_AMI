

export const numeroArray = [1,2,3,4,5]; //as const;  // cual quiera de las formas sirve ya que no es anidado
//numeroArray.push(6);

//Forma 1
//const numeroArray2 = numeroArray; // mismos datos en los dos 

/* de esta forma acepto tanto numeros y string en el para que no me genere errores

const numeroArray2: (number|string)[] = [...numeroArray];
*/
//numeroArray2.push(6,3,'4');


const numeroArray2 = [...numeroArray]; 
numeroArray2.push(6,3);

/*Forma 2
const numeroArray2 = structuredClone(numeroArray);
numeroArray2.push(6,3);
*/


console.log({numeroArray, numeroArray2});