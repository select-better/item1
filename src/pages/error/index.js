
import React from 'react'
import './index.scss'

const Error = props =>{
	return (
		<div className = 'error-box'>
			
			<img src= {require('assets/error.jpg')} style= {{ width: '100%',height:'100%'}}/>
		</div>
	)
}
export default Error