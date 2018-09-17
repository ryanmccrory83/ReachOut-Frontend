import Vue from 'vue';
import Router from 'vue-router';
import Login from '../Views/Login';
import Home from '../Views/Home';
import Deploy from '../Views/Deploy';
import Chats from '../Views/Chats';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/deploy',
      name: 'Deploy',
      component: Deploy,
    },
    {
      path: '/chats',
      name: 'Chats',
      component: Chats,
    },
  ],
})
