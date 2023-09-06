import { DataTypes, Sequelize } from 'sequelize'
import {sequelize} from '../database/database.js'
import { Queja } from './queja.js'

export const Usuarios =sequelize.define('usuarios',{
id:{
    type: DataTypes.INTEGER,
    primaryKey : true , //llave primaria
    autoIncrement :true  //incremento automatico
},
name:{
    type :DataTypes.STRING,
},
email:{
    type : DataTypes.STRING,
    unique   : true,// es unico
},
password:{
    type :DataTypes.STRING
},

isAdmin:{
    type : DataTypes.BOOLEAN,
    defaultValue : false,
    //administrador o no administrador
    //Generar tabla de tipos de usuarios 
}   

//relación de tablas 
})

Usuarios.hasOne(Queja,{
    foreingKey:'userId',
    sourceKey:'id'

})

Queja.belongsTo(Usuarios,{
    foreingKey:'userId',
    targetKey: 'id'
});