const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');

//middlewares
app.use( express.static('public'));

app.get( '/', (req,res) => {
    res.render('home', {
        nombre: 'Jonathan',
        titulo: 'Curso de node'
    });
});

app.get( '/generic', (req,res) => {
    res.render('generic', {
        nombre: 'Jonathan',
        titulo: 'Curso de node'
    });
});

app.get( '/elements', (req,res) => {
    res.render('elements', {
        nombre: 'Jonathan',
        titulo: 'Curso de node'
    });
});

app.get('*', (req,res) =>{
    res.render('404', {
        nombre: 'Jonathan',
        titulo: 'Curso de node'
    });
});
 
app.listen( port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});