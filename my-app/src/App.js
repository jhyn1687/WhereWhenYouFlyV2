import './App.css';
import Graph from './components/Graph'
// import Globe from 'globe.gl';
import Earth from './components/Earth'
import Airport from './components/Airport'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          WhereWhenYouFly V2
        </p>
        {/* <Graph /> */}
        {/* <Globe 
            showGraticules={true}
            // labelsData={landingSites}
            labelText="label"
            labelSize={1.7}
            labelDotRadius={0.4}
            // labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
            // labelColor={d => colorScale(d.agency)}
            labelLabel={d => `
              <div><b>${d.label}</b></div>
              <div>${d.agency} - ${d.program} Program</div>
              <div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
            `}
            onLabelClick={d => window.open(d.url, '_blank')}
        /> */}
        <Airport />
      </header>
    </div>
  );
}

export default App;
