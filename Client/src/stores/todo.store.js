import axios from 'axios'
import { defineStore } from 'pinia'

const API_URL = 'http://localhost:8080/api'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todo: {},
    todos: []
  }),
  getters: {
    allTodos: (state) => {
      return state.todos
    }
  },
  actions: {
    async addTodo(todo) {
      await axios.post(`${API_URL}/todos/new`, todo)
      await this.fetchTodos()
    },
    
    async fetchTodos() {
      const response = await axios.get(`${API_URL}/todos/all`)
      this.todos = response.data
    },
    
    async fetchTodo(id) {
      const response = await axios.get(`${API_URL}/todos/${id}`)
      this.todo = response.data
    },
    
    async updateTodo(todo) {
      await axios.patch(`${API_URL}/todos/${todo._id}`, todo)
      await this.fetchTodos()
    },
    
    async deleteTodo(id) {
      await axios.delete(`${API_URL}/todos/delete/${id}`)
      this.todos = this.todos.filter((todo) => todo._id !== id)
      if(this.todo?._id === id) {
        this.todo = null;
      }
    },
    
    async deleteTodos() {
      // await axios.delete(`${API_URL}/delete/${id}`)
      // this.todos = this.todos.filter((todo) => todo._id !== id)
      // if(this.todo?._id === id) {
      //   this.todo = null;
      // }
    }
  }
})
