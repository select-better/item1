import React,{useEffect} from 'react'
import './index.scss'
import HotLists from './HotLists'

import BScroll from 'better-scroll'
const HotComp = props =>{
	useEffect(() => {
	 new BScroll( document.querySelector( '.hot-box'),{
		 click: true
	 })
	}, [])

	return (
		<div className='hot-box' style={{marginTop:' .1rem'}}>
			<HotLists/>
		</div>
	)
}
export default HotComp