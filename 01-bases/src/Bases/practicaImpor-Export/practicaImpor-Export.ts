import carros, { type Marca, type Modelo } from "../../data/carros";




export const getCarrosById = (idarro: number) => 
{
    return carros.find(carro => carro.idarro === idarro);
}


//console.log(getCarrosById(2))



export const getCarrosByMarca = (marca: Marca) => 
{
    return carros.filter(carro => carro.marca === marca);
}


export const getCarrosByModelo = (modelo: Modelo) => 
{
    return carros.filter(carro => carro.modelo === modelo);
}

//console.log(getCarrosByMarca('BMW'));

//console.log(getCarrosByModelo(2015));