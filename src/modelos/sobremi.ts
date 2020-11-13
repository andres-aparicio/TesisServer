import {Schema, model, Document} from 'mongoose';

const sobreMiSchema = new Schema({
    titulo:{
        type: String
    },

    texto1:{
        type: String,
    },
    texto2:{
        type: String,
    },
    texto3:{
        type: String,
    },
    texto4:{
        type: String,
    },
    texto5:{
        type: String,
    }
});

interface ISobreMi extends Document{
    titulo: string;
    texto2: string;
    texto3: string;
    texto4: string;
    texto5: string;
}

export const Sobremi = model<ISobreMi>('Sobremi', sobreMiSchema)