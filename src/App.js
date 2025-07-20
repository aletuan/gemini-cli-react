import React, { useEffect } from 'react';
import 'wired-elements';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <wired-card>
          <h1>Welcome to My Cartoon App!</h1>
          <p>This is a paragraph inside a wired-card.</p>
          <wired-button>Click Me!</wired-button>
        </wired-card>
      </header>
    </div>
  );
}

export default App;
