import { Router, Response } from 'express';
import { verificarToken } from '../middlewares/autentificacion';
import { ImagenesYo } from '../modelos/imagenesYo';
import FileSystemYo from '../clases/fileSystemYo';

const yoRutas = Router();
const fileSystemyo = new FileSystemYo();

//Subir imagen
yoRutas.post('/', verificarToken, (req: any, res: Response) => {
    const body = req.body;
    const file = req.files.img;
    body.img = file.name;
    console.log(file);

    ImagenesYo.create(body).then(imgYoDB => {
        res.json({
            ok: true,
            imgYoDB
        });
        fileSystemyo.guardarImagenYo(file, req.usuario.nombre);
    }).catch(err => {
        res.json(err)
    });
});

//Mostrar imagen por URL
yoRutas.get('/andres-apa/:img', (req: any, res: Response) => {
    const img = req.params.img;
    const pathImagen = fileSystemyo.getImgUrl(img);
    res.sendFile(pathImagen);
});

//Actualizar imagen

yoRutas.post('/update', verificarToken, (req: any, res: Response) => {
    const file = req.files.img;
    fileSystemyo.guardarImagenYo(file, req.usuario.nombre);
    res.json({
        ok: true,
        mensaje: 'Imagen actualizada'
    });
});
export default yoRutas;