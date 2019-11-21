import React,{useState,useEffect} from 'react'
import axios from 'axios'

import HotItem from './HotItem'


const HotLists = props =>{
	let [hotMovies,setHotMovies] = useState()
	let [moviesId,setMoviesId] = useState([])
    
	useEffect( () =>{
	 if( hotMovies ) return ;
			// 简单异步，可写可不写
		const fetchData = async () =>{
			const result = await axios({url:'http://localhost:3000/ajax/movieOnInfoList',params:{token:''}})
			setHotMovies(result.data.movieList)
			setMoviesId(result.data.movieIds)
		}
		fetchData()
	})

	return (
		<ul className = 'hot-lists'>
			{
				hotMovies && hotMovies.map( item=>{ if(item){return  <HotItem item= { item } key= {item.id}/>}})
			}
			
		</ul>
	)
}
export default HotLists