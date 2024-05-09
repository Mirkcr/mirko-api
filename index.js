const express = require('express');
const cors = require('cors');



const path = require('path'); // Import path module
const app = express();
const port = 47777;


// Allow all cross-origin requests
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());


// Nuestra aplicación esta lista para recibir peticiones
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'index.html'));
    });
    try{
        // algo
        } catch(e){
        res.status(500).send({'error': 'Internal server error'})
        }

    // Creamos dos arreglos en donde almacenaremos los mails y los u
const usuarios = Array()
const mails = Array()
app.post('/', (req, res) => {

    // Guardamos el usuario y el email que venian en el Json
    const {usuario, email} = req.body;
    // Guardamos el usuario en el arreglo de usuarios.
    usuarios.push(usuario)
    mails.push(email)
    // Imprimimos los arrays para ver si se estan agregando
    console.log(usuarios)

    console.log(mails)

    // Devolvemos un codigo de respuesta 201 indicando que e
    // junto con el usuario y el mail que fueron recibidos.
    res.status(201).send({usuario,email})

});