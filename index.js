// const express = require('express');
import express from "express";
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import { engine } from "express-handlebars";
import cors from "cors";
import todosRoutes from "./routes/todos-routes.js";
import usersRouters from "./routes/users-routes.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { TODOS } from "./data/data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//Middlewares

app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET, POST, PUT, PATCH, DELETE"],
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "Content-Type",
      "Authorization",
    ],
  })
);

app.set("view engine", "hbs");

app.engine(
  "hbs",
  engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: "hbs",
    partialsDir: `${__dirname}/views/partials/`,
  })
);

app.use(express.static("public"));

app.use("/api/todos", todosRoutes);
app.use("/api/users", usersRouters);

app.use("/", (req, res, next) => {
  res.render("main", {
    layout: "index",
    options: { todos: TODOS },
    listExists: true,
  });
});

// const todos = [
//   {
//     id: 1,
//     desc: 'Write python code',
//     completed: false,
//   },
//   {
//     id: 2,
//     desc: 'Write javascript',
//     completed: true,
//   },
// ];

// GET, POST, PUT, DELETE, PATCH

app.get("/", (req, res, next) => {
  res.send("Todo list home page");
});

// app.get('/todos', (req, res) => {
//   res.json(todos);
// });

// app.get('/todos/:id', (req, res) => {
//   console.log(req.params.id);
//   let todo = todos.filter((todo) => todo.id == req.params.id);
//   res.json(todo);
// });

// app.post('/todos', (req, res) => {
//   let body = req.body;
//   console.log(body);
//   todos.push({ id: uuid.v4(), ...body });
//   res.json(todos);
// });

// app.put('/todos/:id', (req, res) => {
//   let todo = todos.find((todo) => todo.id == req.params.id);
//   if (todo) {
//     todo.desc = req.body.desc;
//     todo.completed = req.body.completed;
//     res.json(todos);
//   } else {
//     res.send("Todo with given id doesn't exist");
//   }
// });

// app.delete('/todos/:id', (req, res) => {
//   let index = todos.findIndex((todo) => todo.id == req.params.id);
//   todos.splice(index, 1);
//   console.log(todos);

//   res.json(todos);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
