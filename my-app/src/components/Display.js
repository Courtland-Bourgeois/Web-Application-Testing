import React, { useState } from 'react';

const Display = () => {
  const [strikes, setStrikes] = useState(0)
  const [balls, setBalls] = useState(0)

  return (
    <div>
      <section>
        <h1>Strikes</h1>
        <div>{strikes}</div>
      </section>
      <section>
        <h1>Balls</h1>
        <div>{balls}</div>
      </section>

    </div>
  )
}

export default Display;