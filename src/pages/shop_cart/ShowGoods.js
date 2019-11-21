
import React,{ useEffect } from 'react'

import { Link } from 'react-router-dom'

import { searchCookie } from 'utils/cookies.js'

import GoodsItem from './GoodsItem'
import AllSelect from './AllSelect'

import BScroll from 'better-scroll'

const  ShowGoods = props =>{
	  
	 useEffect ( () =>{
		 setTimeout( () =>{
             new BScroll( '.goods-container',{
				 click: true
			 } )
		 },0)
	 })
	  // 关于本地存储 
		function getGoods (){
			return JSON.parse(localStorage.getItem( 'goods' ))
	   }
	
     //当有本地有token时候，
	if( searchCookie('token') ){
		const f = getGoods ()
		if( f ){
			return (
				<div className = 'goods-container'>
				    <GoodsItem/>
					<AllSelect/>
			    </div>
			)
		}else{
             //没有cookie也提醒一下
			return (
				<div className = 'goods-container' >
					<div className ='sor-container'>
				    <h4>不好意思，客官，购物车空空如也！可以先去<Link to = '/category'> 分类 </Link></h4>
					</div>
			    </div>
			)
		}
	}else{
		return (
			<div className = 'goods-container'>
				<div className = 'sor-container'>
					<h4>不好意思，客官，您还未登录，请先<Link to = '/login'> 登录 </Link></h4>
					<h4>如果没有账号，请先<Link to = '/register'> 注册 </Link></h4>
				</div>
			</div>
		)
	}
	
}

export default ShowGoods