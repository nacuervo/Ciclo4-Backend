import { AdvanceModel } from "./advance";

const resolversAdvance = {
    Query:{
        Advances: async (paren, args) => {
            const advances = await AdvanceModel.find().populate('proyecto').populate('creadoPor');
            return advances;
        },
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

