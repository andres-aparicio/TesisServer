import { Router, Response } from 'express';
import { Sobremi } from '../modelos/sobremi';
import { verificarToken } from '../middlewares/autentificacion';


const sobreMiRutas= Router();

//Crear sobreMi

sobreMiRutas.post('/', verificarToken, (req: any, res: Response) => {
    const body = req.body;
    body.titulo = 'Andrés Aparicio';

    Sobremi.create(body).then(sobreMiDB =>{
        res.json({
            ok: true,
            SobreMi: sobreMiDB
        });
    }).catch(err =>{
        res.json(err)
    });
});

//Actualizar sobre mi
sobreMiRutas.post('/update/:id', verificarToken, (req: any, res: Response) => {
    const id = req.params.id;
    const SobreMi = {
        texto1: req.body.texto1,
        texto2: req.body.texto2,
        texto3: req.body.texto3,
        texto4: req.body.texto4,
        texto5: req.body.texto5,
    };

    Sobremi.findByIdAndUpdate(id, SobreMi, {new : true},(err, sobreMiDB) =>{
        if (err) throw err;
        if (!sobreMiDB){
            return res.json({
                ok: false,
                mensaje: 'Datos invalidos'
            });
        }
        res.json({
            ok:true,
            SobreMi
        });
    });
});

//Obtener SobreMi
sobreMiRutas.get('/', async (req: any, res: Response) => {
    const sobreMi = await Sobremi.find()
        .sort({_id: -1})
        .exec();
    res.json({
        ok: true,
        sobreMi
    });
});

export default sobreMiRutas;