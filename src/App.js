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
        <Route path={base + 'test/:id'} component={Test}/>
        <Route path={base + 'login'} component={SignIn} />
        <Route path={base + 'signup'} component={SignUp} />
        <Route path={base + 'HAdmin'} component={HAdmin} />
        <Route path={base + 'AThanks/:id'} component={AThanks} />
        <Route path={base + 'create/:id?/:qid?'} component={Create} />
        <Route path={base + 'error/:id'} component={Error} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;