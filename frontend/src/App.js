import logo from './logo.svg';
import './App.css';
import CustomGraph from './components/graph';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <CustomGraph
          json = {[
            {"date": "2021-01-01", "value": "37.5"},
            {"date": "2021-01-02", "value": "36.8"},
            {"date": "2021-01-03", "value": "36.9"},
            {"date": "2021-01-04", "value": "37.2"}
          ]}
          xAxisPath = "date"
          yAxisPath = "value"
          title = "Temperature"
          columns = {["Date", "Temperature"]}
        />
      </header>
    </div>
  );
}

export default App;
