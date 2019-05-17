const user = require('../models/user');

const signup = (req, res) => {
    const newUser = new user(req.params.user)
    newUser
        .save()
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json(err.message))
}

const login = (req, res) => {
    user
        .find({ name: req.body.name })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json(err.message))
}

const getUsers = (req, res) => {
    user
        .find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err.message))
}

const updateUser = (req, res) => {
    const { id } = req.params
    user
        .findOneAndUpdate({ id }, req.body)
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json(err.message))
}

const deleteUser = (req, res) => {
    const { id } = req.params
    user
        .findOneAndDelete({ id })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json(err.message))
}

module.exports = { 
    signup, 
    login, 
    getUsers, 
    updateUser, 
    deleteUser 
}