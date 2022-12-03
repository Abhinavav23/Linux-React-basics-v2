import React from 'react'
import { forwardRef } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'

 export const Login = forwardRef((props, userRef) => {
    console.log(userRef);
    console.log(props);
    const login = () => {

    }
    const userNameRef = useRef();

    useEffect(() => {
        // userNameRef.current.focus();
        userNameRef.current.value = 'default';
    }, [])

    const myRef = useRef()

    // const focusInp = (e) => {
    //     e.preventDefault();
    //     myRef.current.focus();
    // }

  return (
    <form action="">
        <label htmlFor="username">username</label>
        <input type="text" name="" id="username" ref={userRef}/>
        <br/>   <br/>
        <label htmlFor="password">password</label>
        <input type="text" name="" id="password" ref={userNameRef}/>
        <br/>   <br/>
        <button onClick={login}>login</button>
        {/* <button onClick={focusInp}>focusInput</button> */}
    </form>
  )
});

// export default forwardRef(Login);


// const obj = {
//     name: 'Abhinav'
// }
// console.log(obj);