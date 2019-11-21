
import React,{useEffect,useState} from 'react'

import './index.scss'

import {Toast} from 'antd-mobile'
import { Link } from 'react-router-dom'

import { addCookie,searchCookie,reduceCookie } from 'utils/cookies'


const  Register = props =>{
     // 还是稳点搞个cookie
	const [ f,setF ] = useState()

	useEffect ( () =>{
		setF(searchCookie('token'))
		if( f ){
			props.history.push('/mine')
		}
	}) 

	function getName ( val ) {
		return localStorage.getItem( 'user' )? JSON.parse(localStorage.getItem( 'user' )).some( item => item.username ==val):false
	}

	function checkName () {
		if( document.querySelector('.register-name').value != '' ){

			if( getName(document.querySelector('.register-name').value) ){		
				document.querySelector('.register-name-show').innerHTML = '账号已存在，请重新输入'
			}else{
			   document.querySelector('.register-name-show').innerHTML = '账号可用'
			}
		}else{
			document.querySelector('.register-name-show').innerHTML = '账号不能为空'
		}
   }
	
    function getNameIn () {
		if( document.querySelector('.register-name').value != '' && document.querySelector('.register-pass').value != ''){
			if( getName(document.querySelector('.register-name').value) === false){
				let arr=JSON.parse(localStorage.getItem( 'user' ))||[]
				let obj = {
					 username: document.querySelector('.register-name').value,
					 password:document.querySelector('.register-pass').value
				 }
				arr.push( obj )
				localStorage.setItem( 'user',JSON.stringify(arr) )

				Toast.success('注册成功 !!!', 2);
				setTimeout( () =>{
                    props.history.push('/login')
				},2300)

			}else{
				Toast.fail('账号有误 !!!', 1);
			}
		}else{
			Toast.fail('不能有空 !!!', 1);
		}
	}

	return (
		<div className = 'register-box'>
			<h2>注册</h2>
			<div className = 'name-box'>
				账号： <input type = 'text' onBlur = { checkName } className='register-name'/>
				<p className = 'register-name-show'></p>
			</div>
			<div className = 'pass-box'>
				密码： <input type = 'password' className='register-pass'/>
				<p></p>
			</div>
			已经注册账号？ <Link to = '/login'>登录</Link>
			<div>

			<button type= 'button' className = 'register-in' onClick = { getNameIn}> 注册 </button>
			</div>
		</div>
	)
}
export default Register