const TodoService = require("../services/TodoService")

exports.get = async (req, res) => {
    try {
        const id = req.params.id;

        const todo = await TodoService.getTodo(id);

        if(!todo){
            return res.status(404).json("There are no todos published with this id");
        }
        
        res.json(todo);
    } catch (err) {
        return res.status(404).json({erros: err})
    }
}

exports.getAll = async (req, res) => {
    try {
        const todos = await TodoService.getAllTodos();

        if(!todos){
            return res.status(404).json("There are no todos published yes");
        }
        
        res.json(todos);
    } catch (err) {
        return res.status(404).json({erros: err})
    }
}

exports.add = async (req, res) => {
    try {
        const createdTodo = await TodoService.addTodo(req.body);
        res.status(201).json(createdTodo);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.update = async (req, res) => {
    try {
        const id = req.params.id;

        await TodoService.updateTodo(id, req.body);
        res.status(202).json();
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;

        const deleteTodo = TodoService.deleteTodo(id);
        
        res.status(202).json(deleteTodo);
    } catch (err) {
        return res.status(404).json({erros: err})
    }
}