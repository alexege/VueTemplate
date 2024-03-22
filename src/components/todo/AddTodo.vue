<script setup>

import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo.store.js'
const todoStore = useTodoStore()

const todoText = ref('')

async function onSubmit() {
    console.log("Submitting todo:", todoText.value)
    await todoStore.addTodo(todoText.value)
    todoText.value = ''
}
</script>

<template>
    <div>
        <input type="text" v-model="todoText">
        <button @click="onSubmit()">Add</button>
    </div>
</template>