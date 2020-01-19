import React from 'react';
import './App.css';
import { Switch, Route, HashRouter} from 'react-router-dom'
import Home from './components/projects/Home'
import Topnavbar from './components/layout/Topnavbar'
import Create from './components/admin/Create'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import HAdmin from './components/admin/HAdmin'
import AThanks from './components/admin/AThanks'
import Test from './components/projects/Test'
import Error from './components/error/Error'

function App() {
  return (
    <HashRouter>
    <div className="App">
    <Topnavbar />
      <Switch>
        <Route exact path='/' component={Home}/>  
        <Route exact path='/test/:id' component={Test}/>
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/HAdmin' component={HAdmin} />
        <Route exact path='/AThanks/:id' component={AThanks} />
        <Route exact path='/create/:id?/:qid?' component={Create} />
        <Route exact path='/error/:id' component={Error} />
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;