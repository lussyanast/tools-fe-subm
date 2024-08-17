import '../sass/main.scss'

import './layout/header'
import './layout/footer'

import './pages/listStory'
import './pages/companyProfile'

import Add from './story/addStory'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import ListStory from './pages/listStory'

const routes = {
    '/': ListStory,
    '/story/addStory.html': Add,
    '/auth/login.html': Login,
    '/auth/register.html': Register
}

const detectRoute = () => routes[window.location.pathname]

window.addEventListener('DOMContentLoaded', async () => {
    const route = detectRoute();
    if (route && typeof route.init === 'function') {
        route.init();
    } else {
        console.error('Route not found or init function is missing:', window.location.pathname);
        // Opsional: Alihkan pengguna ke halaman lain// window.location.href = '/';
    }
});
