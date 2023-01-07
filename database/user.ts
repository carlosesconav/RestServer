import { DataTypes } from "sequelize";
import db from "./connection";

const User = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {

        type: DataTypes.STRING

    },
    email: {

        type: DataTypes.STRING

    },
    state: {

        type: DataTypes.BOOLEAN

    },
    createdAt: {
        type: DataTypes.TIME
    },
    updatedAt: {
        type: DataTypes.TIME
    }
});

export default User;