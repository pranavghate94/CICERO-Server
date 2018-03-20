import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Report from './Report'
import Home from './Home'


export default function App(props){

  return(
    <div>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/report/:sessionid" component={Report}/>
      </Switch>
    </div>
  )

}
