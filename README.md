# Introducción a Node y al desarrollo web — Digital Summit Mx Home Sessions

## Para correr el proyecto

### 1. Descargar o clonar el repositorio.

**Opcion 1: Clonando desde Github**

Requieren tener [instalado GIT](https://git-scm.com/downloads).

`git clone https://github.com/codelando/dh-summit-mx-2020` 

**Opcion 2: Descargar en formato comprimido**

https://github.com/codelando/dh-summit-mx-2020/archive/master.zip

Descomprimir el archivo en la ubicación que prefiera.

### 2. Navegar a la carpeta donde haya quedado el proyecto.

`cd dh-summit-mx-2020`

### 3. Instalar los paquetes de Node

`npm install`

### 4. Iniciar el proyecto

`npm run startdev`

### 5. Abrir el navegador en la dirección del proyecto

http://localhost:3000/

## Para hacerlo ustedes

1. Instalar Node

2. Crear una carpeta

3. En la consola, iniciar el proyecto con NPM

`npm init -y`

4. Instalar express

`npm install express`

5. Crear archivo **app.js** con el siguiente código para iniciar express

```
const express = require('express');
const app = express();

app.listen(3000);
```

6. Crear la primera ruta que escuche en '/'

```
app.get('/', function (req, res) {
    return res.send('Página principal');
});
```

7. Habilitar un motor de templates

En la consola

`npm install ejs`

En **app.js**

`app.set('view engine', 'ejs');`

8. Crear la carpeta **views** y la primera página **index.ejs**

9. Habilitar los archivos estáticos (imágenes, css, etc)

En **app.js**

`app.use(express.static('public'));`

Luego crear la carpeta **public** y dentro de ella las carpetas para **css** y **img** (imágenes)

10. Repetir el proceso de creación rutas y páginas para todas las páginas que quieran agregar.
