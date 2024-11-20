export const getTodos = (req, res, next) => {
  res.status(200).json("Get Todos");
};

export const getTodoById = (req, res, next) => {
  res.status(200).json("Get Todo By Id");
};

export const addTodo = (req, res, next) => {
  console.log("req body", req.body);
  res.status(201).json("Add Todo");
};

export const updateTodo = (req, res, next) => {
  console.log("req body", req.body);
  res.status(200).json("Update Todo");
};

export const deleteTodo = (req, res, next) => {
  res.status(200).json("Delete Todo");
};
