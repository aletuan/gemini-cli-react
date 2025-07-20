import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'wired-elements';
import './App.css';
import AdminView from './components/AdminView';
import UserDetails from './components/UserDetails';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: 'male',
  });

  const handleChange = (e) => {
    const { placeholder, value } = e.target;
    if (placeholder) {
      const fieldName = placeholder.toLowerCase().replace(' ', '');
      setFormData({ ...formData, [fieldName]: value });
    } else if (e.target.tagName === 'WIRED-RADIO') {
      setFormData({ ...formData, gender: value });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      alert('Registration successful!');
      // Clear form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: 'male',
      });
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed.');
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      gender: 'male',
    });
  };

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      <div className="form">
        <div className="form-field">
          <label>First Name</label>
          <wired-input placeholder="First Name" value={formData.firstName} onchange={handleChange}></wired-input>
        </div>
        <div className="form-field">
          <label>Last Name</label>
          <wired-input placeholder="Last Name" value={formData.lastName} onchange={handleChange}></wired-input>
        </div>
        <div className="form-field">
          <label>Email</label>
          <wired-input type="email" placeholder="Email" value={formData.email} onchange={handleChange}></wired-input>
        </div>
        <div className="form-field">
          <label>Phone Number</label>
          <wired-input type="tel" placeholder="Phone Number" value={formData.phoneNumber} onchange={handleChange}></wired-input>
        </div>
        <div className="gender-selection">
          <label>Gender</label>
          <wired-radio-group selected={formData.gender} onchange={handleChange}>
            <wired-radio value="male">Male</wired-radio>
            <wired-radio value="female">Female</wired-radio>
            <wired-radio value="other">Other</wired-radio>
          </wired-radio-group>
        </div>
        <div className="buttons">
          <wired-button onClick={handleSubmit}>Submit</wired-button>
          <wired-button onClick={handleCancel}>Cancel</wired-button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Register</Link> |
          <Link to="/admin">Admin View</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/admin" element={<AdminView />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
