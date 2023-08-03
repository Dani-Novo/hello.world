# CREAR UNA BASE DE DATOS DESDE NODEJS

Antes de empezar este ejercicio debemos preparar nuestro entorno de trabajo aquí en Coding Rooms, para ello vamos a usar la consola que hay debajo del editor de la derecha.

Lo primero será instalar NodeJS y npm. Como estamos usando Linux vamos a usar el comando:

    "sudo apt install nodejs npm -y"

Espera a que acabe antes de continuar.

Después necesitaremos instalar los módulos de npm necesarios para que nuestro programa de node funcione, en este caso solo necesitamos uno que ya conocemos: mysql2. El paquete ya está guardado como dependencia en nuestro "package.json" por lo que ya sabes el comando que tenemos que usar para instalarlo 🤷‍♀️.

Ahora ya tenemos todo preparado para hacer el ejercicio, que es este:

Se proporciona un archivo db.js que exporta una función asíncrona que devuelve un objeto de conexión a la base de datos que tiene un método "query()"que nos permite ejecutar código SQL, ya conocéis como funciona esto porque lo vimos en clase esta semana.

Con todo esto, edita el fichero "index.js", para:

- Crear una base de datos que se llame web (solo créala si no existe previamente)

- Crear dentro de la base de datos web las siguientes tablascon sus campos y tipos correspondientes usando SQL:

  - users

    - id (number)

    - email (text)

    - name (text)

    - registration_date (datetime)

    - active (boolean)

  - photos

    - id (number)

    - user_id (number)

    - photo_file_name (text)

    - creation_date (datetime)

  - likes

    - id (number)

    - user_id (number)

    - photo_id (number)

    - creation_date (datetime)

- Establecer las relaciones entre las tablas que consideres necesarias usando SQL.

- Antes de crear estas tablas el programa de node debe borrar cualquier otra tabla con el mismo nombre pre-existente en la base de datos.
