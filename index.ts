import Server from './clases/server';
import usuarioRutas from './rutas/usuario';
import cors from 'cors';
import bodyParser from 'body-parser';
import ContactoRutas from './rutas/contacto';
import yoRutas from './rutas/imagenesYo';
import fileupload from 'express-fileupload';
import sobreMiRutas from './rutas/sobremi';
import tecnologiasRutas from './rutas/tecnologias';
import noticiasRutas from './rutas/noticias';
import express from 'express';
import path from 'path';

const server = new Server();
const mariadb = require('mariadb');

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
server.app.use('/noticias', noticiasRutas);

const pool = mariadb.createPool({
    host: 'localhost', 
    port: '3307',
    user:'root', 
    password: '1234',
    database: 'db_conciliacion',
    connectionLimit: 5
});
async function asyncFunction() {
    let conn;
    try{
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM departamento");
        console.log(rows);
    }catch(err){
        throw err;
    }finally{
        if(conn) return conn.end();
    }
}
asyncFunction();