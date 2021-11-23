import mongoose from 'mongoose';


const { Schema, model } = mongoose;

const userSchema = 
    new Schema(
        {
            correo:{
                type: String,
                required: true,
                unique: true,
                validate:{
                    validator: (email) => {
                        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email);
                        // if(email.includes("@") && email.includes(".")) {
                        //     return true;
                        // } else{
                        //     return false;
                        // }
                    },
                    message:"El formato del correo electronico esta malo."
                },
            },
            identificacion:{
                type: String,
                required: true,
                unique: true,
            },
            nombre:{
                type: String,
                required: true,
            },
            apellido:{
                type: String,
                required: true,
            },
            // contrasena:{
            //     type: String,
            //     required: true,
            // },
            rol:{
                type: String,
                required: true,
                enum: ["ESTUDIANDE", "LIDER", "ADMINISTRADOR"],
            },
            estado:{
                type: String,
                enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"],
                default: "PENDIENTE",
            },
        },
        {
            toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
            toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
        }
    );

    userSchema.virtual('projects',{
        ref: 'Project',
        localField:'_id',
        foreignField:'lider',
    });

    userSchema.virtual('advances',{
        ref: 'Advance',
        localField:'_id',
        foreignField:'creadoPor',
    });

    userSchema.virtual('inscriptions',{
        ref: 'Inscription',
        localField:'_id',
        foreignField:'estudiante',
    });

const UserModel = model("User", userSchema);

export {UserModel};