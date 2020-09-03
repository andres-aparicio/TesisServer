import Server from './clases/server';
import usuarioRutas from './rutas/usuario';
import mongoose, { mongo } from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import ContactoRutas from './rutas/contacto';
import yoRutas from './rutas/imagenesYo';
import fileupload from 'express-fileupload';
import sobreMiRutas from './rutas/sobremi';
import tecnologiasRutas from './rutas/tecnologias';
import noticiasRutas from './rutas/noticias';


const server = new Server();

//Body Parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin:true, credentials:true}));

//Fileupload
server.app.use(fileupload());

//Rutas
server.app.use('/usuario', usuarioRutas);
server.app.use('/contacto', ContactoRutas);
server.app.use('/uploadYo', yoRutas);
server.app.use('/sobreMi', sobreMiRutas);
server.app.use('/tecnologia', tecnologiasRutas);
server.app.use('/noticias', noticiasRutas);
//Conectar DB
let mongoDB: string;
if(process.env.NODE_ENV === 'production'){
    mongoDB = 'mongodb+srv://andres-apa:123@clusterapa.helky.mongodb.net/AndresDataBase';
}
else{
    mongoDB = 'mongodb://localhost:27017/AndresDataBase';
}
mongoose.connect(
    mongoDB,
    {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true, useFindAndModify:false},
    (err) => {
        if(err) throw "err";
        console.log('Base de datos ONLINE');
    }
)

server.start(()=>{
    console.log(`Servidor Andres corriendo en el puerto ${server.port}`);
})