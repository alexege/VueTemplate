<script setup>
async function onSubmit(value) {

    const { username, password } = value
    console.log(`Username: ${username}, Password: ${password}`)
    console.log("Attempting to perform login:", value)
}
</script>
<template>
    <div>
        <h2>Login</h2>

        <form @submit.prevent="onSubmit">

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
                <button>Login</button>
                <router-link to="register">Register</router-link>
            </div>

        </form>

    </div>
</template>
<style scoped>
.form-group {
    display: flex;
}
</style>