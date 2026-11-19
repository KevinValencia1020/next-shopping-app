import { Router } from "express";
import { verificarJWT, verificarAdmin } from "../middlewares/auth.middleware.ts";
const router = Router();

router.get('/ping', verificarJWT, verificarAdmin, (req, res) => {
  res.json({ message: 'Acceso permitido para usuarios autenticados y con rol de administrador' });
});

export default router;