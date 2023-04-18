import React from "react";
import {Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Disciplinas from './Disciplinas';
import Sobre from './Sobre';
import './style.css'

function App() {
  return (
      <>
      <header className="App-header">
        <nav>
          <p> <Link to='/home'>HOME </Link></p>
          <p><Link to='/disciplinas'> Disciplinas oferecidas </Link></p>
          <p><Link to='/sobre/'> Sobre</Link></p>
        </nav>
      </header>

      <main>
        <Switch>
          <Route path='/home' component= {Home}/>
          <Route path='/disciplinas' component= {Disciplinas}/>
          <Route path ='/sobre/:id' component= {Sobre} />
        </Switch>
      </main>
      </>

  );
}

export default App;
