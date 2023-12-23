import logo from './logo.svg';
import './App.css';

function App() { // this is yr component  ok? ok
  return ( // this is simple JS function which returns HTML code ok? ok
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link" // in react we use className instead of class in html is a built in word in JS  ok >? 
          href="https://reactjs.org" // this document where we work is a JS code not html here we can just return html code in JS function return 
           //yeh wali line dubara batao kiya likh ah yeh 
          // App.JS page jis pr ma likh rha hoo yeh JS page hai html nhi mgr is ma hum html use kr rhy hai JSX ki waja syy ok han ok ok 
          target="_blank" //ab hum apna component bnty hai 
          // first we need to create a new js file 
          // So Samia please create a new Js file with ur name 
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
