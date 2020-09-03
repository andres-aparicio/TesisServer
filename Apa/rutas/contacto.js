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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacto_1 = require("../modelos/contacto");
const ContactoRutas = express_1.Router();
//Crear mensajes
ContactoRutas.post('/', (req, res) => {
    const body = req.body;
    contacto_1.Contacto.create(body).then(contactoDB => {
        res.json({
            ok: true,
            contacto: contactoDB
        });
    }).catch(err => {
        res.json(err);
    });
});
//Borrar Mensajes
ContactoRutas.delete('/:id', (req, res) => {
    const id = req.params.id;
    contacto_1.Contacto.findByIdAndRemove(id, (err, contactoBorrar) => {
        if (err)
            throw err;
        res.json({
            ok: true,
            mensaje: 'Mensaje Eliminado Satisfactoriamente',
            body: contactoBorrar
        });
    });
});
//Obtener Mensaje
ContactoRutas.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contacto = yield contacto_1.Contacto.find()
        .sort({ _id: -1 })
        .limit(50)
        .exec();
    res.json({
        ok: true,
        contacto
    });
}));
exports.default = ContactoRutas;
