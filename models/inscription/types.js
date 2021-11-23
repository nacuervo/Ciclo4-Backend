import { gql } from "apollo-server-express";

const typeInscription = gql`

    type Inscription {
        _id: ID
        estado: Enum_EstadoInscripcion!
        fechaIngreso: Date
        fechaEgreso: Date
        proyecto: Project!
        estudiante: User!
    }

    type Query {
        Inscriptions:[Inscription]
    }

    type Mutation{
        createInscription(
            estado: Enum_EstadoInscripcion!
            proyecto: String!
            estudiante: String!
        ):Inscription

        approveInscription(
            id: String!
        ):Inscription
    }
`;

export {typeInscription};