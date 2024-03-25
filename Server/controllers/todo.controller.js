const db = require("../models");
const Todo = db.todo;

exports.addTodo = (req, res) => {
    const newTodoItem = new Todo({
        body: req.body
    })
}