import path from 'path';
import fs from 'fs';

export default class FileSystemYo {

    constructor() { }

    guardarImagenYo(file: any, nombre: string) {
        return new Promise((resolve, rejeact) => {
            //crear carpeta
            const path = this.crearCarpetaYo(nombre);

            //Nombre del archivo
            const nombreArchivo = file.name;

            //Mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err: any) => {
                if (err) {
                    rejeact();
                } else {
                    resolve();
                }
            });
        });
    }

    private crearCarpetaYo(nombre: string) {
        const pathYo = path.resolve(__dirname, '../uploads', nombre);
        const existe = fs.existsSync(pathYo);

        if (!existe) {
            fs.mkdirSync(pathYo);
        }
        return pathYo;
    }

    getImgUrl (img:string){
        const pathImagen = path.resolve(__dirname,'../uploads','andres-apa', img);
        return pathImagen;
    }
}