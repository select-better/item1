
import React from 'react'

import './index.scss'

import { NavLink } from  'react-router-dom'
const Navs = props =>{

	return (
		<div className = 'nav-list'>
             <div> 杭州 </div>
			 <ul className = 'middle-nav-list'>
				 <li>
					 <NavLink to = '/home/hot' > 正在热映</NavLink>
				 </li>
				 <li>
					 <NavLink to = '/home/coming' > 即将上映</NavLink>
				 </li>
			 </ul>
             <span className = 'fas fa-paper-plane'>

			 </span>
		</div>
	)
}

export default Navs