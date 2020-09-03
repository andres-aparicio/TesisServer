import { Router, Response } from 'express';
import { verificarToken } from '../middlewares/autentificacion';
import { Noticias } from '../modelos/noticias';
import FileSystemNoticias from '../clases/fileSystemNoticias';


const noticiasRutas= Router();
const fileSystemnoticia = new FileSystemNoticias();

//Crear noticia
noticiasRutas.post('/:img/:imgYo', verificarToken, (req: any, res: Response) => {
    const body = req.body;
    const img = req.params.img;
    const imgYo = req.params.imgYo;

    body.img = img;
    body.imgYo = imgYo;
 

    Noticias.create(body).then(noticiaDB => {
        res.json({
            ok: true,
            noticia: noticiaDB
        });
    }).catch(err => {
        res.json(err)
    });
});

//Obtener noticias paginadas
noticiasRutas.get('/', async (req: any, res: Response) => {
    
    let pagina = Number(req.query.pagina) || 1;
    let saltar = pagina - 1;
    saltar = saltar * 8;
    const noticias = await Noticias.find()
        .sort({_id: -1})
        .skip(saltar)
        .limit(8)
        .exec();

    res.json({
        ok: true,
        pagina,
        noticias
    });
});

//Subir imagenesYo
noticiasRutas.post('/upload1', verificarToken, async(req: any, res: Response) => {
    const file1 = req.files.imgYo;
    await fileSystemnoticia.guardarImgYo(file1);
    
    res.json({
        ok:true,
        file1: file1.name
    });
});

//Subir imagenesNoticia
noticiasRutas.post('/upload2', verificarToken, async(req: any, res: Response) => {
    const file2 = req.files.img;
    await fileSystemnoticia.guardarImg(file2);
    
    res.json({
        ok:true,
        file2: file2.name
    });
});

//Mostrar imagen Noticia por URL
noticiasRutas.get('/imgNoticia/:img', (req: any, res: Response) => {
    const img = req.params.img;
    const pathImagen = fileSystemnoticia.getImgNoticiaUrl(img);
    res.sendFile(pathImagen);
});

//Mostrar imagen Yo por URL
noticiasRutas.get('/imgYo/:img', (req: any, res: Response) => {
    const img = req.params.img;
    const pathImagen = fileSystemnoticia.getImgYoUrl(img);
    res.sendFile(pathImagen);
});

export default noticiasRutas;