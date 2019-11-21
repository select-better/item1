
import React,{ useState,useEffect } from 'react'
import './index.scss'

import ShowGoods from './ShowGoods'

import FlagContext from './Context'

const ShopCart = props =>{
	let [ flag,setFlag ] = useState( true )
	let [ num,setNum ] = useState( 0 )
	let [ price,setPrice ] = useState( 0 )
	let [ op_className,setOp_className ] = useState( null )//设置一下目标点击的class名称
	//  let op_className = null   /
    function setClassName( val ){
		setOp_className( val )
	}


	// 关于本地存储 
	function getGoods (){
		return JSON.parse(localStorage.getItem( 'goods' ))
	}
	function saveGood ( val ) {
		localStorage.setItem('goods',JSON.stringify(val))
	 }
	 //得到金额，旗子，数量等
	 function getFlag () {
		 let f= true
		if( getGoods() ){
			f= ! getGoods().some( item => item.flag ===false )
		}
		 setFlag( f )
	 }
	 
	//  console.log( getGoods() )
	 function getNum () {
        let num = 0
		 getGoods() && (getGoods().map( item => {
			if( item.flag === true || item.flag === 'true'){   // 有些时候变成字符，可能是存储的问题
				num += item.num
			}
		}))
		setNum( num )
	 }

	 function getPrice () {
		let price=0
		 getGoods() && (getGoods().map( item => {
			if( item.flag === true || item.flag === 'true'){
				price += item.num*item.price
			}
		}))
		setPrice( price.toFixed(2) )
		// getNum()
		// getPrice()
	 }
	 
	 // 点击将旗子变反

     function getChange () {
		 let f = flag 
		setFlag( !f )
	 }

	 useEffect ( () =>{
		  getFlag ()
		  getNum ()
		  getPrice ()
	 },[ getGoods()])

	return (
		<div className = 'shop-cart-box'>
			<FlagContext.Provider value = { { flag,num,price,getNum,getPrice,getFlag,getChange,op_className,setClassName } }>
			    <ShowGoods/>
			</FlagContext.Provider>
		</div>
	)
}
export default ShopCart