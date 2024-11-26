# ProyectoServidor
Proyecto de la primera evaluacion de Desarrollo Web en Entorno cliente
Esta es la estructura del proyecto:
|   package.json
|   README.md
|   
\---src
    |   index.html
    |   main.js
    |   
    +---assets
    |       empresas.json
    |       videojuegos.json
    |       
    +---css
    |       main.css
    |       
    +---empresa
    |       crearEmpresa.html
    |       editarEmpresa.html
    |       empresa.css
    |       Empresa.js
    |       empresaController.js
    |       listaEmpresas.html
    |       
    \---videojuego
            crearVideojuego.html
            editarVideojuego.html
            listaVideojuegos.html
            videojuego.css
            Videojuego.js
            videojuegoController.js
            
# Estructura del Proyecto
Este proyecto está diseñado para gestionar empresas y videojuegos a través de funcionalidades CRUD (Crear, Leer, Actualizar, Eliminar). A continuación, se detalla la estructura de archivos y carpetas:

# Raíz del proyecto (ProyectoServidor\)
package.json: Archivo que contiene las dependencias y scripts necesarios para el proyecto.
README.md: Documentación del proyecto.

# Carpeta principal del proyecto (src/)
Contiene los archivos y carpetas principales de la aplicación.

index.html: Página de inicio que enlaza con las funcionalidades principales (gestión de empresas y videojuegos).
main.js: Archivo JavaScript principal, donde se define la lógica global de la aplicación.

# Subcarpetas en src/

assets/: Recursos del proyecto
empresas.json: Archivo JSON para almacenar datos de empresas.
videojuegos.json: Archivo JSON para almacenar datos de videojuegos.

css/: Estilos globales
main.css: Archivo CSS para estilos globales aplicados a toda la aplicación.

empresa/: Funcionalidades relacionadas con empresas
Empresa.js: Clase que define las propiedades y métodos de una empresa.
empresaController.js: Controlador encargado de gestionar las operaciones CRUD para empresas.
listaEmpresas.html: Página HTML para mostrar la lista de empresas registradas.
crearEmpresa.html: Página HTML para crear una nueva empresa.
editarEmpresa.html: Página HTML para editar una empresa existente.
empresa.css: Archivo CSS con estilos específicos para las páginas relacionadas con empresas.

videojuego/: Funcionalidades relacionadas con videojuegos
Videojuego.js: Clase que define las propiedades y métodos de un videojuego.
videojuegoController.js: Controlador encargado de gestionar las operaciones CRUD para videojuegos.
listaVideojuegos.html: Página HTML para mostrar la lista de videojuegos registrados.
crearVideojuego.html: Página HTML para crear un nuevo videojuego.
editarVideojuego.html: Página HTML para editar un videojuego existente.
videojuego.css: Archivo CSS con estilos específicos para las páginas relacionadas con videojuegos.

# Cómo navegar por el proyecto
Inicio: Abre src/index.html para acceder a la página principal del proyecto.
Empresas:
Usa las páginas dentro de src/empresa/ para gestionar empresas.
Los datos se almacenan en src/assets/empresas.json.
Videojuegos:
Usa las páginas dentro de src/videojuego/ para gestionar videojuegos.
Los datos se almacenan en src/assets/videojuegos.json.