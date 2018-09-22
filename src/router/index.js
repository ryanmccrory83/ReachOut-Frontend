import Vue from 'vue';
import Router from 'vue-router';
import Login from '../Views/Login';
import Home from '../Views/Home';
import Deploy from '../Views/Deploy';
import Chats from '../Views/Chats';
import Contacts from '../Views/Contacts';
import Callback from '../components/Callback';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts,
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
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    }
  ],
})
