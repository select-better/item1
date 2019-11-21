
import React,{ useState,useEffect } from 'react'
import './index.scss'
import CategoryComp from './Categorys'

import request from 'utils/request'

const Category = props =>{
	let [ categorys,setCategorys ] = useState([])

	useEffect(() => {
	async function getDate() {
		const result=await request({
			url:'/index.php',
			params:{
				r: 'class/category',
                type: 1
			}
		})
		setCategorys(result.data.data.data)
	}
	getDate()

	}, [])
	return (
		<div className = 'category-box'>
			{ categorys.length!==0 && <CategoryComp categorys = {categorys}/>}
		</div>
	)
}
export default Category