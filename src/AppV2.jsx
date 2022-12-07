import React from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { FirstClassComp } from './components/FirstClassComp'
import  Child1 from './componentsV2/Childrens/Child1'
import  Child2  from './componentsV2/Childrens/Child2'
import { ChildWithFun } from './componentsV2/Childrens/ChildWithFun'
import { StateBatching } from './componentsV2/Childrens/StateBatching'
import { FirstComp } from './componentsV2/FirstComp'
import { SecondComp } from './componentsV2/SecondComp'

export const AppV2 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Virat');

  // const memoizedVal = useMemo(() => {
  //   console.log('running use memo');
  //   return {name: 'Abhinav', playerName: name}
  // }, [name])

  // memoizedVal = {name: 'Abhinav', playerName: 'Virat'}

  console.log('rendering App v2');

  const printMyName = useCallback((name) => {
    console.log(`I am ${name}`);
  }, [])

  const increaseCount = useCallback(() => {
    console.log('calling increase count');
    console.log('count', count);
    setCount(count+1)
  }, [count])

  
  return (
    <>
        <div>AppV2 - {count}</div>
        {/* <FirstComp/>
        <SecondComp/> */}
        {/* <div>Player name in parent: {name}</div>
        <Child1 nameAndNo={memoizedVal}/>
        <br/>
        <Child2 role='ins' batch='linux'/>
        <br/> */}
        {/* <button onClick={() => setCount(count+1)}>+count</button>
        <br/>
        <button onClick={() => setName('rohit')}>change name</button> */}
        <br/>
        <br/>
        {/* <ChildWithFun print={printMyName} increase={increaseCount}/> */}

        <StateBatching/>
    </>
  )
}


// memo ---> compare the  props with previous props using value equality
// shallow comparison
// let a = 1
// let b = 1

// console.log(a===b);

// let obj1 = {a: 1}
// let obj2 = {a: 1}

// console.log(obj1===obj2); //false 

function fun1(){
  console.log('name');
}

function fun2(){
  console.log('name');
}
console.log(fun1 === fun2);