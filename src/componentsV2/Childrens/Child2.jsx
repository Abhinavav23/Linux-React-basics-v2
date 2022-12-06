import React, { memo } from 'react'

const Child2 = () => {
    console.log('rendering Child2');
  return (
    <div>Child2</div>
  )
}

export default memo(Child2);