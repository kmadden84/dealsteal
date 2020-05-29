import React from 'react';
import './index.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
//import NoResults from './components/NoResults';
import SearchPage from './components/SearchPage';
import Graph from './components/Graph';


const App = ({match}) => {

return (
<BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props)=><SearchPage {...props}  />} />
     <Route path={`${match.path}graph`} render={(props)=><Graph {...props}/>} />
       {/* <Route path={`${match.path}bestbuy`} render={(props)=><SearchPage data="2" {...props}/>} />
      <Route path={`${match.path}walmart`} render={(props)=><SearchPage data="3" {...props}/>} />
      <Route path={`${match.path}toysrus`} render={(props)=><SearchPage data="4" {...props}/>} />
      <Route path={`${match.path}ebgames`} render={(props)=><SearchPage data="5" {...props}/>} />
      <Route path={`${match.path}thinkgeek`} render={(props)=><SearchPage data="6" {...props}/>} />
      <Route path={`${match.path}oneplus`} render={(props)=><SearchPage data="7" {...props}/>} />
      <Route path={`${match.path}amazonjp`} render={(props)=><SearchPage data="8" {...props}/>} />
      <Route path={`${match.path}amazoncom`} render={(props)=><SearchPage data="9" {...props}/>} /> */}
      {/* <Route path='*' exact={true} component={NoResults} /> */}
      </Switch>
</BrowserRouter>
  )
  }



export default App;