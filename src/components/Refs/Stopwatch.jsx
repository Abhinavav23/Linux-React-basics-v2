import React from 'react'

import { useState, useEffect, useRef } from 'react'

export const Stopwatch = () => {
    const [curTime, setCurTime] = useState(0);

    let id = 'test';

    const timerRef = useRef();

    const start = () => {
        console.log('id', timerRef.current);
        timerRef.current =  setInterval(() => {
            // console.log('calling timer');
            setCurTime((value) => value+1);
        }, 1000)
        console.log('id', timerRef.current);
    }
    // console.log('rerender');

    const stopTimer = () => {
        console.log('id is', timerRef.current);
        clearInterval(timerRef.current);
    }

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
        }
    }, [])

    const reset = () => {
        setCurTime(0);
        stopTimer();
    }
    
  return (
    <>
        <div>Stopwatch</div>
        <div>Time: {curTime}</div>
        <button onClick={start} disabled>start</button>
        <button onClick={stopTimer}>stop</button>
        <button onClick={reset}>reset</button>
    </>
  )
}

let a = 'abhinav'
a = 'else'