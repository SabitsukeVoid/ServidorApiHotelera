import { Api } from "./Api.js";
import 'dotenv/config'

// console.log(process.env) hackear la nasa

let servidor = new Api() //Creando un objeto de la clase Api

servidor.levantarServidor()