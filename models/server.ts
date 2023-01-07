import express, { Application } from 'express';
import userRoutes from '../routes/users';
import cors from 'cors';
import sequelize from '../database/connection';

class Server {

    private app: Application;
    private port: string;
    private paths = {

        users: '/api/users'

    }

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '4000';

        this.middlewares();
        this.routes();
        this.dbconnetion();

    }

    async dbconnetion() {

        try {

            await sequelize.authenticate();
            console.log("Database is connected");

        } catch (error) {

            console.error('Unable to connect to the database:', error);

        }

    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //BODY
        this.app.use(express.json());

        //PUBLIC
        this.app.use(express.static('public'))

    }

    routes() {

        this.app.use(this.paths.users, userRoutes)

    }

    listen() {

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        })

    }

}

export default Server;