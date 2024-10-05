import type { GIFResponse } from './interface/git.response';
const apiKey = 'xmCdHoGh7rOZNCOiiokR8D8uI86iKjBr';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
.then((Response) =>  Response.json())
.then((body: GIFResponse) => {
    console.log(body.data.images.downsized_medium.url);
})
.catch(error => console.warn(error));