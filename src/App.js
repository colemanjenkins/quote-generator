import React, { Component } from 'react';
import './App.css';
import QuoteDisplay from "./display.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0 //default quote: Mark Twain
    }
  }

  handleButtonClick = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ color: "black", textAlign: "center" }}>
          Inspirational Quotes
        </h1>
        <div>
          <QuoteDisplay handleButtonClick={this.handleButtonClick} buttonVal={this.state.value} />
          {/* <Button /> */}
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