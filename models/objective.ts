import { Schema, model } from 'mongoose';
import { Enum_TipoObjetivo } from './enums/enums';
import { ProjectModel } from './project/project';

interface Objective{
    descripcion: string;
    tipo: Enum_TipoObjetivo;
    //HACE PARTE DE LA METODOLOGIA 1
    // proyecto: Schema.Types.ObjectId;
}

const objectiveSchema = new Schema<Objective>({
    descripcion:{
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: Enum_TipoObjetivo,
        required: true,
    },
    //HACE PARTE DE LA METODOLOGIA 1
    // proyecto:{
    //     type: Schema.Types.ObjectId,
    //     ref: ProjectModel,
    // },
});

const ObjectiveModel = model('Objective', objectiveSchema);

export {ObjectiveModel};