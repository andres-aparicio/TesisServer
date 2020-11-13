import Server from './clases/server';
import usuarioRutas from './routes/usuario';
import cors from 'cors';
import bodyParser from 'body-parser';
import ContactoRutas from './routes/contacto';
import yoRutas from './routes/imagenesYo';
import fileupload from 'express-fileupload';
import sobreMiRutas from './routes/sobremi';
import tecnologiasRutas from './routes/tecnologias';
//import noticiasRutas from './rutas/noticias';
import express from 'express';
import path from 'path';

const server = new Server();


//Body Parser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

//CORS
server.app.use(cors({origin:true, credentials:true}));

//Fileupload
server.app.use(fileupload());

//Rutas
server.app.use(express.static(path.join((__dirname + '/public'))));
server.app.use('/usuario', usuarioRutas);
server.app.use('/contacto', ContactoRutas);
server.app.use('/uploadYo', yoRutas);
server.app.use('/sobreMi', sobreMiRutas);
server.app.use('/tecnologia', tecnologiasRutas);
//server.app.use('/noticias', noticiasRutas);


// async function asyncFunction() {
//     let conn;
//     try{
//         conn = await pool.getConnection();
//         const rows = await conn.query("SELECT * FROM departamento");
//         console.log(rows);
//     }catch(err){
//         throw err;
//     }finally{
//         if(conn) return conn.end();
//     }
// }
// asyncFunction()

//module.exports pool