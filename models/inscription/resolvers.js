import { InscriptionModel } from "./inscription.js";

const resolversInscription = {
    Query:{
        Inscriptions: async (parent, args) => {
            const inscriptions = await InscriptionModel.find().populate('proyecto').populate('estudiante');
            return inscriptions;
        },
    },

    Mutation: {
        createInscription: async (parent, args) => {
            const inscriptionCreated = await InscriptionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscriptionCreated;
        },

        approveInscription: async (parent, args) => {
            const inscriptionApproved = await InscriptionModel.findByIdAndUpdate(args.id,{
                estado: "ACEPTADO",
                fechaIngreso: Date.now(),
            });
            return inscriptionApproved;
        }
    },
};

export {resolversInscription};