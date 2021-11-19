import { ProjectModel } from "./project";

const resolversProject = {
    Query:{
        Proyects: async (parent, args) => {
            const proyects = await ProjectModel.find().populate('lider');
            return proyects;
        },
    },

    Mutation: {
        createProject: async (parent, args) => {
            const proyectCreated = await ProjectModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos,
            });
            return proyectCreated;
        },
    },
};

export {resolversProject};