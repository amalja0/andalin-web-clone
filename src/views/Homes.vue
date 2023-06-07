<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="header">
        <img src="../assets/marcin-jozwiak-kGoPcmpPT7c-unsplash.jpg" class="bg"/>
        <h2 class="text">Trade</h2>
        <h1 class="text">Without Border</h1>
        <h6 class="text">It’s easier now to expand your business without border. Backed with our digital platform, you can easily ship to hundreds of cities and ports around the world.</h6>
    </div>
</template>
<script>
export default {
    component:{
    }
}
</script>
<style scoped>
.bg {
    background-image: url('../assets/marcin-jozwiak-kGoPcmpPT7c-unsplash.jpg');
}
.header {
    position: relative;
}
.header .bg {
    width: 100%;
}
.text {
    position: absolute;
}
</style>