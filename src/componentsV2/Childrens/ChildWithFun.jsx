import React from 'react'
import { useRef } from 'react'

export const ChildWithFun = React.memo(({print,increase}) => {
    const nameRef = useRef();
    console.log('rendering ChildWithFun');
  return (
    <>
        <div>ChildWithFun PrintMyNAme</div>
        <input type="text" name="" id="" ref={nameRef}/>
        <button onClick={() => print(nameRef.current.value)}>Print Name</button>
        <button onClick={increase}>inc parent count</button>
    </>
  )
})


