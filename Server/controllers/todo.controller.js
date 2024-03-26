const db = require("../models");
const Todo = db.todo;

exports.fetchTodos = async (req, res) => {
    Todo.find({})
    .then((todos) => {
        res.status(200).send(todos)
    })
    .catch((error) => {
        console.log("Error: ", error)
    })
}

exports.addTodo = async (req, res) => {
    const newTodo = new Todo({
        title: req.body.title || "Sample Title",
    })

    //If an author exists, create relationship
}

exports.fetchTodo = async (req, res) => {
    Todo.findById({ _id: req.params.id })
    .then((todo) => {
        res.send({ todo })
    })
    .catch((error) => {
        res.status(500).send({ message: error })
        return
    })
}

exports.updateTodo = async (req, res) => {
    let updateData = {
        //Updated value here
        //Value : req.body.value
    }

    Todo.findByIdAndUpdate({ _id: req.params.id }, updateData)
    .then((todo) => {
        res.status(200).send({ todo })
    })
    .catch((error) => {
        res.status(500).send({ message: error })
    })
}

exports.deleteTodo = async (req, res) => {
    Todo.deleteOne({ _id: req.params.id })
    .then(() => {
        res.status(200).send({ message: "Todo deleted" })
    })
    .catch((error) => {
        res.status(500).send({ message: error })
        return
    })
}

exports.deleteTodos = async (req, res) => {
    Todo.deleteMany()
    .then(() => {
        res.stauts(200).send({ message: "Todos deleted" })
    })
    .catch((error) => {
        res.status(500).send({ message: error })
        return
    })
}