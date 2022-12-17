import React from 'react'
import { useState } from 'react'
import { useCount } from './customHooks/useCount'

export const SecondCompWithCounter = () => {
    // const [count, decrement, reset] = useCount();
    const {count, increment, decrement, reset} = useCount(10);
  return (
    <>
        <h3>Footer</h3>
        <div>SecondCompWithCounter</div>
        
        <div>Counter: {count}</div>

        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <button onClick={reset}>reset</button>
    </>
  )
}
