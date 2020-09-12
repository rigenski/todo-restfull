const Todo = require("./../models/TodoModel");

//  Post Data
exports.createTodo = async (req, res) => {
  try {
    const { todo, status } = req.body;

    const newTodo = new Todo({
      todo,
      status,
    });
    const saveTodo = await newTodo.save();
    res.status(200).json({
      status: "succes",
      message: "data has been added successfully",
      result: saveTodo,
    });
  } catch (err) {
    console.log(err);
  }
};

//  Get Data
exports.getAllData = async (req, res) => {
  const todo = await Todo.find();
  res.status(200).json({
    status: "succes",
    result: todo,
  });
};

//  Get Data by ID
exports.getDataByID = async (req, res) => {
  const todoID = await Todo.findById(req.params.id);
  res.status(200).json({
    status: "succes",
    result: todoID,
  });
};

//  Update Data
exports.updateTodo = async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(442).json({ status: "error", message: err.message });
    }
    res.status(200).json({
      status: "succes",
      message: "data has been update successfully",
      result: result,
    });
  });
};

//  Delete Data
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      return res.status(442).json({ status: "error", message: err.message });
    }
    res.status(200).json({
      status: "success",
      message: "data has been deleted successfully",
    });
  });
};
