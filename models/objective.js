import mongoose from 'mongoose';
import { ProjectModel } from './projects/project.js';

const { Schema, model } = mongoose;

const objectiveSchema = 
    new Schema(
        {
            descripcion:{
                type: String,
                required: true,
            },
            tipo: {
                type: String,
                enum: ["GENERAL", "ESPECIFICO"],
                required: true,
            },
            //HACE PARTE DE LA METODOLOGIA 1
            // proyecto:{
            //     type: Schema.Types.ObjectId,
            //     ref: ProjectModel,
            // },
        }
    );

const ObjectiveModel = model('Objective', objectiveSchema);

export {ObjectiveModel};