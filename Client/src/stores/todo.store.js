import axios from 'axios'
import { defineStore } from 'pinia'

const API_URL = 'http://localhost:8080/api'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  getters: {
    allTodos: (state) => {
      return state.todos
    }
  },
  actions: {
    
    getTodos() {
      //Todo
      return
    },

    async addTodo(item) {
      const todoItem = await axios.post(`${API_URL}/todo/addTodo`, item)
      this.todos.push(todoItem)
    }
  }
})
