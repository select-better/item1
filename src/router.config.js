
import React,{useState} from 'react'

import {Route,Switch,Redirect} from 'react-router-dom'
import Home from './pages/home'
import Category from './pages/category'
import Recommond from './pages/recommond'
import Mine from './pages/mine'

import ShopCart from './pages/shop_cart'

import List from './pages/list'
import Details from './pages/details'
import Error from './pages/error'
import Login from './pages/mine/login'
import Register from './pages/mine/register'


const RouterComp = props =>{
    const [ mRoutes ] = useState([
		{
			id: 1,
			component: Home,
			path: '/home',
		},
		{
			id: 2,
			component: Category,
			path: '/category'
		},
		{
			id: 3,
			component: Recommond,
			path: '/recommond'
		},
		{
			id: 4,
			component: Mine,
			path: '/mine'
		},
		{
			id:5,
			component: ShopCart,
			path: '/shop_cart'
		},
		{
			id:6,
			component: List,
			path: '/list'
		},
		{
			id:7,
			component: Details,
			path: '/details'
		},
		{
			id:8,
			component: Login,
			path: '/login'
		},
		{
			id:9,
			component: Register,
			path: '/register'
		},
		{
			id:10,
			component: Error,
			path: ''
		}
	])

	function renderRoute () {
		return mRoutes.map( item =>
			<Route key = {item.id}  path= {item.path}  component = {item.component}  exact ={ item.exact}></Route>
		)
	}
	return (
		<Switch>
			<Redirect from='/' to='home' exact> </Redirect>
			{/* <Route to= '/home' component = {Home} exact></Route> */}
			{ renderRoute () }
		</Switch>
	)
}

export default RouterComp