"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FileSystemNoticias {
    constructor() { }
    guardarImg(file) {
        return new Promise((resolve, rejeact) => {
            //crear carpeta
            const path = this.crearCarpetaImagenNoticia();
            //Nombre del archivo
            const nombreArchivo = file.name;
            //Mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err) => {
                if (err) {
                    rejeact();
                }
                else {
                    resolve();
                }
            });
        });
    }
    crearCarpetaImagenNoticia() {
        const pathImagenNoticia = path_1.default.resolve(__dirname, '../uploads/imgNoticia');
        const existe = fs_1.default.existsSync(pathImagenNoticia);
        if (!existe) {
            fs_1.default.mkdirSync(pathImagenNoticia);
        }
        return pathImagenNoticia;
    }
    getImgNoticiaUrl(img) {
        const pathImgNoticia = path_1.default.resolve(__dirname, '../uploads', 'imgNoticia', img);
        return pathImgNoticia;
    }
    guardarImgYo(file) {
        return new Promise((resolve, rejeact) => {
            //crear carpeta
            const path = this.crearCarpetaImagenYo();
            //Nombre del archivo
            const nombreArchivo = file.name;
            //Mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err) => {
                if (err) {
                    rejeact();
                }
                else {
                    resolve();
                }
            });
        });
    }
    crearCarpetaImagenYo() {
        const pathImagenYo = path_1.default.resolve(__dirname, '../uploads/imgYo');
        const existe = fs_1.default.existsSync(pathImagenYo);
        if (!existe) {
            fs_1.default.mkdirSync(pathImagenYo);
        }
        return pathImagenYo;
    }
    getImgYoUrl(img) {
        const pathImgYo = path_1.default.resolve(__dirname, '../uploads', 'imgYo', img);
        return pathImgYo;
    }
}
exports.default = FileSystemNoticias;
