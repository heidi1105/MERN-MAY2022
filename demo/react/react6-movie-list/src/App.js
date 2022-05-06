import React, {useState} from 'react'
import ShowDisplay from "./components/ShowDisplay";
import ShowForm from "./components/ShowForm";

// state to store all show history
function App() {
  const [shows, setShows] = useState([])

  const handleNewShow = (newShow) =>{
    setShows([...shows, newShow])
  }

  const handleUpdatedShows =(updatedShows) =>{
    setShows(updatedShows)
  }

  return (
    <div >
      <ShowForm onNewShow = {handleNewShow}/>
      <ShowDisplay shows= {shows} onUpdateShows={handleUpdatedShows }/>
    </div>
  );
}

export default App;
