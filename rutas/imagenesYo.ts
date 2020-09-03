import { Router, Response } from 'express';
import { verificarToken } from '../middlewares/autentificacion';
import { ImagenesYo } from '../modelos/imagenesYo';
import FileSystemYo from '../clases/fileSystemYo';
import fs from 'fs';
import path from 'path';



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

//Eliminar imagen

// yoRutas.delete('/:id/:name', verificarToken, (req: any, res: Response) => {
//     const id= req.params.id;
//     const name= req.params.name;

//     ImagenesYo.findByIdAndRemove(id, (err, imgBorrar)=>{
//         if(err) throw err;
//         res.json({
//             ok:true,
//             mensaje: 'Imagen eliminada',
//             body: imgBorrar
//         });
//         fs.unlinkSync(path.resolve(__dirname,'../uploads', 'andres-apa', name ));
//     })
// });

export default yoRutas;