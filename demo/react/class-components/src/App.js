import TVShowCard from './components/TVShowCard';


function App() {
  return (
    <div>
      <h1> All TV Shows</h1>
      <TVShowCard 
        title="Snowpiercer" 
        description="Very awesome" 
        episodes ={ 30 } 
        hasWatched={true} 
        hashtags={["Cool", "Very cold", "A lot of fighting"]} />
      <TVShowCard title="Last Kingdom" description="About UK history" episodes ={ 60 }  
        hasWatched={true} hashtags={["UK", "Make me read history", "A lot of fighting"]}/>
      <TVShowCard title="Breaking Bad" description="Love it" episodes ={ 400 }  
        hasWatched={false} hashtags={["Cool", "he has cancer", "A lot of chemistry"]}/>
    </div>
  );
}

export default App;

// props : to pass info from parent to children