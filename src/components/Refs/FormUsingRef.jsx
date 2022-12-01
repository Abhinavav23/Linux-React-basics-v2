import React from 'react'
import { useRef } from 'react'

export const FormUsingRef = () => {

   const usernameRef =  useRef();
   const passwordRef =  useRef();

   let userInfo = {
    username: '',
    password: ''
   }

    // const handleForm  = (e) => {
    //    [e.target.id]: e.target.value
    // }

    const loginUser = (e) => {
        e.preventDefault();
        console.log('login user');
        console.log(usernameRef.current);
        console.log(passwordRef.current);

        userInfo.username= usernameRef.current.value;
        userInfo.password = passwordRef.current.value;
        console.log(userInfo);
    }

  return (
    <>
        <form action="">
            <label htmlFor="username">username</label>
            <input type="text" name="username" id="username" ref={usernameRef}/>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="username" ref={passwordRef}/>
            <button onClick={loginUser}>login</button>
        </form>
    </>
  )
}
