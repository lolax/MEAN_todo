const todoController = require('./controllers/todo');
const userController = require('./controllers/user');

module.exports = server => {
    server.route('/todo/:user')
        .get(todoController.getTodos)
        .post(todoController.addTodo)
        
    server.route('/todo/:id')
        .get(todoController.getTodo)
        // .put(todoController.updateTodo)
        // .delete(todoController.deleteTodo)

    server.route('/user')
        .get(userController.getUsers)
        // .put(userController.updateUser)
        // .delete(userController.deleteUser)

    server.route('/signup')
        .post(userController.signup)
    
    server.route('/login')
        .post(userController.login)
}