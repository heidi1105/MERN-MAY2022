import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import DisplayOnLoad from "./components/DisplayOnLoad"
import Keyword from "./components/Keyword"

function App() {

  const Home =()=>{
    return(
      <fieldset>
        <legend> Home </legend>
      </fieldset>
    )
  }

  const About =()=>{
    return(
      <fieldset>
        <legend> About </legend>
      </fieldset>
    )
  }

  const Error =()=>{
    return(
      <fieldset>
        <legend> Error </legend>
      </fieldset>
    )
  }


  return (
    <BrowserRouter>
    <h1> V5 Router Demo</h1>
    <p>
      Link:
      <Link to="/about" > About</Link> |
      <Link to="/" > Home</Link>|      
      <Link to="/search/whatever/red" > whatever search</Link>|
      <Link to="/pokemon/snorlax" > Snorlax</Link>
    </p>
    <p>
      a-tag:
      <a href="/about"> About</a>|
      <a href="/"> Home</a> |
      <a href="http://google.com">Google</a>
    </p>

    <Switch>
      <Route exact path="/"> <Home />
      </Route>
      <Route exact path="/about">  <About />
      </Route>
      <Route exact path="/search/:keyword/:colorParam">
        <Keyword />
      </Route>
      <Route exact path="/pokemon/:pokemonName">
        <DisplayOnLoad />
      </Route>
      <Route path="/"> <Error /></Route>
      

    </Switch>
    </BrowserRouter>
  );
}

export default App;
