import { connect } from 'mongoose'

const conectarBD = async () => {
    return await connect(process.env.DATABASE_URL)
    // return await connect("mongodb+srv://Nelson:N3ls0nD3v@proyectociclo4.cq67b.mongodb.net/GestionProyectos?retryWrites=true&w=majority")
    // return await connect("mongodb+srv://admin:AdminProyectos@gestionproyectosmintic.f2y99.mongodb.net/GestionProyectos?retryWrites=true&w=majority")
    .then(() => {
        console.log('Conexion Exitosa');
    }).catch(e => {
        console.error('Error conectando a la BD', e);
    });
};

export default conectarBD