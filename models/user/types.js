import { gql } from "apollo-server-express";

const typeUser = gql`

    type User {
        _id: ID!
        correo: String!
        identificacion: String!
        nombre: String!
        apellido: String!
        contrasena: String!
        rol: Enum_Rol!
        estado: Enum_EstadoUsuario
        projects:[Project]
        advances:[Advance]
        inscriptions:[Inscription]
    }

    type Query {
        Users: [User]
        User(_id:String!): User
    }

    type Mutation{
        createUser(
            correo: String!
            identificacion: String!
            nombre: String!
            apellido: String!
            contrasena: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario
        ):User

        editUser(
            _id: String!
            correo: String!
            identificacion: String!
            nombre: String!
            apellido: String!
            contrasena: String!
            rol: Enum_Rol!
            estado: Enum_EstadoUsuario
        ): User

        deleteUser(
            _id:String
            correo:String
            identificacion:String
        ):User
    }
`;

export {typeUser};