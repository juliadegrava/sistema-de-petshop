import { Router } from 'express';
import * as PetController from './../controllers/petsController.js'

const router = Router();

router.get("/", PetController.listarTodos);

router.get("/:id", PetController.buscarPetPorId);

export default router;