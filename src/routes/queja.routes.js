import { Router} from "express";
import { 
    getQuejas,
    getQueja,
    createQueja,
    updateQueja,
    deleteQueja
 } from "../controllers/queja.controllers.js";

const router = Router();

router.get("/quejas",getQuejas);
router.post("/queja",createQueja);
router.put("/queja/:id",updateQueja);
router.delete("/queja/:id",deleteQueja);
router.get("/queja/:id",getQueja);


export default router;