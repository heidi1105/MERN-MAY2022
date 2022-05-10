import React from "react"
import {BrowserRouter, Link, Routes, Route} from "react-router-dom"
import Keyword from "./components/Keyword"
import PokemonOnLoad from "./components/PokemonOnLoad"

function App() {

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
      <p> Link: 
        <Link to="/">Home</Link>
         | 
        <Link to="about">About</Link> 
         |
         <Link to="search/whatever/teal">Whatever in teal</Link> 
         |
         <Link to="pokemon/snorlax"> Snorlax</Link> 

      </p>            
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="" element={<Home />} />
        <Route path="search">
          <Route path=":keyword/:textcolor" element={<Keyword />} />
        </Route>
        <Route path="/pokemon/:pokemonName" element={<PokemonOnLoad />} />

      </Routes>


    </BrowserRouter>
  );
}

export default App;
