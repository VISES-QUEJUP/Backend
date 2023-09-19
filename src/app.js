import express from "express";
import UserRoutes from './routes/user.routes.js'
import TipoRoutes from './routes/tipo.routes.js'
import QuejasRoutes from './routes/queja.routes.js'
import cors from 'cors';
const app = express();

//middleware
app.use(express.json());


app.use(UserRoutes);
app.use(TipoRoutes);
app.use(QuejasRoutes);
app.use(cors());


//habilitar peticiones 

const whitelist =["http://localhost:3000"];
const corsOptions={
   origin:function (origin,callback) {
      if(whitelist.includes(origin)){
         //puede consultar la base de datos
         callback(null,true);
} else {
   //No puede consultar la base de datos 
   callback(new Error("Not allowed by CORS"));
}
}
}

export default app;