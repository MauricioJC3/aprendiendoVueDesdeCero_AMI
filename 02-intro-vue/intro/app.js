

const { createApp, ref } = Vue;


const app = createApp ({
   /* 
    template: `
    <h1> {{message}} </h1>
    <p> {{author}} </p>
    `,
*/
    setup() {
        const message = ref('Im Batman');
        const author = ref('Bruce Wayne');

        const cambiarFrase = () =>  {
            message.value = 'I am spiderman';
            author.value = ' you friend funny'
        }

        /*
        setTimeout(() => {
            message.value = 'I am spiderman';
            author.value = ' you friend funny'
        }, 1000);
        */


        return {
            message,
            author,
            cambiarFrase,
        }
    }
});


app.mount('#myApp');
