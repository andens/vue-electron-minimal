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
// https://devblog.digimondo.io/building-a-json-tree-view-component-in-vue-js-from-scratch-in-six-steps-ce0c05c2fdd8
// https://scotch.io/tutorials/how-to-handle-file-uploads-in-vue-2
// Bra video som visar många intressanta aspekter av Vue https://www.youtube.com/watch?v=p-7Zi9xYt2M
// Serie av videor https://laracasts.com/series/learn-vue-2-step-by-step/episodes/1


// För dropdown: custom directive på items som informerar sin parent så länge den är av rätt
// typ när de klickas eller tas bort eller liknande. Då behöver inte parent bry sig om att
// hitta sina children.
// Kanske användbar: https://forum.vuejs.org/t/how-to-properly-access-components-inside-slot-content/4713/6

