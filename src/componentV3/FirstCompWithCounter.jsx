import React from 'react'
import { useEffect } from 'react';
import { useCount } from './customHooks/useCount'

export const FirstCompWithCounter = () => {
    // const [count, increment, decrement, reset] = useCount();
    const {count, increment, decrement, reset} = useCount(100);
    // working like compDidMount
    useEffect(() => {
        console.log('redering once');
    },[])

    // like compDidUpdate
    useEffect(() => {
        console.log('redering on count update');
    },[count])

  return (
    <>
        <h3>Header</h3>
        <div>FirstCompWithCounter</div>
        <div>Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Aut autem veniam dolores 
             cumque. Eum placeat culpa minima facilis et voluptas, 
             dolores doloremque voluptatibus, numquam similique, 
             odio sapiente asperiores voluptates neque.</div>

        <div>Counter: {count}</div>

        <button onClick={() => increment(5)}>+5</button>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => decrement(2)}>-2</button>
        <button onClick={reset}>reset</button>
    </>
  )
}
