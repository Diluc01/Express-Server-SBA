export const getUserById = (req, res, next) => {
  res.status(200).json("Get User By Id");
};

export const addUser = (req, res, next) => {
  console.log("req body", req.body);
  res.status(201).json("Add user");
};

export const updateUser = (req, res, next) => {
  console.log("req body", req.body);
  res.status(200).json("Update User");
};

export const deleteUser = (req, res, next) => {
  res.status(200).json("Delete user");
};
