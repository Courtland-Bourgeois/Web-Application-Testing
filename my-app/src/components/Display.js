import React from 'react';

const Display = (props) => {
  
  return (
    <div>
      <section>
        <div>
          <h1>Strikes</h1>
          <p>{props.strikes}</p>
        </div>
        <div>
          <h1>Balls</h1>
          <p>{props.balls}</p>
        </div>
      </section>

    </div>
  )
}

export default Display;