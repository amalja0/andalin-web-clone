<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="flex-container">
        <img src="../assets/logo.png" class="flex-item logo"/>
        <router-link to="/" class="flex-item">Home</router-link>
        <router-link to="/register" class="flex-item">Register</router-link>
    </div>
</template>
<style scoped>
.flex-container {
    display: flex;
    align-items: center;
}
.flex-item{
    margin-left: 3rem;
}
.logo {
    width: 5rem;
}
</style>