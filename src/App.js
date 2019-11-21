import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LayOut from './layout/layout';

import { withRouter }  from 'react-router-dom'


function App( props ) {

  return (
    <div className="App"  >
       <LayOut {...props}/>
    </div>
  );
}

export default withRouter(App)
