import './App.css';
import Graph from './components/Graph'
// import Globe from 'globe.gl';
import Earth from './components/Earth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WhereWhenYouFly V2
        </p>
        {/* TODO: convert hearder into footer, add copyright thingy :D */}
        <Earth />
      </header>
      {/* make footer component later iykwim */}
      <footer>
        <p>
          Toony Yuan <br />
          Erika Moreno Blackburn <br />
          Eva Liu
        </p>
      </footer>
    </div>
  );
}

export default App;
