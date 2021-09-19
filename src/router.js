import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue');
const Films = () => import('./views/Films.vue');
const Photos = () => import('./views/Photos.vue');
const NotFound = () => import('./views/NotFound.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: "/",
    name: 'Home',
    component: Home
  },
  {
    path: "/films/:filmid?",
    name: "Films",
    component: Films
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos
  },
  {
    path: '/:catchAll(.*)?',
    name: "NotFound",
    component: NotFound
  },],
  scrollBehavior () {
    //So that when you go to another route it shows you the start of the page
    return { x: 0, y: 0 }
  }
  
})

