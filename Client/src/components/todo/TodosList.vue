<script setup>
import { storeToRefs } from 'pinia';

import { useTodoStore } from '@/stores/todo.store.js'
const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

todoStore.getTodos()

</script>
<template>
    <div>
        <ul v-for="todo in todos" :key="todo.id">
            <li>{{ todo }}</li>
        </ul>
    </div>
</template>