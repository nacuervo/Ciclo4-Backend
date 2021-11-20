import { Schema, model } from 'mongoose';
import { Enum_EstadoInscripcion } from '../enums/enums';
import { ProjectModel } from '../projects/project';
import { UserModel } from '../user/user';

interface Inscription{
    proyecto: Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
    estado: Enum_EstadoInscripcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
}

const inscriptionSchema = new Schema<Inscription>({
    estado:{
        type: String,
        enum: Enum_EstadoInscripcion,
        required: true,
    },
    fechaIngreso:{
        type: Date,
        required: true,
    },
    fechaEgreso:{
        type: Date,
        required: true,
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    estudiante:{
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
})

const InscriptionModel = model('Inscription', inscriptionSchema);

export { InscriptionModel };