
import React,{ useState,useEffect,useContext } from 'react'

// import { List, Stepper } from 'antd-mobile';

import NumChange from './NumChange.js'

 import  FlagContext from './Context'

const GoodsItem = props =>{
	
	const context = useContext( FlagContext )

	let [ goods,setGoods ] = useState ([])
	// 用一个数据装儿子穿过来的
	// let [ num,setNum ] =useState( 0 )
	 // 遍历一下商品，将旗子全变
    function aboutFlag ( f ) {
		//console.log( f )
        if( f ){
			// const goods = getGoods ();
			// 直接设定goods，不用set，这样也是行的
			 goods.map( item => item.flag = true)
			//console.log(goods)
			saveCoods ( goods )
			// setGoods( goods )
		}else{
			// const goods = getGoods ();
			goods.map( item => item.flag = false)
			saveCoods ( goods )
			// setGoods( goods )
		}
	}

	useEffect(() => {
		// console.log( context.op_className )

		// 加上点击后还是判断一下相应的classname，这样才能区分出来
		if( context.op_className == 'all-input'){
			// console.log( 1 )
			aboutFlag ( context.flag )
		}
		if( goods.length == 0){
		    setGoods( getGoods () )
		 } 
	
		context.getFlag()
		context.getNum()
		context.getPrice()

	},[context.flag])
	// 关于本地存储 
	function getGoods (){
		return JSON.parse(localStorage.getItem( 'goods' ))
	}
	function saveCoods ( val ) {
		localStorage.setItem('goods',JSON.stringify(val))
	 }
	 //  关于复选框点击后的事件
	 function changeFlag( v ) {
		goods.map( item =>{
			if(item.id == v){
				item.flag = ! item.flag
			}
		})
		saveCoods ( goods )
		setGoods( getGoods () )

		context.getFlag()
		context.getNum()
		context.getPrice()
		context.setClassName( null )
	 }

	 function setNum ( a,b ){
		goods.map( item =>{
			if(item.id == b){
				item.num = a
			}
		})
		saveCoods ( goods )
		setGoods( getGoods () )
	 } 

	 function get () {
		  //用来迷惑和骗这个react
		//   console.log( 11 )
	 }
    function renderLi () {
        return goods.map( item =>
		                 <li key = { item.id }>
							 <div className = 'list-top'>
								 <div className = 'check-box'>
                                    <input type= 'checkbox' checked = { item.flag } onChange = { get } onClick = { () =>{changeFlag( item.id ) }}  />
								 </div>
								<div className = 'goods-img'>
									<img src = { item.img }/>
								</div>
								<div className = 'goods-des'>
									<h3> { item.title }</h3>
								</div>

							 </div>
                             <div className = 'list-bottom'>
								<div className = 'goods-price'>
									<h3> 单价：{ (+ item.price).toFixed(2) } 元</h3>
								</div>
								<div className = 'goods-add'>
								    <NumChange  num = { item.num }  setNum = { setNum } id={ item.id }/>
								</div>
							 </div>
		                </li>)
	}
    return (
		<ul className = 'Goods-item-box'>
			{ renderLi() }
		</ul>
	)
}

export default GoodsItem