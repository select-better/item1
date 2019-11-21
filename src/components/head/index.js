
import React from 'react'
import './index.scss'


const Tab = props =>{
	function getRoute () {
		 props.history.go( -1 )
		//  props.history.push('/details')
	}
	return (
		<header>
			{/* 左侧的箭头是后面出现的 */}
			 {props.leftFlag && <span className = 'fas fa-chevron-circle-left' onClick = { getRoute }></span>}
			 <h3> {props.location.pathname.split('/').pop()} </h3>
		</header>
	)
}
export default Tab