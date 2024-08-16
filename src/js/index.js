import '../sass/main.scss'

import './layout/header'
import './layout/footer'

import './pages/listStory'
import './pages/companyProfile'

import Add from './story/addStory'
import Login from './pages/auth/login'
import Register from './pages/auth/register'

const routes = {
    '/story/addStory.html': Add,

    '/auth/login.html': Login,
    '/auth/register.html': Register
}
