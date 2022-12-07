import React, { memo } from 'react'

const Child2 = ({role, batch}) => {
    // const {role} = props
    console.log('rendering Child2');
  return (
    <>
        <h3>Child2</h3>
        <div>role: {role}</div>
        <div>batch - {batch}</div>
    </>
  )
}

export default memo(Child2);