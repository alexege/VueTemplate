import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  getters: {},
  actions: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    getTodos() {
      //Make call to database to retrieve latest todos
      //Update the store value based on this udpated data
    }
  }
})
