import { Router, Response } from 'express';
import { Contacto } from '../modelos/contacto';


const ContactoRutas= Router();

//Crear mensajes

ContactoRutas.post('/', (req: any, res: Response) => {
    const body = req.body;

    Contacto.create(body).then(contactoDB =>{
        res.json({
            ok: true,
            contacto: contactoDB
        });
    }).catch(err =>{
        res.json(err)
    });
});

//Borrar Mensajes

ContactoRutas.delete('/:id', (req: any, res: Response) => {
    const id= req.params.id;

    Contacto.findByIdAndRemove(id, (err, contactoBorrar) => {
        if(err) throw err;
        res.json({
            ok:true,
            mensaje: 'Mensaje Eliminado Satisfactoriamente',
            body: contactoBorrar
        })
    });
});

//Obtener Mensaje
ContactoRutas.get('/', async (req: any, res: Response) => {
    const contacto = await Contacto.find()
        .sort({_id: -1})
        .limit(50)
        .exec();
    res.json({
        ok: true,
        contacto
    });
});

export default ContactoRutas;