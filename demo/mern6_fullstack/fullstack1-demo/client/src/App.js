import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from "./views/Dashboard";
import TestComponent from "./views/TestComponent";
function App() {
  return (
    <BrowserRouter>
    <h1> Song fullstack Demo</h1>
    <Link to="/testapi"> Test backend</Link>
    <Link to="/songs"> Song dashboard</Link>

    <Routes>
      <Route path="/testapi" element={<TestComponent />} />
      <Route path="/songs" element={<Dashboard />} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;
