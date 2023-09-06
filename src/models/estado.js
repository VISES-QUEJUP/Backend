import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';
import { Queja } from './queja.js'

export const Estado = sequelize.define('estado',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true , //llave primaria
        autoIncrement :true  //incremento automatico
    },
    estado:{
        type :DataTypes.STRING,
    },
    descripcion:{
        type :DataTypes.STRING,
    }
    
})

Estado.hasOne(Queja,{
    foreingKey:'Id_estado',
    sourceKey:'id'

})

Queja.belongsTo(Estado,{
    foreingKey:'Id_estado',
    targetKey: 'id'
});