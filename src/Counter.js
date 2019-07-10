import React, { useState } from 'react';

function Counter(){
const [count, setCount] = useState(0);

// const handleChange = (e) => {
//   setCount(count === e.target.value)
// }

return (
  <div>
    <p>Le compteur est  à : {count} </p>
    <input value={count} onChange={(e) => setCount(e.target.value)}>
    </input>
    <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
);
}

export default Counter;
