"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentificacion_1 = require("../middlewares/autentificacion");
const imagenesYo_1 = require("../modelos/imagenesYo");
const fileSystemYo_1 = __importDefault(require("../clases/fileSystemYo"));
const yoRutas = express_1.Router();
const fileSystemyo = new fileSystemYo_1.default();
//Subir imagen
yoRutas.post('/', autentificacion_1.verificarToken, (req, res) => {
    const body = req.body;
    const file = req.files.img;
    body.img = file.name;
    console.log(file);
    imagenesYo_1.ImagenesYo.create(body).then(imgYoDB => {
        res.json({
            ok: true,
            imgYoDB
        });
        fileSystemyo.guardarImagenYo(file, req.usuario.nombre);
    }).catch(err => {
        res.json(err);
    });
});
//Mostrar imagen por URL
yoRutas.get('/andres-apa/:img', (req, res) => {
    const img = req.params.img;
    const pathImagen = fileSystemyo.getImgUrl(img);
    res.sendFile(pathImagen);
});
//Actualizar imagen
yoRutas.post('/update', autentificacion_1.verificarToken, (req, res) => {
    const file = req.files.img;
    fileSystemyo.guardarImagenYo(file, req.usuario.nombre);
    res.json({
        ok: true,
        mensaje: 'Imagen actualizada'
    });
});
exports.default = yoRutas;
