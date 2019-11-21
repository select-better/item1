
import React,{ Component } from 'react'

import request from 'utils/request'

import qs from 'querystring'

import BScroll from 'better-scroll'

// import { Toast } from 'antd-mobile'



export const WithData = Comp =>{
	return class _ extends Component{
		constructor ( props ) {
			super( props )
			this.state = {
				data :[]
			}
		}
		
		async componentDidMount () {
			console.log( )
			const serchData = qs.parse(this.props.location.search.slice(1))
			const result = await request({
				url: 'index.php',
				params:{
					r: 'class/cyajaxsub',
					page: 1,
					cid: serchData.cid,
					px: serchData.type?serchData.type:'r',
					cac_id: '',
				}
			})
			this.setState({
				data: result.data.data.content
			})
            //创建滚轮实例
			setTimeout( () =>{
                new BScroll( '.list-container',{
					click: true
				})

				
			},0)
		}
	   

		render () {
			const {data} = this.state

		
            return <Comp Data = { data }/>
		}
	}
}
