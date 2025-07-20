import React from 'react';
import 'wired-elements';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <h1>Registration Form</h1>
        <div className="form">
          <div className="form-field">
            <label>First Name</label>
            <wired-input placeholder="First Name"></wired-input>
          </div>
          <div className="form-field">
            <label>Last Name</label>
            <wired-input placeholder="Last Name"></wired-input>
          </div>
          <div className="form-field">
            <label>Email</label>
            <wired-input type="email" placeholder="Email"></wired-input>
          </div>
          <div className="form-field">
            <label>Phone Number</label>
            <wired-input type="tel" placeholder="Phone Number"></wired-input>
          </div>
          <div className="gender-selection">
            <label>Gender</label>
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
      </div>
    </div>
  );
}

export default App;
