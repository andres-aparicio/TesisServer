import { Router, Response } from 'express';
import { verificarToken } from '../middlewares/autentificacion';
import { Tecnologia } from '../modelos/tecnologias';


const tecnologiasRutas= Router();

// Crear tecnologia
tecnologiasRutas.post('/', verificarToken, (req: any, res: Response) => {
    const body = req.body;

    Tecnologia.create(body).then(tecnologiaDB =>{
        res.json({
            ok: true,
            Tecnologia: tecnologiaDB
        });
    }).catch(err =>{
        res.json(err)
    });
});

//Obtener tecnologia
tecnologiasRutas.get('/', async (req: any, res: Response) => {
    const tecnologia = await Tecnologia.find()
        .sort({_id: -1})
        .exec();
    res.json({
        ok: true,
        tecnologia
    });
});

//Actualizar sobre mi
tecnologiasRutas.post('/update/:id', verificarToken, (req: any, res: Response) => {
    const id = req.params.id;
    const tecnologia = {
        icono: req.body.icono,
        tecnologia: req.body.tecnologia,
        experiencia: req.body.experiencia,
    };

    Tecnologia.findByIdAndUpdate(id, tecnologia, {new : true},(err, tecnologiaDB) =>{
        if (err) throw err;
        if (!tecnologiaDB){
            return res.json({
                ok: false,
                mensaje: 'Datos invalidos'
            });
        }
        res.json({
            ok:true,
            tecnologia
        });
    });
});

export default tecnologiasRutas;

