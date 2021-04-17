import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import MainPage from '@/components/mainpage'


Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path : '/',
            name : 'hello',
            component : hello
        },
        {
            path : '/mainpage',
            name : 'MainPage',
            component : MainPage
        },
    ]
})