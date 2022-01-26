import logo from './logo.svg';
import './App.css';
import {Section, JsAndJsx} from './section.js'; //Una vez importada se coloca en el return como un tag autocerrado

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
          Mira ma
        </a>
        <Section/>
        <JsAndJsx/>
      </header>
    </div>
  );
}

export default App;
