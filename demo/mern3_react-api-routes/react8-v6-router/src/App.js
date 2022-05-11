import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
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
    <h1> V6 Router Demo</h1>
    <p>
      Link:
      <Link to="/about" > About</Link> |
      <Link to="/" > Home</Link>| 
      <Link to="/search/whatever/red" > whatever search</Link>     
      <Link to="/pokemon/snorlax" > Snorlax</Link>
    </p>
    <p>
      a-tag:
      <a href="/about"> About</a>|
      <a href="/"> Home</a> |
      <a href="http://google.com">Google</a>
    </p>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/search/:keyword/:colorParam" element={<Keyword />}/>
      <Route path="/pokemon/:pokemonName" element={<DisplayOnLoad />} />
      <Route path="*" element={<Error />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
