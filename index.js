const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
//settings
app.set('appName', 'mi primer server');
app.set('views', __dirname + '/views');
app.set('views engine', 'ejs');

const pkg = require('./package.json')

// express.json() parsea los datos provenientes del request.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//middlewares
app.use(morgan('dev'));

//rutas
require('./routes')(app);

app.listen(port, () => {
    console.log(`[${pkg.name}] Servidor Iniciado [Puerto: ${port}]`);
    //console.log('nombre de la app ', app.get('appName'));
});

