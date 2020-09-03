"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const usuario_1 = __importDefault(require("./rutas/usuario"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const contacto_1 = __importDefault(require("./rutas/contacto"));
const imagenesYo_1 = __importDefault(require("./rutas/imagenesYo"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const sobremi_1 = __importDefault(require("./rutas/sobremi"));
const tecnologias_1 = __importDefault(require("./rutas/tecnologias"));
const noticias_1 = __importDefault(require("./rutas/noticias"));
const server = new server_1.default();
//Body Parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
//Fileupload
server.app.use(express_fileupload_1.default());
//Rutas
server.app.use('/usuario', usuario_1.default);
server.app.use('/contacto', contacto_1.default);
server.app.use('/uploadYo', imagenesYo_1.default);
server.app.use('/sobreMi', sobremi_1.default);
server.app.use('/tecnologia', tecnologias_1.default);
server.app.use('/noticias', noticias_1.default);
//Conectar DB
let mongoDB;
if (process.env.NODE_ENV === 'production') {
    mongoDB = 'mongodb+srv://andres-apa:123@clusterapa.helky.mongodb.net/AndresDataBase';
}
else {
    mongoDB = 'mongodb://localhost:27017/AndresDataBase';
}
mongoose_1.default.connect(mongoDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err)
        throw "err";
    console.log('Base de datos ONLINE');
});
server.start(() => {
    console.log(`Servidor Andres corriendo en el puerto ${server.port}`);
});
