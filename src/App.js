import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import portada from './Portada';
import Navbar from './Navbar';
import about from './About';
import Contact from './Contact';

const App = () => (
<BrowserRouter>

    <Navbar/>
      <Switch>
        <Route exact path = "/" component={portada}/>
        <Route exact path ="/about" component={about}/>
        <Route exact path = "/contact" component={Contact}/>
      </Switch>

</BrowserRouter>

);

export default App;
