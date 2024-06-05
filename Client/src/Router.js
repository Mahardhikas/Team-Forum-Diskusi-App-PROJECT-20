// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LendingPage.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import { fa0 } from '@fortawesome/free-solid-svg-icons';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: Login },
  { path: '/register', component: Register}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;