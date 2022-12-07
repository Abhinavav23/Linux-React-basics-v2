import React, { memo } from 'react'

 const Child1 = ({nameAndNo}) => {
    console.log('rendering Child1');
    console.log(nameAndNo);
  return (
    <>
        <h3>Child1</h3>
        <div>name - {nameAndNo.name}</div>
        <div>Player name - {nameAndNo.playerName}</div>
    </>
  )
}

// check if the props are updated
export default memo(Child1);