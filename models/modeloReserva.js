import mongoose from "mongoose";
const Schema=mongoose.Schema;
const Reserva=new Schema({
    "nombre":{
        type: String,
        required:true
    },
    "nombreCliente":{
        type: String,
        required:true
    },
    "cedulaCliente":{
        type: String,
        required:true
    },
    "fechaInicio":{
        type: String,
        required:true
    },
    "fechaFin":{
        type: String,
        required:true
    },
    "foto":{
        type:String,
        required:true
    },
    "descripcion":{
        type:String,
        required:true
    },
    "precioNoche":{
        type:Number,
        required:true
    }
})

export const modeloReserva=mongoose.model('Reservas',Reserva)