const controller = require("../../controllers/todo.controller");
module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/todos/all", controller.fetchTodos);
    
    app.post("/api/todos/new", controller.addTodo);
        
    app.get("/api/todos/:id", controller.fetchTodo);
    
    app.put("/api/todos/:id", controller.updateTodo);
    
    app.delete("/api/todos/:id", controller.deleteTodo);
    
    app.delete("/api/todos", controller.deleteTodos);
}