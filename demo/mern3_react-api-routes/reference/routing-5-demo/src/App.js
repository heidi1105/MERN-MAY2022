import React from 'react'
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom'
import Keyword from './components/Keyword'
import PokemonOnLoad from './components/PokemonOnLoad'

function App() {
  const history = useHistory()

  const About = (props) =>{
    return(
      <fieldset>
        <legend> About</legend>
      </fieldset>
    )
  }

  const Home = (props) =>{
    return(
      <fieldset>
        <legend> Home</legend>
      </fieldset>
    )
  }


  return (
    <BrowserRouter>
      <h1> React Router demo</h1>
      <p> Link: 
        <Link to="/">Home</Link>
         | 
        <Link to="/about">About</Link> 
         |
         <Link to="/search/whatever/teal">Whatever in teal</Link> 
         |
         <Link to="/pokemon/snorlax"> Snorlax</Link> |

      </p>      
      <p> A tag: 
        <a href="/"> Home</a>
        <a href="/about"> About</a>
        <a href="http://google.com"> Google</a>
      </p>  
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search/:keyword/:textcolor?">
          <Keyword />
        </Route>
        <Route path="/pokemon/:pokemonName">
          <PokemonOnLoad />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
