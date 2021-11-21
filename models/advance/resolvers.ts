import { isParameterPropertyDeclaration } from "typescript";
import { AdvanceModel } from "./advance";

const resolversAdvance = {
    Query:{
        Advances: async (paren, args) => {
            const advances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return advances;
        },

        filterAdvance: async (parent, args) => {
            const advanceFilter = await AdvanceModel.find({proyecto: args.idProyecto})
                .populate('proyecto')
                .populate('creadoPor');
            return advanceFilter;
        }
    },

    Mutation:{
        createAdvance: async (parent, args) => {
            const advanceCreated = await AdvanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return advanceCreated;
        }
    },
};

export {resolversAdvance};

