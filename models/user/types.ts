import { gql } from "apollo-server-express";

const typeUser = gql`

    type User {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        estado: Enum_EstadoUsuario
        rol: Enum_Rol!
    }

    type Query {
        Users: [User]
        User(_id:String!): User
    }

    type Mutation{
        createUser(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            estado: Enum_EstadoUsuario
            rol: Enum_Rol!
        ):User

        editUser(
            _id: String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            estado: Enum_EstadoUsuario
            rol: Enum_Rol!
        ): User

        deleteUser(
            _id:String
            correo:String
        ):User

    }
`;

export {typeUser};