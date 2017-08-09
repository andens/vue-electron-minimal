import Vue from 'vue';
import App from './App.vue';
import router from "./router";

new Vue({
    el: "#app",
    router,
    template: '<App/>',
    components: { App }
});

// Outdated, men tar saker från grunden https://coligo.io/bookmarking-app-electron-vuejs-firebase/
// Cannot find module 'vue-template-compiler' https://github.com/vuejs/vue-loader/issues/560
// Projekt som använder Vue https://github.com/vuejs/awesome-vue#projects-using-vuejs
// Electron-app som använder Vue, kan se hur de har satt ihop det hela https://github.com/Zhangdroid/Gokotta
// Guide https://vuejs.org/v2/guide/
// Kan vara värd att läsa om när jag fått en rotkomponent att fungera och där index använder dist/build.js utan att behöva pilla där manuellt: https://scotch.io/tutorials/create-a-desktop-quiz-application-using-vue-js-and-electron
// https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-introduction
// https://scotch.io/tutorials/how-to-build-a-simple-single-page-application-using-vue-2-part-1

