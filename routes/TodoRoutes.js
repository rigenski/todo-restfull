const express = require("express");
const router = express.Router();
const TodoController = require("./../controllers/TodoController");

const {
  createTodo,
  getAllData,
  getDataByID,
  updateTodo,
  deleteTodo,
} = TodoController;

router.route("/").get(getAllData).post(createTodo);
router.route("/:id").get(getDataByID).put(updateTodo).delete(deleteTodo);
module.exports = router;
