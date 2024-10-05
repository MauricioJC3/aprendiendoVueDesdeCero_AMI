import axios from "axios";


const conexionApiLaravel = axios.create({
    baseURL: 'http://localhost:8000/api',

});

conexionApiLaravel.get('/providers').then((Response) => console.log(Response.data))

