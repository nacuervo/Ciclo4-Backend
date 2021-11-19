import { gql } from "apollo-server-express";

const typeAdvance = gql`
    type Advance{
        fecha: Date!
        descripcion: String!
        observaciones: [String]
        proyecto: Proyecto!
        creadoPor: Usuario!
    }

    type Query{
        Advances: [Advance]
    }

    type Mutation{
        createAdvance:(
            fecha: Date!
            descripcion: String!
            proyecto: String!
            creadoPor: String!
        ): Advance
    }
`;

export {typeAdvance};