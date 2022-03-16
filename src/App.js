import { useState } from 'react';
import {BrowserRouter , Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {

  const [theUserIsLog, setUserIsLog] = useState(false)
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <button onClick={()=>setUserIsLog(!theUserIsLog)}>{theUserIsLog?"Log Out":"Log In"}</button>
    </div>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/About/:id/:product" component={About}/>

        <Route path="/Profile">
          <Profile  theUserIsLog={theUserIsLog}/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}


export default App;