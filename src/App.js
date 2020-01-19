import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import Home from './components/projects/Home'
import Topnavbar from './components/layout/Topnavbar'
import Create from './components/admin/Create'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import HAdmin from './components/admin/HAdmin'
import AThanks from './components/admin/AThanks'
import Test from './components/projects/Test'
import Error from './components/error/Error'
import basefunc from './config/base';

function App() {
  const base = basefunc("")
  return (
    <BrowserRouter basename={base}>
    <div className="App">
    <Topnavbar />
      <Switch>
        <Route exact path='/' component={Home}/>  
        <Route path={'/test/:id'} component={Test}/>
        <Route path={'/login'} component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/HAdmin' component={HAdmin} />
        <Route path='/AThanks/:id' component={AThanks} />
        <Route path='/create/:id?/:qid?' component={Create} />
        <Route path='/error/:id' component={Error} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;