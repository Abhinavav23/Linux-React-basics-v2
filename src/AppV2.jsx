import React from 'react'
import { useState } from 'react'
import { FirstClassComp } from './components/FirstClassComp'
import  Child1 from './componentsV2/Childrens/Child1'
import  Child2  from './componentsV2/Childrens/Child2'
import { FirstComp } from './componentsV2/FirstComp'
import { SecondComp } from './componentsV2/SecondComp'

export const AppV2 = () => {
  const [count, setCount] = useState(0);
  console.log('rendering App v2');
  return (
    <>
        <div>AppV2 - {count}</div>
        {/* <FirstComp/>
        <SecondComp/> */}
        <Child1/>
        <Child2/>
        <button onClick={() => setCount(count+1)}>+</button>
    </>
  )
}
