
import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import qs from 'querystring'

const NavList = props =>{
	// 防止刷新导致地址栏变长
	const {cid} = qs.parse(props.location.search.slice(1))
	// console.log(props.location.search)
    let c=`?cid=${cid}`
	const [ navs ] = useState([
		{
			id: 1,
			path: `/list/popular${c}`,
            text: '人气'
		},
		{
			id: 2,
			path: `/list/latest${c}&type=latest`,
			text: '最新'
		},
		{
			id: 3,
			path: `/list/sale${c}&type=sell`,
			text: '销量'
		},
		{
			id: 4,
			path: `/list/price${c}&type=price_h`,
			text: '价格',
			icon: 'fa-comment-dollar'
		}
	])
	
	const 	renderLi = () =>{
		return  navs.map( item =>
			 <li key = {item.id}>
				<NavLink to = {item.path} exact>
					 <em>{item.text}</em> {item.icon && <span className= {'fas ' + item.icon}></span>}
				</NavLink>
	    	</li>)
	}

	return (
		<ul className='list-nav-box'>
            { renderLi() }
		</ul>
	)
}

export default NavList