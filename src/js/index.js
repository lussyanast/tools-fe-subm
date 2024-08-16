import '../sass/main.scss'

import './layout/header'
import './layout/footer'

import './pages/listStory'
import './pages/companyProfile'
import './story/addStory'

import Login from './pages/auth/login'
import Register from './pages/auth/register'

const routes = {
    '/story/addStory.html': Add,

    '/auth/login.html': Login,
    '/auth/register.html': Register
}

const detectRoute = () => routes[window.location.pathname]

window.addEventListener('DOMContentLoaded', async () => {
    const route = detectRoute()
    route.init()
})
