import { modeloReserva } from "../models/modeloReserva.js"
export class ServicioReserva {
    constructor() {}

    async buscarTodas(){
        let reservas=await modeloReserva.find()
        return reservas
    }
    async buscarPorId(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let reservaNueva=new modeloReserva(datos)
        return await reservaNueva.save()
    }
    // completar
    async eliminar(id){
        let reserva=await modeloReserva.deleteOne({ "_id" : id })
        return reserva
            
    } 
    
}