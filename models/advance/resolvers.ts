import { AdvanceModel } from "./advance"


const resolversAdvance = {
    Query:{
        Advance: async (parent, args) => {
            const advance = await AdvanceModel.find();
            return advance;
        }
    },

    Mutation:{
        createAdvance: async (parent, args) => {
            const advanceCreated = AdvanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return advanceCreated;
        },
    },
};

export {resolversAdvance};