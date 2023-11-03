//Esta clase representa un servidor
import express from "express";
import cors from 'cors'

import { rutasAPI } from "./routes/rutasHoteles.js";
import { establecerConexionBD } from "./database/conexion.js";

export class Api {
  constructor() {
    this.app = express();
    this.conectarBD()
    this.procesarPeticiones();
  }

  //Levantar el servidor
  levantarServidor() {
    // this.port = 3030;
    this.app.listen(3030, function () {
      console.log("Server launched");
      console.log(`Running on localhost:3030`);
    });
  }

  //Atiende las peticiones y responde

  procesarPeticiones() {
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use("/", rutasAPI);
    
  }
  //Conectarse a la base de datos
  conectarBD(){
    establecerConexionBD()
  }
}
