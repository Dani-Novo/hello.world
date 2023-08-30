# COMPONENTES, PROPS Y CHILDREN

En el ejercicio que tienes a tu derecha ya hay creada una aplicación de React usando CRA, está en el directorio app, usa el visor del arbol de archivos en los iconos de la izquierda para ver los ficheros.

En el directorio "app/src" puedes ver que hay un fichero llamado "users.json" que contiene información de 5 personas ficticias.

En este ejercicio tienes que hacer que la aplicación de React muestre un listado de fichas de cada persona con su información extraída de ese fichero "users.json".

La estructura de componentes que tienes que crear debe ser esta (el nombre de cada componente te da indicaciones sobre su contenido):

    - UserList

        - User

            - UserPicture

            - UserName

            - UserLocation

Como extra en la ficha de cada una de las personas tienes que poner un indicador visual (sorpréndenos) que indique si esa persona es menor de edad. Tienes la fecha de nacimiendo en la propiedad "dob" en el objeto de cada persona del JSON .
