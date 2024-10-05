import { gitphyApi } from './10-axios';
import type { GIFResponse } from './interface/git.response';


export const getImage = async() => {

    try {
    const response = await gitphyApi.get<GIFResponse>('/random');
        return response.data.data.images.downsized_medium.url;
          
    } catch (error) {
        throw 'Url no encontrada';
    }


}

getImage().then((url) => console.log(url)).catch((error) => console.log(error))