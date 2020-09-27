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

        <div className="buttons">
          <Button size="large" color="blue" outline>
            Large
          </Button>
          <Button size="medium" color="gray" outline>
            Medium
          </Button>
          <Button size="small" color="pink" outline>
            Small
          </Button>
        </div>

        <div className="buttons">
          <Button size="large" color="blue" outline fullWidth>
            Large
          </Button>
          <Button size="medium" color="gray" outline fullWidth>
            Medium
          </Button>
          <Button
            size="small"
            color="pink"
            outline
            fullWidth
            onClick={() => console.log('클릭!')}
            onMouseMove={() => console.log('마우스 무브!')}
          >
            Small
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
