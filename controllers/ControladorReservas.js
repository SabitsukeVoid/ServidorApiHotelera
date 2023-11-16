import { ServicioReserva } from "../services/ServicioReserva.js";
export class ControladorReservas{
    constructor(){

    }

    async buscar(request,response){
        let servicioReserva=new ServicioReserva();
        try{
            //1. Hay que recibir datos? R: No
            //2. Intentar conectarme a la BD
            //3. Envio la respuesta
            response.status(200).json({
                // "estado" : "true",
                "mensaje" : "Exito buscando las reservas",
                "datos" : await servicioReserva.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error buscando las reservas: "+error,
                "datos" : null
            })
        }
    }
    async buscarPorId(request,response){
        let servicioReserva=new ServicioReserva();
        try{
            //1. Hay que recibir datos? R: Si
            //2. Por donde se reciben los datos? Params (URL)
            let id = request.params.id
            //3. Intentar conectarme a la BD y biscar la reservas con el id
            //4. Envio la respuesta
            response.status(200).json({
                "estado" : "true",
                "mensaje" : "Exito buscando las reservas",
                "datos" : await servicioReserva.buscarPorId(id)

            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error buscando las reservas: "+error,
                "datos" : null
            })
        }
    }
    async modificar(request,response){
        let servicioReserva=new ServicioReserva();
        try{
            //1. Hay que recibir datos? R: Si
            //2. Por donde se reciben los datos? Params = id, Body = datos de la reservas
            let id = request.params.id
            let datosModificar = request.body
            //3. Conectarme al BD y mandar los datos recibidos para modificar
            await servicioReserva.modificar(id, datosModificar) // antes de la respuesta
            //4. Enviar la respuesta
            response.status(200).json({
                "estado" : "true",
                "mensaje" : "Exito Modificando las reservas",
                "datos" : ""
            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error Modificando las reservas: "+error,
                "datos" : null
            })
        }
    }
    async registrar(request,response){
        let servicioReserva=new ServicioReserva();
        try{
            //1. Hay que recibir datos? R: Si
            //2. Por donde se reciben los datos? Body = datos de la reservas
            let datosRegistrar = request.body
            //3. Conectarme al BD y registrar los datos
            await servicioReserva.registrar(datosRegistrar)
            //4. Enviar la respuesta
            response.status(200).json({
                "estado" : "true",
                "mensaje" : "Exito Registrando las reservas",
                "datos" : null
            })
        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error Registrando las reservas: "+error,
                "datos" : null
            })
        }
    }
    async eliminar(request,response){
        let servicioReserva=new ServicioReserva();
        try{
            //1. Hay que recibir datos? R:Si
            //2. Por donde se reciben los datos? Params = id
            let id = request.params.id
            //3. Conectarme al BD y eliminarlo
            await servicioReserva.eliminar(id); //eliminar
            //4. Enviar la respuesta
            response.status(200).json({
                "estado" : "true",
                "mensaje" : "Exito eliminando las reservas",
                "datos" : null
            })

        }catch(error){
            response.status(400).json({
                "estado" : "false",
                "mensaje" : "Error eliminando las reservas: "+error,
                "datos" : null
            })
        }
    }
}