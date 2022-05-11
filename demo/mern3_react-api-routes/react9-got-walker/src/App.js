import {BrowserRouter, Route, Routes} from "react-router-dom"
import HeaderForm from './components/HeaderForm';
import Character from './views/Character';
import House from './views/House';

function App() {
  const Error =() =>{
    return (
      <fieldset>
        <legend> ERROR PAGE</legend>
      </fieldset>
    )
  }

  return (
    <BrowserRouter>
      <h1> GOT WALKER</h1>
      <HeaderForm />

      <Routes>
        <Route path="/characters/:id" element={<Character />}/>
        <Route path="/houses/:id" element={<House />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
