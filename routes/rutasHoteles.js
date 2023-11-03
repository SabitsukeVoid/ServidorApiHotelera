//Espacio para definir las rutas o endpoints especificaos de su API

import express from "express";

export let rutasAPI = express.Router();

//Importo los controladores
import { ControladorHabitacion} from "../controllers/ControladorHabitacion.js";
let controladorHabitacion = new ControladorHabitacion()
import { ControladorReservas } from "../controllers/ControladorReservas.js";
let controladorReservas = new ControladorReservas()

//Aca pone sus ENDPOINTS

rutasAPI.post("/api/habitaciones", controladorHabitacion.registrar);

rutasAPI.get("/api/habitaciones", controladorHabitacion.buscarTodas);

rutasAPI.get("/api/habitacion/:id", controladorHabitacion.buscarPorId);

rutasAPI.put("/api/habitaciones/:id", controladorHabitacion.modificar);

rutasAPI.delete("/api/habitaciones/:id", controladorHabitacion.eliminar);

//Reservas
rutasAPI.post("/api/reservas", controladorReservas.registrar);

rutasAPI.get("/api/reservas", controladorReservas.buscar);

rutasAPI.get("/api/reserva/:id", controladorReservas.buscarPorId);

rutasAPI.put("/api/reservas/:id", controladorReservas.modificar);

rutasAPI.delete("/api/reservas/:id", controladorReservas.eliminar);
