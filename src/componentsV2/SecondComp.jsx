import React, { useState } from 'react'

export const SecondComp = () => {
    const [name, setName] = useState('abhinav');
    console.log('rendering SecondComp');
  return (
   <>
    <div>SecondComp = {name}</div>

    <button onClick={() => setName('abhinav')}>change Name</button>
   </>
  )
}
