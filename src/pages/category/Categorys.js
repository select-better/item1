
import React from 'react'

import { Tabs } from 'antd-mobile';

import { Link } from 'react-router-dom';

import Lazyload from 'r-img-lazyload';


export default class CategoryComp extends React.Component {
  constructor (props){
    super(props)
    this.state ={

    }
  }

  renderDetails = tab =>{
    return (
       <ul className ='category-list'>
       {

          tab.map(item =>  
              {  const config = {
                  options: {
                      error: require('assets/error.jpg'),
                      loading: require('assets/load.jpg')
                  },
                  src: item.img
              };
              return  <li key={item.api_cid}>
              <Link  to={{
                      pathname: "/list/popular",
                      search: `?cid=${item.api_cid}`,
                    }}
              >
                  <Lazyload {...config} />
                  <span>{item.name}</span>
              </Link>
               </li>
            }
         )
         
       }
       </ul>
    )
  }

  renderLists = tab =>{
       //console.log( tab )
       return (
         <div className='category-lists' key ={tab.name}>

             <h3>{tab.name}</h3>
              { this.renderDetails(tab.list)}
         </div>
       )
       
  }
  
  renderContent = tab =>{
    //console.log(tab)
    return (
    <div style={{  backgroundColor: '#fff' }}>

      { tab.banner_img && <div className = 'banner_img'><a href={ tab.banner_url }><img src = { tab.banner_img }/></a></div>}
      { tab.floors.map(item =>this.renderLists(item))}
    </div>);
  }

render() {
  const {categorys} = this.props
  // const tabs = categorys.reduce( (prev,next) =>{
  //     prev.push({title:next.name})
  //     return prev
  //      },[])   这个是有title 所以我们应该加上title这个属性，这样它是能默认遍历的
  categorys.map( item =>item.title = item.name)
  return (
      <Tabs 
      tabs={categorys}
      renderTabBar={props => <Tabs.DefaultTabBar {...props} page={14}  />}
      tabBarPosition="left"
      tabDirection="vertical"
      // style ={{height:'100%'}}
      tabBarActiveTextColor = 'red'
      tabBarBackgroundColor ='#efefef'
     
       >
        {this.renderContent}
      </Tabs>
     
   
  );
}
}

