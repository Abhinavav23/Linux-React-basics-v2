import React, { memo } from 'react'

 const Child1 = () => {
    console.log('rendering Child1');
  return (
    <div>Child1</div>
  )
}

// check if the props are updated
export default memo(Child1);