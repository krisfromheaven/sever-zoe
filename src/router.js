import Vue from 'vue';
import Router from 'vue-router';


import Index from './views/Index';

Vue.use(Router);

let routes = [
	{
		path: "/",
		component: Index,
		meta: {
			key: 1,
		},
	},
	{
		path: "*",
		component: Index,
		meta: {
			key: 101,
		},
	},
];


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
