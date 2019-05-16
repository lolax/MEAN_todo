const todo = require('../models/todo');

const getTodos = (req, res) => {
    const { user } = req.params
    todo
        .find({ user })
        .then(todos => res.status(200).json(todos))
        .catch(err => res.status(500).json(err.message))
}

const getTodo = (req, res) => {
    const { id } = req.params
    todo
        .findById(id)
        .then(todo => res.status(200).json(todo))
        .catch(err => res.status(500).json(err.message))
}

const addTodo = (req, res) => {
    const { user } = req.params
    const newTodo = new todo({ ...req.params.todo, user })
    newTodo
        .save()
        .then(todo => res.status(201).json(todo))
        .catch(err => res.status(500).json(err.message))
}

module.exports = { getTodos, getTodo, addTodo }

