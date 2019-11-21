
import React from 'react'
import './index.scss'
import Banner from './banner'
import Navs from './navLists'
import { Route,Switch,Redirect } from 'react-router-dom'
// import { Button } from 'antd-mobile';
import HotComp from './navLists/hotList'
import ComingComp from './navLists/comingList'


const Home = props =>{
	return (
		<div className = 'home-box'>
			<Banner/>
			<Navs/>
			<Switch>
				<Redirect from='/home' to='/home/hot' exact/>
				<Route path='/home/hot' component ={HotComp} exact></Route>
			    <Route path='/home/coming' component ={ComingComp} exact></Route>
			</Switch>
			
		</div>
	)
}
export default Home