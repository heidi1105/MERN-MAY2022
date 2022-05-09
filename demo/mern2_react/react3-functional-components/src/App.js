import FunctionalForm from "./components/FunctionalForm";
import FunctionalStateComponent from "./components/FunctionalStateComponent";
import FunctionalTVShow from "./components/FunctionalTVShow";

function App() {
  return (
    <div>
      <FunctionalForm />
      <FunctionalStateComponent like={1000}/>
      <FunctionalTVShow title="The Witcher" episodes ={25} hashtags={["Fantasy", "hmmmmmmm", "cool story"]} />
    </div>
  );
}

export default App;

// title, episodes, hashtags
// FunctionalTVShow({title: "The Witcher", episdoes: 25, hashtags.....})