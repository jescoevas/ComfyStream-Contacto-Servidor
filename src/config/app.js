const express = require('express')
const cors = require('cors')

const { puerto } = require('./env')

const app = express()

//Configuracion
app.set('port', puerto)
app.use(express.json());

//Middlewares
app.use(cors({ origin: '*' }));

//Rutas
app.use('/comfystream/api', require('../routes/routes.routes'))

//Inicio
function iniciarServidor() {
    app.listen(app.get('port'), () => console.log(`Servidor activo en puerto ${app.get('port')}`))
}

module.exports = {
    iniciarServidor
}