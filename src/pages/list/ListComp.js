
import React,{ useState } from 'react'

import {Switch,Redirect,Route} from 'react-router-dom'

import  { WithData } from '@/hoc'

import ViewList from './ViewList'

//各个组件和高级组价包装
 const PopularComp = props =>{
	
	return (
		<div className = 'list-container'>
			<ViewList lists = { props.Data }/>
		</div>
	)
}

const PopularHoc = WithData( PopularComp )

 const LatestComp = props =>{
	
	return (
		<div className = 'list-container'>
			<ViewList lists = { props.Data }/>
		</div>
	)
}

 const LatestHoc = WithData( LatestComp )
 const SaleComp = props =>{
	
	return (
		<div className = 'list-container'>
		    <ViewList lists = { props.Data }/>
	    </div>
	)
}

const SaleHoc = WithData( SaleComp )
 const PriceComp = props =>{
	
	return (
		<div className = 'list-container'>
			<ViewList lists = { props.Data }/>
		</div>
	)
}
const PriceHoc = WithData( PriceComp )

export const ListRouters = props =>{
	const [ listnum ] = useState( [
		{
			id: 1,
			component: PopularHoc,
			path: '/list/popular'
		},
		{
			id: 2,
			component: LatestHoc,
			path: '/list/latest'
		},
		{
			id: 3,
			component: SaleHoc,
			path: '/list/sale'
		},
		{
			id: 4,
			component: PriceHoc,
			path: '/list/price'
		},
	])
	 
	const renderListRouter = () =>{
		return listnum.map( item =>(
			<Route path = {item.path} component = {item.component} key = { item.id } exact = { item.exact }></Route>
		))
	}
	return (
		<Switch>
			{/* <Redirect from ='/list/popular' to =  exact/>  */}
            { renderListRouter() }
		</Switch>
	)
}