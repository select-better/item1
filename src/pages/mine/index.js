
import React,{useEffect,useState} from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

import { addCookie,searchCookie,reduceCookie } from 'utils/cookies'
 
const Mine = props =>{
	const [state, setstate] = useState( true)

	useEffect(() => {
	const f = searchCookie('token')
	      if( f ){
			 setstate( false)
		  }else{
			 setstate( true)
		  }
	},[])
	
	return (
		<div className = 'mine-box'>
			Mine
			{
				state &&
				<div><p> <Link to = 'login'> 登录 </Link></p> <p> <Link to = 'register'> 注册 </Link></p></div>
				
			}
			
		</div>
	)
}
export default Mine