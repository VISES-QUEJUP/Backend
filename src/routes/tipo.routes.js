import { Router} from "express";
import { 
    createTipo,
    getTipos,
    deleteTipo,
    updateTipo,
    getTipo,
 } from "../controllers/tipo.controllers.js";

const router = Router();

router.get("/tipos",getTipos);
router.post("/tipo",createTipo);
router.put("/tipo/:id",updateTipo);
router.delete("/tipo/:id", deleteTipo);
router.get("/tipo/:id",getTipo);


export default router;