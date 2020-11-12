"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const usuario_1 = __importDefault(require("./rutas/usuario"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const contacto_1 = __importDefault(require("./rutas/contacto"));
const imagenesYo_1 = __importDefault(require("./rutas/imagenesYo"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const sobremi_1 = __importDefault(require("./rutas/sobremi"));
const tecnologias_1 = __importDefault(require("./rutas/tecnologias"));
const noticias_1 = __importDefault(require("./rutas/noticias"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const server = new server_1.default();
const mariadb = require('mariadb');
//Body Parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
//Fileupload
server.app.use(express_fileupload_1.default());
//Rutas
server.app.use(express_1.default.static(path_1.default.join((__dirname + '/public'))));
server.app.use('/usuario', usuario_1.default);
server.app.use('/contacto', contacto_1.default);
server.app.use('/uploadYo', imagenesYo_1.default);
server.app.use('/sobreMi', sobremi_1.default);
server.app.use('/tecnologia', tecnologias_1.default);
server.app.use('/noticias', noticias_1.default);
const pool = mariadb.createPool({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '1234',
    database: 'db_conciliacion',
    connectionLimit: 5
});
function asyncFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        let conn;
        try {
            conn = yield pool.getConnection();
            const rows = yield conn.query("SELECT * FROM departamento");
            console.log(rows);
        }
        catch (err) {
            throw err;
        }
        finally {
            if (conn)
                return conn.end();
        }
    });
}
asyncFunction();
