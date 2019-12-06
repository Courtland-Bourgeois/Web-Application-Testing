import React, { useState } from 'react';

import Display from './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  const resetValue = () => {
    setStrikes(0)
    setBalls(0)
  }

  const pitcherStrike = () => {
    if (strikes === 2) {
      resetValue()
    } else {
      setStrikes(strikes + 1)
    }
  }

  const pitcherBall = () => {
    if (balls === 3) {
      resetValue()
    } else {
      setBalls(balls + 1)
    }
  }

  const batterHit = () => {
    resetValue()
  }

  const batterFoul = () => {
    if (strikes < 2) {
      setStrikes(strikes + 1)
    }
  }

    return (
      <div className="App">
        <h1>MLB Scoreboard</h1>
        <Display strikes={strikes} balls={balls} />
        <Dashboard resetValue={resetValue} pitcherStrike={pitcherStrike} pitcherBall={pitcherBall} batterHit={batterHit} batterFoul={batterFoul} />
      </div>
    );
}

export default App;