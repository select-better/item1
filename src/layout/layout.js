
import React,{Fragment,useState,useEffect} from 'react'

import Tab from '../components/head'

import TabBar from '../components/foot'

// import Home from '../pages/home'
import './index.scss'

import RouterComp from '../router.config'

const LayOut = props =>{
	const [leftFlag,changeLeftFlag] = useState( false )

	const [botFlag,changeBotFlag] = useState( true )
	 
	useEffect ( () =>{
        // 路由的确定主要还是要有location.pathname进行判断，可以是最好是在layout进行判断
	     // 除了下面这么写还可以将每个的整个组合进行遍历，但我觉得下面可能会简单些，因为map等都是return不会断开的
        if( props.location.pathname !=='/home/hot' && props.location.pathname !=='/home/coming' ){
			changeLeftFlag( true )
		}else{
			changeLeftFlag( false )
		}

		if( props.location.pathname ==='/mine' ){
			 changeBotFlag( false )
		}else{
			changeBotFlag( true )
		}
		//console.log( 22 )
	},[props.location.pathname])
	
	return (
	    <Fragment>
			<div className= 'layout'>
				 <Tab leftFlag = {leftFlag} {...props}/>
				 {/* <Home/> */}
				 <RouterComp/>
				{ botFlag && <TabBar/>} 
			</div>
		</Fragment>
	)
}

export default LayOut