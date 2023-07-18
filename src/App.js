import './App.css';
import { React } from "react";
import data from './data/data.json';

const App = () => {

  console.log(data);

  return (
    <section className="App">
      <section className="">
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
      </section>
    </section >
  );
}

export default App;
