document.addEventListener('DOMContentLoaded', function () {

    function imprimirHTML() {
        // Seleccionar el elemento donde se agregará el HTML repetido
        const contenedor = document.getElementById('contenido');

        // HTML que quieres imprimir repetidamente
        const html = `

        <div id="videos" class="h-auto w-72 m-2 mt-5 grow ">
            <div id="sup"
                class="overflow-hidden rounded h-auto ">
                <img class="h-auto rounded-lg"
                    src="./images/Youtube.jpg">
            </div>
            <div id="inf" class="h-auto flex mt-3  pb-3">
                <div id="img" class="w-2/12 ml-2">
                    <img class="h-8 w-8"
                        src="./images/perfil.png" alt
                        id="profile">
                </div>
                <div id="info" class="ml-3 flex flex-col 8/12">
                    <strong id="titulo"
                        class="font-bold text-base"></strong>
                    <span id="canal"
                        class="text-alto-600 text-sm mt-1"></span>
                    <div class="flex text-xs">
                        <span id="visualize"></span>
                        <div
                            class="h-1 w-1 rounded-full bg-alto-800"></div>
                        <span id="time"></span>
                    </div>
                </div>
                <div id="points" class="w-1/12">
                    <i
                        class="fa-solid fa-ellipsis-vertical opacity-0"></i>
                </div>
            </div>
        </div>

                        
        `;


        // Bucle para agregar el HTML al contenedor 50 veces
        for (let i = 0; i < 68; i++) {
            contenedor.innerHTML += html;
        }
    }
    // Función para cargar los datos desde el archivo JSON
    function cargarDatos() {
        // Fetch API se utiliza para obtener datos de recursos a través de la red.
        // Aquí, solicitamos el archivo JSON y devolvemos la respuesta.
        return fetch('/Clon Youtube/src/json/fake-data.json')
            .then(response => {
                // Verificamos si la solicitud fue exitosa (código de estado HTTP 200-299)
                if (!response.ok) {
                    // Si la respuesta no es exitosa, lanzamos un error
                    throw new Error('Error al cargar los datos');
                }
                // Convertimos la respuesta a JSON y la devolvemos
                return response.json();
            })
            .catch(error => {
                // Si ocurre algún error durante el proceso de carga de datos, lo manejamos aquí
                console.error('Error:', error);
            });
    }

    function asignarIdsDinamicos(selector) {
        var elementos = document.querySelectorAll(selector);
        // Iterar sobre cada elemento seleccionado
        elementos.forEach((elemento, index) => {
            // Agregar un ID dinámico con el índice aumentado en 1
            elemento.id = `${selector.substring(1)}${index + 1}`;
        });
    }

    // Llamar a la función con los selectores específicos



    // Función para mostrar los títulos en los divs correspondientes
    function mostrarTitulos() {
        cargarDatos()
            .then(data => {
                const titulos = data.videos; // Obtener los títulos del objeto JSON devuelto por cargarDatos()
                const canales = data.canales; // Obtener los nombres de los canales del objeto JSON devuelto por cargarDatos()
                const visualizaciones = data.visualizaciones; // Obtener las visualizaciones del objeto JSON devuelto por cargarDatos()
                const fechas = data.fechas; // Obtener las fechas del objeto JSON devuelto por cargarDatos()

                // Iterar sobre los títulos y los asignamos a los divs correspondientes en el HTML
                titulos.forEach((titulo, index) => {
                    // Verificamos si los elementos existen antes de asignarles contenido
                    const divTitulo = document.getElementById(`titulo${index + 1}`);
                    const divCanal = document.getElementById(`canal${index + 1}`);
                    const divVisualize = document.getElementById(`visualize${index + 1}`);
                    const divTime = document.getElementById(`time${index + 1}`);

                    divTitulo.textContent = titulo;
                    divCanal.textContent = canales[index];
                    divVisualize.textContent = visualizaciones[index];
                    divTime.textContent = fechas[index];
                });
            });
    }

    // Llamar a la función para imprimir el HTML 50 veces


    // Llamamos a la función mostrarTitulos() al cargar la página para iniciar el proceso de visualización de títulos
    imprimirHTML();
    mostrarTitulos();
    asignarIdsDinamicos('#titulo');
    asignarIdsDinamicos('#canal');
    asignarIdsDinamicos('#visualize');
    asignarIdsDinamicos('#time');
});

