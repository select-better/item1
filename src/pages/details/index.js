
import React from 'react'
import './index.scss'

import DetailsShow from './DetailsShow'

const Details = props =>{
	
	return (
		<div className = 'details-box'>
			<DetailsShow { ...props}/>
		</div>
	)
}
export default Details