import axios from "axios";
import type { APIBasica } from "../interface/api.response";


const conexionApiLaravel = axios.create({
    baseURL: 'http://localhost:8000/api',

});

conexionApiLaravel.get<APIBasica>('/providers')
.then((Response) => console.log(Response.data.data))
.catch((error) => console.log(error));

conexionApiLaravel.get<APIBasica>('/products')
.then((Response) => console.log(Response.data.data))
.catch((error) => console.log(error));



