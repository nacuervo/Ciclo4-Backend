import { UserModel } from "./user.js";

const resolversUser = {
    Query:{
        Users: async (parent, args) => {
            const users = await UserModel.find().populate('projects').populate('advances').populate('inscriptions');
            return users;
        },

        User: async (parent, args) => {
            const user = await UserModel.findOne({
                _id:args._id
            });
            return user;
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const userCreated = await UserModel.create({
                correo:args.correo,
                identificacion:args.identificacion,
                nombre:args.nombre,
                apellido:args.apellido,
                contrasena:args.contrasena,
                rol:args.rol
            });

            if(Object.keys(args).includes('estado')) {
                userCreated.estado = args.estado;
            }
            return userCreated;
        },
        
        editUser: async (parent, args) => {
            const userEdited = await UserModel.findOneAndUpdate(args._id,{
                correo:args.correo,
                identificacion:args.identificacion,
                nombre:args.nombre,
                apellido:args.apellido,
                contrasena: args.contrasena,
                rol:args.rol,
                estado: args.estado
            });
            return userEdited;
        },

        deleteUser: async (parent, args) => {
            if(Object.keys(args).includes('_id')) {
                const userDeleted = await UserModel.findOneAndDelete({_id:args._id});
                return userDeleted;
            }else if(Object.keys(args).includes('correo')) {
                const userDeleted = await UserModel.findOneAndDelete({correo:args.correo});
                return userDeleted;
            }else if(Object.keys(args).includes('identificacion')){
                const userDeleted = await UserModel.findOneAndDelete({identificacion:args.identificacion});
                return userDeleted
            }
        },
    },
};

export {resolversUser};