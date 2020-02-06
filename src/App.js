import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle'
import Toolbar from './components/Toolbar'
import Home from './pages/Home'
import Aboutme from './pages/Aboutme'
import Projects from './pages/Projects'
import Notfound from './pages/Notfound'
import {
  Switch,
  Route } from 'react-router-dom'

function App() {
  return (
      <div className="App">
        <GlobalStyle/>
        <Toolbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" component={Aboutme} />
          <Route path="/projects" component={Projects} />
          <Route path="*" component={Notfound} />
        </Switch>     
      </div>
  );
}

export default App;
