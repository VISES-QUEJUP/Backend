import { DataTypes, Sequelize } from 'sequelize'
import { sequelize } from '../database/database.js';
import { Queja } from './queja.js'

export const Tipo = sequelize.define('tipo',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey : true , //llave primaria
        autoIncrement :true  //incremento automatico
    },
    tipo:{
        type :DataTypes.STRING,
    },
    descripcion:{
        type :DataTypes.STRING,
    }
    
})

Tipo.hasOne(Queja,{
    foreingKey:'Id_Tipo',
    sourceKey:'id'

})

Queja.belongsTo(Tipo,{
    foreingKey:'Id_Tipo',
    targetKey: 'id'
});