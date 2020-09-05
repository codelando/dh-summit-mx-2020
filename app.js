// Requerimos Express
const express = require('express');
// Ejecutamos express
const app = express();

// Habilitamos archivos estáticos
app.use(express.static('public'));

// Habilitamos el motor de plantillas (template engine)
app.set('view engine', 'ejs');

// Creamos la ruta para la página principal
app.get('/', function (req, res) {
    res.render('index', { title: 'Mi primer página con Node' } );
})

// Creamos la ruta para la página de trabajos
app.get('/mis-trabajos', function (req, res) {
    res.render('works');
})

// Creamos la ruta para la página de habilidades
app.get('/mis-habilidades', function (req, res) {
    res.render('skills');
})

// Creamos la ruta para la página de contacto
app.get('/en-contacto', function (req, res) {
    res.render('contact');
})

// Iniciamos el servidor en el puerto 3000
app.listen(3000);