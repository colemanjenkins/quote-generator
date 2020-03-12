import React, { Component } from 'react';
import './App.css';
import QuoteDisplay from "./display.js";



class App extends Component {

  render() {
    return (
      <div>
        <h1 className="pageHeader">
          Popular Quotes
        </h1>
        <div>
          <QuoteDisplay />
        </div>
      </div >
    );
  }
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;