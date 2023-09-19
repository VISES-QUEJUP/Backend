import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';

export const Queja = sequelize.define('queja',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true , //llave primaria
        autoIncrement :true  //incremento automatico
    },
    cuerpo:{
        type :DataTypes.STRING,
    },
    imagen:{
        type  :DataTypes.STRING,
    },
    ubicación:{
        type  :DataTypes.STRING,
    },
    cant_Votos:{
        type  :DataTypes.INTEGER,
    },
    observación:{
        type  :DataTypes.STRING,
    },
    
})