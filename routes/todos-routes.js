// const Router = require('express');
import { Router } from "express";
import {
  getTodos,
  getTodoById,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos-controller.js";

const router = Router();

router.get("/", getTodos);

router.get("/:id", getTodoById);

router.post("/", addTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

export default router;
