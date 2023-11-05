# Prueba técnica de Geotec

Esta aplicación realizada en React lista los usuarios de la API oficial de GitHub, así también sus datos de usuario y sus repositorios.

## Funcionalidades

<ul>
   <li>Listar los datos de usuarios de GitHub en la página principal</li>
   <li>Posibilidad de cambiar de página (32 usuarios por página)</li>
   <li>Enlace para visitar el perfil de GitHub de cada usuario</li>
   <li>Botón para ver la lista de repositorios de cada usuario</li>
   <li>Listar datos de cualquier usuario junto con sus repositorios</li>
   <li>Paginación de repositorios (8 por página)</li>
   <li>Enlace para visitar cada uno de los repositorios</li>
   <li>Cache de los datos con duración de 2 horas</li>
</ul>

## Levantar el proyecto

Clonar el repositorio, crear un archivo .env con los siguientes datos:

```env
VITE_GITHUB_TOKEN = "" //token para la API de GitHub
```

Realizar los siguientes comandos para instalar las dependencias y levantar el servidor:

```console
npm install
npm run dev
```

Comando para correr los test

```console
npm run test
```

## 
