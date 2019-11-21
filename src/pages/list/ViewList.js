
import React from 'react'
import { Link } from 'react-router-dom'
import Lazyload from 'r-img-lazyload';


const ViewList = props =>{
	 
	function  renderLi() {
		
		return (
			props.lists && props.lists.map( item =>{
				
								const config = {
									options: {
										error: '',
										loading: require('assets/load.jpg')
									},
									src: item.pic
								};


			                    return  <li key = { item.id }>
										  <Link to = {{
											  pathname: '/details',
											  search: `?id=${item.id}&img=${item.pic}&title=${item.d_title}&price=${item.jiage}&f_price=${item.yuanjia}&flag=true`
										  }}>
                                               <div className= 'list-img-box'>
											          <Lazyload {...config} />;
											   </div>
											   <div className = 'list-content-box'>
                                                    <h3> { item.d_title } </h3>
													<div className = 'list-content-main'>
                                                         <div className = 'list-conent-left'>
                                                            <p><span>预售价</span> <em> { '￥'+item.yuanjia } </em></p>
															<p className ='dif-color'><span>到手</span> <em style={{ fontSize: '.16rem' }}> { item.jiage } </em></p>
														 </div>
														 <div className = 'list-conent-right'>
														    <p><span>已售</span> <em className ='dif-color'> { item.xiaoliang } </em> 件</p>
															<p className ='dif-color rect'> { item.quan_jine } 元券</p>
														 </div>
													</div>
											   </div>
										  </Link>
									  </li>
			}
			)
		)
	 }
	return (
		<ul className = 'view-list-box'>
			{ renderLi() }
		</ul>
	)
}

export default ViewList