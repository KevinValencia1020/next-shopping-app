/**
  @file: auth.routes.ts
  @description: Este archivo contiene las rutas relacionadas con la autenticacion para la aplicacion. Se encarga de definir las rutas para el registro de usuarios y la autenticacion, y de asociarlas con los controladores correspondientes. Ademas, se asegura de que las rutas esten protegidas mediante el uso de middlewares de autenticacion y autorizacion.
 */
import { Router } from "express";
import { registerUser } from "../controllers/auth.controller.ts";

const router = Router();
router.post('/registro', registerUser);

export default router;