import { UserModel } from "./user";

const resolversUser = {
    Query:{
        Users: async (parent, args) => {
            const users = await UserModel.find();
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
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol
            });

            if(Object.keys(args).includes('estado')) {
                userCreated.estado = args.estado;
            }
            return userCreated;
        },
        
        editUser: async (parent, args) => {
            const userEdit = await UserModel.findOneAndUpdate(args._id,{
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol,
                estado: args.estado
            });
            return userEdit;
        },

        deleteUser: async (parent, args) => {
            if(Object.keys(args).includes('_id')) {
                const userEliminated = await UserModel.findOneAndDelete({_id:args._id});
                return userEliminated;
            }else if(Object.keys(args).includes('correo')) {
                const userEliminated = await UserModel.findOneAndDelete({correo:args.correo});
                return userEliminated;
            }
        },
    },
};

export {resolversUser};