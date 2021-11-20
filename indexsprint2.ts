import conectarBD from "./db/db";
import { UserModel } from "./models/user/user";
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from "./models/enums/enums";
import { ProjectModel } from "./models/projects/project";
import { ObjectId } from "mongoose";
import { ObjectiveModel } from "./models/objective";

// METODOLOGIA ONE TO MANY 1
//REFERENCIA EN LA PARTE MANY DE LA RELACION (EN EL OBJETIVO)
// SE DEBE REALIZAR LA RELACION EM OBJECTIVE.TS
//VENTAJAS: si la parte many tien muchas entidades este metodo es mas eficiente en terminos de velocidad y almacenamiento.
// DESVENTAJAS: se deben hacer dos queries, y hacer las creaciones por separado.

const crearProyectoConObjetivos1 = async () => {
    const usuarioInicial = await UserModel.create({
        nombre: "Nelson",
        apellido: "Cuervo",
        correo: "nelsoncuervo86@gmail.com",
        identificacion: "1112758173",
        rol: Enum_Rol.ADMINISTRADOR,
        estado: Enum_EstadoUsuario.AUTORIZADO,
    });
    
     const proyectoCreado = await ProjectModel.create({
        nombre: "Proyecto Mision Tic",
        fechaInicio: new Date("2021/12/24"),
        fechaFin: new Date("2022/12/24"),
        presupuesto: 120000,
        lider: usuarioInicial._id,
    });
 
    const objetivoGeneral = await ObjectiveModel.create({
        descripcion: "Este es el objetivo general",
        tipo: Enum_TipoObjetivo.general,
        proyecto: proyectoCreado._id,
    });
 
    const objetivoEspecifico1 = await ObjectiveModel.create({
         descripcion: "Este es el objetivo especifico 1",
         tipo: Enum_TipoObjetivo.especifico,
         proyecto: proyectoCreado._id,
    });
 
    const objetivoEspecifico2 = await ObjectiveModel.create({
         descripcion: "Este es el objetivo especifico 2",
         tipo: Enum_TipoObjetivo.especifico,
         proyecto: proyectoCreado._id,
    });
}

const consultaProyectoConObjetivos1 = async () =>{
    const proyecto = await ProjectModel.findOne({ _id: '61924e97edb9dc2f095b9397'});
   
   console.log("El proyecto que encontre fue: ", proyecto);
   
   const objetivos = await ObjectiveModel.find({project: '61924e97edb9dc2f095b9397'});

   console.log("los objetivos son: ", objetivos);

   const proyectoConObjetivos = {...proyecto, objetivos: objetivos};

   console.log("El proyecto con objetivos es: ", proyectoConObjetivos);
}

// METODOLOGIA ONE TO MANY 2
//REFERENCIA EN LA PARTE ONE DE LA RELACION (EN EL PROYECTO)
// SE DEBE REALIZAR LA RELACION EM PROJECT.TS
//VENTAJAS: el query puede usar populate
// DESVENTAJAS: si la parte many de la relacion crece demasiado, el documento del proyecto se vuelve muy pesado y podria ser lento para cargar, tambien tengo que hacer las creaciones por separado.

const crearProyectoConObjetivos2 = async () => {
    const usuarioInicial = await UserModel.create({
        nombre: "Nelson",
        apellido: "Cuervo",
        correo: "nelsoncuervo86@gmail.com",
        identificacion: "1112758173",
        rol: Enum_Rol.ADMINISTRADOR,
        estado: Enum_EstadoUsuario.AUTORIZADO,
    });

    const objetivoGeneral = await ObjectiveModel.create({
        descripcion: "Este es el objetivo general",
        tipo: Enum_TipoObjetivo.general,
    });
 
    const objetivoEspecifico1 = await ObjectiveModel.create({
         descripcion: "Este es el objetivo especifico 1",
         tipo: Enum_TipoObjetivo.especifico,
    });
 
    const objetivoEspecifico2 = await ObjectiveModel.create({
         descripcion: "Este es el objetivo especifico 2",
         tipo: Enum_TipoObjetivo.especifico,
    });

    const proyectoCreado = await ProjectModel.create({
        nombre: "Proyecto Mision Tic",
        fechaInicio: new Date("2021/12/24"),
        fechaFin: new Date("2022/12/24"),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        objetivos:[
            objetivoGeneral._id,
            objetivoEspecifico1._id,
            objetivoEspecifico2._id,
        ]
    });
}

const consultaProyectoConObjetivos2 = async () => {
    const proyecto = await ProjectModel.find({ _id: "61925a2b276ec96d80a6615d"}).populate('objetivos');

    console.log("Este es el proyecto encontrado", JSON.stringify(proyecto));
}


// METODOLOGIA ONE TO MANY 3
//NO HACE REFERENCIA Y REGISTRA LOS ELEMENTOS MANY DIRECTAMENTE EN EL ELEMENTO ONE (EN EL PROYECTO)
//VENTAJAS: un solo query una sola creacion
// DESVENTAJAS: si crece demasiado el array el documento se hace muy pesado y se demoraria mucho en cargar. es mas dificil la edicion de los objetivos

const crearProyectoConObjetivos3 = async () => {
    const usuarioInicial = await UserModel.create({
        nombre: "Nelson",
        apellido: "Cuervo",
        correo: "nelsoncuervo86@gmail.com",
        identificacion: "1112758173",
        rol: Enum_Rol.ADMINISTRADOR,
        estado: Enum_EstadoUsuario.AUTORIZADO,
    });

    const proyectoCreado = await ProjectModel.create({
        nombre: "Proyecto Mision Tic",
        fechaInicio: new Date("2021/12/24"),
        fechaFin: new Date("2022/12/24"),
        presupuesto: 120000,
        lider: usuarioInicial._id,
        objetivos:[
            {
                descripcion: "Este es el objetivo general",
                tipo: Enum_TipoObjetivo.general
            },
            {
                descripcion: "Este es el objetivo especifico 1",
                tipo: Enum_TipoObjetivo.especifico
            },
            {
                descripcion: "Este es el objetivo especifico 2",
                tipo: Enum_TipoObjetivo.especifico
            },
        ],
    });
}

const consultaProyectoConObjetivos3 = async () => {
    const proyectoCreado = await ProjectModel.find({_id: "61926418a102d83b2614cdd6"});

    console.log("El proyecto es: ", proyectoCreado);
}

const main = async () =>{
    await conectarBD();

    await UserModel.create({
        nombre: "Catherine",
        apellido: "Marin",
        correo: "catyra.cg@gmail.com",
        identificacion: "1112763925",
        rol: Enum_Rol.LIDER,
        estado: Enum_EstadoUsuario.NO_AUTORIZADO,
    })
     
};

main();

//CRUD USUARIOS
//  CREAR UN USUARIO  
// await UserModel.create({
//     nombre: "Nelson",
//     apellido: "Cuervo",
//     correo: "nelsoncuervo86@gmail.com",
//     identificacion: "1112758173",
//     rol: Enum_Rol.ADMINISTRADOR,
//     estado: Enum_EstadoUsuario.AUTORIZADO,
// })
//     .then((u) => {
//         console.log("Usuario creado con exito", u);
//     })
//     .catch((e) => {
//         console.error("Error al crear el usuario", e);
//     });

// OBTENER LOS USUARIOS
// await UserModel.find()
//     .then((u) => {
//         console.log('Usuarios', u);
//     })
//     .catch((e) => {
//         console.error('Error obteniendo los usuarios', e);
//     });

//OBTENER UN SOLO USUARIO
// await UserModel.findOne({identificacion:"1456"})
//     .then((u) => {
//         console.log("Usuario encontrado", u);
//     })
//     .catch((e) => {
//         console.error("Usuario no encontrado", e);
//     });

//EDITAR UN USUARIO
// await UserModel.findOneAndUpdate(
//     {correo: 'dsl@cc.com'}, 
//     {
//         nombre: 'Juan',
//         apellido: 'Lopez'
//     }
// ).then((u) => {
//     console.log("Usuario modificado con exito", u);
// }).catch((e) => {
//     console.error("Error el usuario no fue actualizado", e);
// });

//ELIMINAR UN USUARIO

// await UserModel.findOneAndDelete(
//     {correo: 'dsl@cc.com',}
// ).then((u) => {
//     console.log("Usuario eliminado con exito", u);
// }).catch((e) => {
//     console.error("El usuario no puede ser eleiminado", e);
// });