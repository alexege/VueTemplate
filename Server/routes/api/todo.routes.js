const controller = require("../../controllers/todo.controller");
module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    // app.get("/api/todo/allTodos", controller.findAllTodos);
    
    // app.get("/api/todo/:id", controller.findById);
    
    app.post("/api/todo/addTodo", controller.addTodo);
    
    // app.patch("/api/todo/update/:id", controller.updateTodo);
    
    // app.delete("/api/todo", controller.deleteTodos);
    
    // app.delete("/api/todo/:id", controller.deleteTodo);
}