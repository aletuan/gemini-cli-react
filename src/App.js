import React from 'react';
import 'wired-elements';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <wired-card>
          <h1>Registration Form</h1>
          <div className="form">
            <wired-input placeholder="First Name"></wired-input>
            <wired-input placeholder="Last Name"></wired-input>
            <wired-input type="email" placeholder="Email"></wired-input>
            <wired-input type="tel" placeholder="Phone Number"></wired-input>
            <div className="gender-selection">
              <wired-radio-group selected="male">
                <wired-radio value="male">Male</wired-radio>
                <wired-radio value="female">Female</wired-radio>
                <wired-radio value="other">Other</wired-radio>
              </wired-radio-group>
            </div>
            <div className="buttons">
              <wired-button>Submit</wired-button>
              <wired-button>Cancel</wired-button>
            </div>
          </div>
        </wired-card>
      </header>
    </div>
  );
}

export default App;
