import mongoose from 'mongoose';
import { ObjectiveModel } from '../objective.js';
import { UserModel } from '../user/user.js';

const { Schema, model } = mongoose;

const projectSchema = 
    new Schema(
        {
            nombre:{
                type: String,
                required: true,
            },
            presupuesto:{
                type: Number,
                required: true,
            },
            fechaInicio:{
                type: Date,
                required: true,
            },
            fechaFin:{
                type: Date,
                required: true,
            },
            estado:{
                type: String,
                enum: ["ACTIVO", "INACTIVO"],
                default: "INACTIVO",
            },
            fase:{
                type: String,
                enum: ["INICIADO", "DESARROLLO", "TERMINADO", "NULO"],
                default: "NULO",
            },
            lider:{
                type: Schema.Types.ObjectId,
                required: true,
                ref: UserModel,
            },
            //HACE PARTE DE LA METODOLOGIA 2
            // objetivos:[
            //     {
            //         type: Schema.Types.ObjectId,
            //         ref: ObjectiveModel,
            //     },
            // ],

            //HACE PARTE DE LA METODOLOGIA 3
            objetivos:[
                {
                    descripcion:{
                        type:String,
                        required: true,
                    },
                    tipo:{
                        type: String,
                        enum: ["GENERAL", "ESPECIFICO"],
                        required: true,
                    },
                }
            ],
        },
        {
            toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
            toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
        }
    );

    projectSchema.virtual('advances',{
        ref: 'Advance',
        localField:'_id',
        foreignField:'proyecto',
    });

    projectSchema.virtual('inscriptions',{
        ref: 'Inscription',
        localField:'_id',
        foreignField:'proyecto',
    });


const ProjectModel = model("Project", projectSchema);

export {ProjectModel};