import Vue from 'vue'
import Router from 'vue-router'
import Container from '../view/container';
import Home from '../view/home';
import Report from '../view/report';
import Self from '../view/self';
import Order from '../view/order';
import Ssc from '../view/ssc'
import Login from '../view/login';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Container',
            component: Container
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/report',
            name: 'report',
            component: Report
        },
        {
            path: '/self',
            name: 'self',
            component: Self
        },
        {
            path: '/order',
            name: 'order',
            component: Order
        },
        {
            path: '/ssc',
            name: 'ssc',
            component: Ssc
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
