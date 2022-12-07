import React from 'react'
import { useState } from 'react'

export const StateBatching = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Abhinav');
    const increment = () => {
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);

        // batching of states
        setCount((val) => val+1);
        setCount((val) => val+1);
        setCount((val) => val+1);
        setCount((val) => val+1);

        setName('Abhi');
    }


    console.log('rendering');
  return (
    <>
        <div>StateBatching</div>
        <div>Count: {count}</div>
        <div>Name: {name}</div>
        <button onClick={increment}>+</button>
    </>
  )
}
