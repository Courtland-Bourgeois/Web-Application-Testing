import React from 'react';

const Dashboard = (props) => {
  
  return (
    <div>
      <button onClick={props.pitcherStrike}>STRIKE</button>
      <button onClick={props.pitcherBall}>BALL</button>
      <button onClick={props.batterFoul}>FOUL</button>
      <button onClick={props.resetValue}>HIT</button>
    </div>
  )
}

export default Dashboard