import React from 'react'
import { useState } from 'react';

export const FirstComp = () => {
    const [count, setCount] = useState(0);
    

    console.log('rendering FirstComp');
  return (
    <div className='center'>
        <div>first div: {count}</div>
        <div>
            second div
        </div>
        <button onClick={() => setCount(count+1)}>+</button>
    </div>
  )
}

// console.log(React.createElement('div', {className: 'center'}, 
// React.createElement('div', null, 'first div'),
// React.createElement('div', null, 'second div')));

// {
//     elemnt: {
//         props: {
//             children: {}
//         }
//     },

// }
