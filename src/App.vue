<template>
    <div id="app">
        <!-- <router-link to="/">Go to Foo</router-link>
    <router-link to='/user/123123'>Go to Bar</router-link>
        <router-link to='/user/123123'>Go to Bar</router-link>-->
        <div class="button-group" ref="start">
            <button @click="$router.push({ name: 'home' })">Home</button>
            <button
                @click="$router.push({ name: 'user', params: { user: Math.ceil(Math.random() * 10) }})"
            >User</button>
            <button
                @click="$router.push({ name: 'userchildren', params: { user: Math.ceil(Math.random() * 10) }})"
            >User Children</button>
            <button
                @click="$router.push({ name: 'userchildren', params: { user: Math.ceil(Math.random() * 10) }, query: { locale: 'INQUIRY' }})"
            >User Children</button>
            <button
                @click="$router.push({ name: 'userchildren', params: { user: Math.ceil(Math.random() * 10) }, hash: '#footer'})"
            >Go to Hash Footer</button>
            <button @click="$router.push({ path: '/redirect-me' })">Redirect Me</button>
            <button @click="switchLanguage('en')">Switch Languange (EN)</button>
            <button @click="switchLanguage('ja')">Switch Languange (JP)</button>
        </div>
        <transition name="slide" mode="out-in">
            <router-view></router-view>
        </transition>
        <div class="footer">
            <button @click="goToTop">^</button>
        </div>
    </div>
</template>

<script>
const App = {
    name: "App",
    methods: {
        goToTop() {
            // console.log(this.$refs);
            this.$refs.start.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        },
        switchLanguage: function(languange) {
            this.$store.dispatch("updateLanguage", languange);
        }
    }
};
export default App;
</script>

<style scoped>
.button-group,
.footer {
    display: flex;
    justify-content: center;
}
</style>

<style>
@font-face {
    font-family: "Dosis", sans-serif;
    src: url("https://fonts.googleapis.com/css?family=Dosis&display=swap");
}
</style>