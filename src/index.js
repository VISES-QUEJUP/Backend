import app from "./app.js";
import { sequelize } from './database/database.js';
//  import './models/usuario.js'
//  import './models/queja.js'
//  import './models/tipo.js'
//  import './models/estado.js'

async function main(){
   try {
    await sequelize.sync({force : false} );
    console.log("connection has been established succesfully. ")
    app.listen(3000)
    console.log('Server listening on port ',3000)
   } catch (error) {
    console.log("unable to connect to the database:", error)
   }
}

main()