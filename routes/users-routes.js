import { Router } from "express";
import {
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users-controller.js";

const router = Router();

router.get("/:id", getUserById);

router.post("/", addUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

export default router;
