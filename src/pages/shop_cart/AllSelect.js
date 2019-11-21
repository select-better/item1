
import React,{ useState,useEffect,useContext  } from 'react'

import FlagContext from './Context'

const AllSelect = props =>{
	
	const info = useContext( FlagContext )
	// console.log( flag )

	function alit ( e ) {
		// console.log( 3 )
		//骗人的
		// console.log( e.target.className )
		info.setClassName( e.target.className ) 
	}
	// 点击后旗子发生变化，重新计算数量和旗子
	useEffect(() => {
		info.getNum()
		info.getPrice()
	})
	return <div className = 'select-box'>
               <div className ='select-left'>
                     <p><input className = 'all-input' type= 'checkbox' onChange = { alit}  checked = { info.flag } onClick = { info.getChange }/> 全选</p>
			   </div>
			   <div>
				   <span>总价：￥{ info.price }</span><em></em> <button type ='button' >结算<span>({ info.num })</span></button>
			   </div>
	      </div>
}

export default AllSelect