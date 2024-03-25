<script setup>
</script>
<template>
    <div>
        <h2>Register</h2>

        <div class="form-group">
            <label>Username:</label>
            <input type="text">
            <span></span>
        </div>

        <div class="form-group">
            <label>Password:</label>
            <input type="text">
            <span></span>
        </div>

        <div class="form-group">
            <button>Register</button>
            <router-link to="login">Login</router-link>
        </div>
    </div>
</template>
<style scoped>
.form-group {
    display: flex;
}
</style>