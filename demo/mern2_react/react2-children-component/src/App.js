import Container from "./components/Container";
import Header from "./components/Header";


function App() {
  return (
    <fieldset>
      <legend> App.js</legend>
      <h1> Children component demo</h1>
      {/* <Container /> */}
      <Container>
        <p> This is the first child</p>
        <p> This is the second child</p>
        <p> This is the third child</p>
      </Container>

    </fieldset>
  );
}

export default App;
