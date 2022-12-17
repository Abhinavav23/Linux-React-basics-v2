import { useState } from "react";

export const useCount = (initialValue) => {
    const[count, setCount] = useState(initialValue);
    const increment = (val=2) => {
        console.log(val);
        setCount(count+val)
    }
    const decrement = (val=1) => {
        setCount(count-val)
    }
    const reset = () => {
        setCount(initialValue)
    }
    // return [count, increment, decrement, reset]
    return {count, increment, decrement, reset}
}

// return {
//     count: count,
//     increment: increment,
//     decrement: decrement,
//     ----
// }

// const {getItem, setItem} = useLocalStorage()