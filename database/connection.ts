import { Sequelize } from "sequelize";

const db = new Sequelize('listado','root','',{

    host: 'localhost',
    dialect: 'mysql'

});

export default db