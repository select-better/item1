
import React,{useEffect,useState} from 'react'

import './index.scss'
import {Toast} from 'antd-mobile'
import { Link } from 'react-router-dom'

import { addCookie,searchCookie,reduceCookie } from 'utils/cookies'
// import { parse } from 'url'


const  Login = props =>{
	const [ f,setF ] = useState()
	const [ val ] = useState()
	useEffect ( () =>{
		setF(searchCookie('token'))
		if( f ){
			props.history.push('/mine')
		}
	}) 
	 
	function getName ( val ) {
		return localStorage.getItem( 'user' )? JSON.parse(localStorage.getItem( 'user' )).some( item => item.username ==val):false
	}
	function getPassword ( val ){
		return localStorage.getItem( 'user' )? JSON.parse(localStorage.getItem( 'user' )).some( item => item.password
			 ==val):false
	}
	// 失去焦点 判断账号
	function checkName () {
         if( getName(document.querySelector('.name').value) ){		
			 document.querySelector('.name-show').innerHTML = '账号输入正确'
		 }else{
			document.querySelector('.name-show').innerHTML = '账号输入错误'
		 }
	}
	 // 判断账号和密码是不是正确
   function getCheck () {

	if( getName(document.querySelector('.name').value) && getPassword(document.querySelector('.pass').value) ){
		//存储7天
		addCookie('token',parseInt(Math.random()*10000),7);
		Toast.success('login success!!! 即将跳转首页', 2);
		setTimeout( () =>{
			props.history.push('/home')
		},2300)
	}else{
		Toast.offline('登录失败 !!!', 2);
	}
   }
	return (
		<div className = 'login-box'>
			<h2>登录</h2>
			<div className = 'name-box'>
				账号： <input type = 'text' onBlur = { checkName } className='name'/>
				<p className = 'name-show'></p>
			</div>
			<div className = 'pass-box'>
				密码： <input type = 'password' className='pass'/>
				<p></p>
			</div>
			还没有账号？ <Link to = '/register'>注册</Link>
			<div>

			<button type= 'button' className = 'get-in' onClick = { getCheck }> 登录 </button>
			</div>
		</div>
	)
}
export default Login