import {createRouter, createWebHashHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import Surveys from "../views/Surveys.vue";
import store from "../store";
import AuthLayout from "../components/AuthLayout.vue";

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    // name: 'Dashboard',
    component: DefaultLayout,
    meta: {requiresAuth: true},
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/surveys',
        name: 'Surveys',
        component: Surveys
      },
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    redirect: '/login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' })
  } else if (store.state.user.token && (to.name === 'Login' || to.name === 'Register')) {
    next({ name: 'Dashboard'});
  } else {
    next()
  }
})


export default router;
