import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import React from 'react';
import Home from './components/Home';
import DisplayPets from './components/DisplayPets';
import App from './components/App';


// ReactDOM.render(<App/>,
//   document.getElementById('app'));

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/displaypets" component={DisplayPets}/>
    </Route>
  </Router>
), document.getElementById('app'));
