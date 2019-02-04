import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <i>ReactJS create-react-app + docker boilerplate</i> til Forritaverkfrøði
          </p>
          <p>
            Rætta <code>src/App.js</code> og goym fyri at fáa nýggja útgávu.
          </p>
          <a
            className="App-link"
            href="https://www.setur.fo/fo/utbugving/bachelor/kt-verkfrodi/skeidslysingar/?educationYearId=493"
            target="_blank"
            rel="noopener noreferrer"
          >
            Skeiðslýsingar KT-verkfrøði - Náttúruvísindadeildin
          </a>
        </header>
      </div>
    );
  }
}

export default App;
