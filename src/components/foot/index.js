

import React,{useState} from 'react'

import './index.scss'

import {NavLink} from 'react-router-dom'
 
const TabBar = props =>{
    const [ barLists ] = useState([
		{
			id: 1,
			classname: 'fa-sliders-h',
			text: '首页',
			path: '/home'
		},
		{
			id: 2,
			classname: 'fa-clipboard-list',
			text: '分类',
			path: '/category'
		},
		{
			id: 3,
			classname: 'fa-bullhorn',
			text: '优惠',
			path: '/recommond'
		},
		{
			id: 4,
			classname: 'fa-shopping-cart',
			text: '购物车',
			path: '/shop_cart'
		},
		{
			id: 5,
			classname: 'fa-user-circle',
			text: '我的',
			path: '/mine'
		},
	])

	function renderBar () {
        return barLists.map( item => 
		<li key = { item.id }  >
			<NavLink to= {item.path} >
			   <span className = {'fas '+item.classname} >
			   </span>
			    <em> { item.text }</em>
			</NavLink>	
		</li>)
	}
	return (
		<footer>
			<ul className = 'foot-box'>
				 {
					renderBar()
				 }
			</ul>
		</footer>
	)
}
export default TabBar