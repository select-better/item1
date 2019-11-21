
import React,{ useState,useEffect } from 'react'

import qs from 'querystring'

import { Button,List, Stepper,Toast } from 'antd-mobile'

import { searchCookie } from 'utils/cookies.js'



const DetailsShow  = props =>{
	let [ details,setDetails ] =  useState( );
	let [ num,setNum ] =  useState( 1 );

	useEffect ( () =>{
		if( details ) return;
		 const data = qs.parse( props.location.search.slice( 1 ) ) 
		// const data =1
		setDetails( data )
	}) 
	// 关于本地存储 
	function getGoods (){
         return JSON.parse(localStorage.getItem( 'goods' ))
	}
	function saveGood ( val ) {
		localStorage.setItem('goods',JSON.stringify(val))
	}
	
	// 按钮点击后判断token

	function hasToken () {
		const f = searchCookie( 'token' )
		if( f ){
			//有token就在这里
			const flag = getGoods()
			if(flag){
				//本地有商品
				 // 看是不是一样的
				const f= flag.some( item => item.id===details.id)
				if( f ){
				    //一样，直接数量加
				    flag.map( item => {
						if( item.id === details.id ){
							item.num += num
						}
					})
				}else{
					//不一样，整个加
					details.num = num;
					flag.push(details);
				}
				saveGood ( flag )
				
			}else{
				//本地没有商品
				let arr = [];
				details.num = num
				arr.push(details)
				saveGood ( arr )
			}
			Toast.success('数据添加成功，请去购物车处理', 2);
		}else{
			//没有就去登录界面
			 Toast.success('客官，您还没有登录，即将跳转登录', 3);
             setTimeout( () =>{
				 props.history.push('/login')
			 },3300)
		}
	}
	 
	//改变数量
	function changeNum ( val ) {
         setNum( val )
	}
	const renderDetails = () =>{
		const { title,id,img,price,f_price } = details
		return 	(<div key={id} className = 'details-main'>
					<img src = { img } ></img>
					<h3>{ title } </h3>
					<p>原价: ￥{f_price}</p>
					<p>现价: ￥{price}</p>
					<List.Item 
					    wrap
						extra={
							<Stepper
							style={{ width: '100%', minWidth: '100px' }}
							showNumber
							max={10}
							min={1}
							value={ num }
							 onChange={ changeNum}
							/>}
						>
						 加入数量
						</List.Item>
                    <Button type = 'primary' onClick = { hasToken }> 加入购物车 </Button>
			    </div>)
	}
	return (
		<div className = 'details-container'>
			{
				details && renderDetails () 
			}
		</div>
	)
}
export default DetailsShow