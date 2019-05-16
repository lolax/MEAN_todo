const user = require('../models/user');

const getUsers = (req, res) => {
    user
        .find()
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json(err))
}

const signup = (req, res) => {
    const newUser = new user(req.params.user)
    newUser
        .save()
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json(err.message))
}

const login = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = { getUsers, signup, login }