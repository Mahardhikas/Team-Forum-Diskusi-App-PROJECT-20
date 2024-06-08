import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from './components/LendingPage.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import HomePage from './components/Home.vue';

const routes = [
  { path: '/', component: LandingPage },
  { path: '/login', component: Login, meta: { requiresGuest: true } },
  { path: '/register', component: Register, meta: { requiresGuest: true } },
  { path: '/home', component: HomePage, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
  const token = localStorage.getItem('token');

  if (requiresAuth && !token) {
    next('/login'); // Redirect ke halaman login jika mencoba mengakses halaman yang memerlukan otentikasi tanpa token
  } else if (requiresGuest && token) {
    next('/home'); // Redirect ke halaman home jika sudah login dan mencoba mengakses halaman login atau register
  } else {
    next(); // Lanjutkan ke halaman yang diminta
  }
});

export default router;
