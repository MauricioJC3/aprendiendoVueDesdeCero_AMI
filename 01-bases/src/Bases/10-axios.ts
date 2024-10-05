import axios from 'axios';
import type { GIFResponse } from './interface/git.response';

const apiKey = 'xmCdHoGh7rOZNCOiiokR8D8uI86iKjBr';

export const gitphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key: apiKey,
    }
});

/*
gitphyApi.get<GIFResponse>('/random')
    .then((response) => console.log(response.data.data.images.downsized_medium.url))
    .catch((error => console.warn(error)));
*/

//export default gitphyApi;


