import express from 'express';
import dbConnect from '../database/config.js';  
import catRoutes from '../controllers/catController.js';  
import provRoutes from '../controllers/provController.js';  
import cors from 'cors'

class Server {
    constructor() {
        this.app = express();
        this.dbConnection();
        this.route();
        this.listen();
    }

    async dbConnection() {
        try {
            await dbConnect();
            console.log('Database connected');
        } catch (error) {
            console.error('Database connection error:', error.message);
        }
    }

    route() {
        this.app.use(express.json());
        this.app.use(cors())
        // Configurar rutas para CatProveedores
        this.app.use('/catproveedores', catRoutes);

        // Configurar rutas para Proveedores
        this.app.use('/proveedores', provRoutes);
    }

    listen() {
        const port = process.env.PORT 
        this.app.listen(port, () => {
            console.log(`Server is running`);
        });
    }
}

export default Server;
