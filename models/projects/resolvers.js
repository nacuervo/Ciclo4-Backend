import { ProjectModel } from "./project.js";

const resolversProject = {
    Query:{
        Projects: async (parent, args) => {
            const projects = await ProjectModel.find().populate('advances').populate('inscriptions');
            return projects;
        },
    },

    Mutation: {
        createProject: async (parent, args) => {
            const projectCreated = await ProjectModel.create({
                nombre: args.nombre,
                estado: args.estado,
                fase: args.fase,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                presupuesto: args.presupuesto,
                lider: args.lider,
                objetivos: args.objetivos,
                
            });
            return projectCreated;
        },
    },
};

export {resolversProject};