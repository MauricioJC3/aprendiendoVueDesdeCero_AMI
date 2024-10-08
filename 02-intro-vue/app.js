
        
        const originalQuotes = [
            {quote: 'I am batman.', author: "Bruce Wayne"},
            {quote: 'Si a bueno.', author: "Bruce Wayne"},
            {quote: 'Alfred ben aca.', author: "Bruce Wayne"},
            {quote: 'Robin que has echo.', author: "Bruce Wayne"},
            {quote: 'Si pero vamos chicos es mujer.', author: "henri Wayne"},
        ];


const { createApp, ref, computed } = Vue;

const app = createApp ({

    setup() {


        const mostrarAuthor = ref(true);
        const quotes = ref(originalQuotes);
        const totalQuotes = computed( () => {

            return quotes.value.length;
        });
        

        const ocultarAuthor = () => {
          mostrarAuthor.value = !mostrarAuthor.value;
        };


        // se le agrega el value ya que es una funcion reactivo, si no se le agrega no funciona
        const addFrase = () => {
            quotes.value.unshift({quote:"hola maldini", author: "mancoss"});
        };

        return {
            quotes,
            mostrarAuthor,
            ocultarAuthor,
            addFrase,
            totalQuotes,
        }
    }

})


app.mount('#myApp');


