# ESTADO

En el ejercicio que tienes a tu derecha ya hay creada una aplicación de React usando CRA, está en el directorio app, usa el visor del arbol de archivos en los iconos de la izquierda para ver los ficheros.

Este ejercicio es similar al anterior pero en lugar de cargar los datos de un fichero externo JSON en este caso esos datos están guardados en el estado del componente.

En el componente principal de la aplicación ("App") crea una variable de estado usando el hook "useState" que contenga este valor inicial:

    [{
    id: 1
    task: 'Ir a la compra',
    done: false
    },
    {
    id: 2,
    task: 'Hacer ejercicios de react',
    done: true
    }]

Crea y añade a "App.js" un componente llamado "TaskList" y pásale el estado anterior como "prop".

El componente "TaskList" debe renderizar un "<ul>" y debe mostrar cada uno de los elementos del array del estado de "App" como un "<li>". Los elementos que tengan la propiedad "done" con valor "true" deben mostrar el texto tachado.
