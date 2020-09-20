import React from 'react';
import Button from './components/Button.js';
import './components/Button.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="buttons">
        <div className="buttons">
          <Button size="large" color="blue">
            Large
          </Button>
          <Button size="medium" color="blue">
            Medium
          </Button>
          <Button size="small" color="blue">
            Small
          </Button>
        </div>

        <div className="buttons">
          <Button size="large" color="gray">
            Large
          </Button>
          <Button size="medium" color="gray">
            Medium
          </Button>
          <Button size="small" color="gray">
            Small
          </Button>
        </div>

        <div className="buttons">
          <Button size="large" color="pink">
            Large
          </Button>
          <Button size="medium" color="pink">
            Medium
          </Button>
          <Button size="small" color="pink">
            Small
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
