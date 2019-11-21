

import React,{ useState,useContext } from 'react'

import { List, Stepper } from 'antd-mobile';

import FlagContext from './Context'

const NumChange = props =>{
	let [ num,setNum ] = useState( props.num )
	
	const context = useContext(FlagContext)

	function getGoods (){
		return JSON.parse(localStorage.getItem( 'goods' ))
	}
	function onChange( val ) {
		setNum( val )
		props.setNum( val, props.id )
		let f = true
		 getGoods ().map( item =>{
			if( item.id == props.id){
                 f = item.flag
			}
		}) 
		if( f ){
			context.getNum();
			context.getPrice();
		}
	}
	return <List.Item
			wrap
			extra={
				<Stepper
				style={{ width: '100%', minWidth: '100px' }}
				showNumber
				max={10}
				min={1}
				value={ num }
				// readOnly
				onChange={ onChange}
				/>}
			>
			数量
		</List.Item>
	
}
export default NumChange