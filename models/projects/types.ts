import { gql } from "apollo-server-express";

const typeProject = gql`

    type Objective{
        _id: ID!
        descripcion: String! 
        tipo: Enum_TipoObjetivo!
    }

    input createObjective{
        descripcion: String! 
        tipo: Enum_TipoObjetivo!
    }

    type Project {
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: User!
        objetivos:[Objective]
    }

    type Query {
        Projects:[Project]
    }

    type Mutation{
        createProject(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            estado: Enum_EstadoProyecto!
            fase: Enum_FaseProyecto!
            lider: String!
            objetivos: [createObjective]
        ):Project
    }
`;

export {typeProject};