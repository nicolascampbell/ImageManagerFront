import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('./views/Home.vue');
const Films = () => import('./views/Films.vue');
const Film = () => import('./views/Film.vue');
const Photos = () => import('./views/Photos.vue');
const Photo = () => import('./views/Photo.vue');
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
    path: "/film/:filmid",
    name: "Film",
    component: Film
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos
  },
  {
    path: "/photo/:photoid",
    name: "Photo",
    component: Photo
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

