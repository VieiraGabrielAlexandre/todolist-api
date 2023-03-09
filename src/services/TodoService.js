const { Model } = require("mongoose");
const Todo = require("../models/Todo");

module.exports = class TodoService {
    static async getAllTodos() {
        try {
            const allTodos = await Todo.find();
            return allTodos;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }

    static async getTodo(id) {
        try {
            const todo = await Todo.findById(id).exec();
            return todo;
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }

    static async addTodo(data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished
            }
            
            const response = await new Todo(newTodo).save();

            return response;
        } catch (error) {
            console.log(error);
        }
    }

    static async updateTodo(id, data) {
        try {
            const newTodo = {
                title: data.title,
                description: data.description,
                date: data.date,
                finished: data.finished
            }

            await Todo.findByIdAndUpdate(id, newTodo);
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteTodo(id) {
        try {
            await Todo.findByIdAndDelete(id);
        } catch (error) {
            console.log(`Could not fetch todos ${error}`);
        }
    }
}