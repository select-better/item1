
import React from 'react'
import './index.scss'
import NavList from './NavList'
import {ListRouters} from './ListComp'

const List = props =>{


	return (
		<div className = 'list-box'>
			<NavList { ...props }/>
			<ListRouters { ...props }/>
		</div>
	)
}
export default List