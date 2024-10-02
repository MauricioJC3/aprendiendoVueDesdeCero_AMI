

//const pokemones = ['charmander','squarul','bulbasor','mew',];

const retunrArray = () => {
    return ['abc', 123] as const; // se coloca el as const para especificar el tipo de cada variable y poder aplicarle cosa sin esto mostrara errores ya que esta utilizando numeros y string
};

const [ letters, numbers ] = retunrArray();

console.log(numbers * 2, letters.toUpperCase());

// se pone una ( , ) cuando no se quiere un elemento como ejemplo no quiero 
// a charmander pongo una ( , ) y sigo con el siguinyte elemento

// const [ , s] = pokemones;
//const [ , c ] = pokemones;





