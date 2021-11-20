import { gql } from "apollo-server-express";

const typeAdvance = gql`
    type Advance{
        _id: ID!
        fecha: Date!
        descripcion: String!
        observaciones:[String]
        proyecto: Project!
        creadoPor: User!
    }

    type Query{
        Advances: [Advance]
    }

    type Mutation{
        createAdvance(
            fecha: Date!
            descripcion: String!
            proyecto: String!
            creadoPor: String!
        ): Advance
    }
`;

export {typeAdvance};