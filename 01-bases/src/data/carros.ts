export interface Carros  { 
    idarro:number;
    Nombre:string;
    marca:Marca;
    modelo:Modelo;
}

export type Marca =  'Mazda' | 'BMW' | 'Ford' | 'Toyota' | 'Maclaren';
export type Modelo = 2023 | 2024 | 2010 | 2015 | 2022 | 2020;



const carros: Carros[] = [
    {
        idarro: 1,
        Nombre: 'urus',
        marca: 'Toyota',
        modelo: 2023,
    },
    {
        idarro: 2,
        Nombre: 'morte',
        marca: 'Toyota',
        modelo: 2023
    },
    {
        idarro: 3,
        Nombre: 'calamaro',
        marca: 'Toyota',
        modelo: 2010
    },
    {
        idarro: 4,
        Nombre: 'charlot',
        marca: 'BMW',
        modelo: 2022
    },
    {
        idarro: 5,
        Nombre: 'mazda xr7',
        marca: 'Mazda',
        modelo: 2020
    },
    {
        idarro: 6,
        Nombre: 'carlio',
        marca: 'Mazda',
        modelo: 2024
    },
    {
        idarro: 7,
        Nombre: 'born',
        marca: 'Ford',
        modelo: 2015
    },
    {
        idarro: 8,
        Nombre: 'siata',
        marca: 'BMW',
        modelo: 2015
    },

    {
        idarro: 9,
        Nombre: 'cartao',
        marca: 'Maclaren',
        modelo: 2010
    },
]

export const modelo = [2023, 2024 , 2010 , 2015 , 2022, 2020];
export const marca = ['Mazda','BMW','Ford','Toyota','Maclaren']

export default carros;