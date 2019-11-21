
import React,{ useEffect } from 'react'

import './item.scss'

import { Link } from 'react-router-dom'

const HotItem = props =>{
	 const { item } =props
	useEffect( ()=>{
		// console.log(props.item)
	})
	return (
		<li className = 'listLi'>
           
			<Link to ='/details'>
				<div className = 'list-img'>
                     <img src = {item.img.replace('w.h','128.180')} alt =''/>
				</div>
				<div className = 'list-content'>
					<div className ='content-left'>
						<h3>{item.nm}</h3>
                         {
							 item.globalReleased && <p>{'观众评：'} <span>{item.sc}</span></p>
						 }
						 {
							 item.globalReleased===false &&<p><span>{item.wish}</span> {'想看'}</p>
						 }
						<p>主演： {item.star}</p>
						<p>{ item.showInfo }</p>
					</div>
					<div className ='content-right'>
					{/* <Button type="primary" size ='small'>预售</Button> */}  
					{/* a里面不能嵌套a，所以我们不能使用 引用的Button */}
					<button className ={ item.globalReleased && 'btn danger' ||'btn pram'}>{ item.globalReleased && '购票' ||'预售'}</button>
					</div>
				</div>
			</Link>
		
		</li>
	)
}
export default HotItem