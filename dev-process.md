# Proceso de desarrollo

1. Inicialización de Git y npm dentro del directorio del proyecto

    Incluyo Git desde el principio para registrar el progreso, y npm para agregar Express.

2. Instalación y configuración de Express en app.js, dentro de src

    Express para hacer una API web simple, y la carpeta src para contener el código fuente de la aplicación.

3. Instalación y configuración de Sequelize y SQLite en db-config.js, dentro de config

    Empiezo con la base de datos para tener un recurso sobre el que trabajar.

4. Creación de .gitignore

    Además de node_modules, se agrega database.sqlite para excluir de Git. 

5. Definición del modelo library en library.js y creación de index.js, dentro de models

    Para crear la primera entidad, empiezo por su modelo.

6. Creación de endpoints GET y POST para /library e inclusión de express.json, en app.js

    Para darle lo antes posible una función a la aplicación. Crear y leer resulta lo más fundamental.

7. Desactivación de logging de Sequelize, en db-config.js

    Para reducir el ruido en consola.

8. Reconfiguración de sincronización de modelos de Sequelize a "alterar", en db-config.js

    Para evitar que se eliminen los datos al alterar la tabla.

9. Refactorización de endpoints, de app.js a library.js, en routes, controllers, services y providers. Cada uno con su index.js

    Antes de agregar más acciones, estructuro para mantener entendible el código.

10. Creación de endpoints GET, PUT y DELETE para /library/:id, en library.js, dentro de routes, controllers, services y providers

    Completo el CRUD de library.

11. Creación e implementación de un "ámbito" de Sequelize en library.js, dentro de models y providers

    Para excluir de las consultas los atributos solo necesarios para el funcionamiento interno de Sequelize.

12. Creación de la entidad book, con los mismos componentes que library, en book.js, dentro de routes, controllers, services, providers y models

    Una vez completa library, puedo usarla de base para book.

13. Traslado de opciones de modelo coincidentes en library.js y book.js, dentro de models, a la configuración inicial de Sequelize, en db-config.js

    Las opciones de borrado lógico y de ámbito son las mismas para los dos modelos, así que las defino en un solo lugar, para todo modelo.

14. Definición de asociación one-to-many entre library y book, en index.js, dentro de models

    Una vez completas las dos entidades, defino su relación.

15. Creación de endpoint POST para /library/:id/book, en library.js, dentro de routes, controllers, services y providers

    Agrego una acción que haga uso de la relación.

16. Creación de mensaje de error de sincronización, en db-config.js

    Empieza a fallar la sincronización, le agrego un log específico para facilitar la depuración.

17. Implementación de Eager Loading en endpoints GET de library, en library.js, dentro de providers

    Una vez posible la relación de recursos, cambio la forma de cargarlos.

18. Definición del modelo user en user.js, dentro de models

    Para empezar con la capa de autenticación, empiezo por el modelo de user, sobre el que trabajar.

19. Instalación y configuración de Umzug en seed.js, dentro de src

    Para "sembrar" después de inicializada la base de datos.

20. Creación de seeder del usuario administrador en admin-user.js, dentro de seeders

    Para que el sistema inicie con un usuario administrador.

21. Creación de endpoint POST para /user/login, en user.js, dentro de routes, controllers, services y providers

    Ya teniendo un usuario, le agrego una forma básica de autenticarse.

22. Instalación de jsonwebtoken y creación de generador de tokens en jwt.js, dentro de utils

    Agrego una forma más segura de autenticación. Empiezo por la creación del token a ser entregado.

23. Incorporación del generador de tokens al endpoint POST /user/login, en user.js, dentro de controllers y services
    
    Reemplazo la autenticación básica de la acción por la nueva, que entrega el token.

24. Instalación y configuración de Passport y passport-jwt en auth.js, dentro de middleware

    Agrego la forma de verificar la autenticidad del usuario, por medio de su token.

25. Adición del middleware de autenticación a la aplicación, en app.js, dentro de src

    Una vez completa, agrego la capa de autenticación a la aplicación.