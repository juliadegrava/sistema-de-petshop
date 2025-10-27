import { Router } from 'express';
import * as PetController from './../controllers/petsController.js'

const router = Router();

router.get("/", PetController.listarTodos);

router.get("/:id", PetController.buscarPetPorId);

router.post("/", PetController.criar);

router.post("/:id", PetController.apagar);

router.put("/:id", PetController.atualizar)


export default router;