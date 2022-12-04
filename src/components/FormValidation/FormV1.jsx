import React from 'react'
import { useRef } from 'react'
import axios from 'axios';
import { useState } from 'react';
import RegexParser from 'regex-parser'

export const FormV1 = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    let initialErrorValue = {
        usernameError: '',
        passwordError: ''
    }
    const [error, setError] = useState(initialErrorValue);
    // let error = false;

    const validateUserName = () => {
        const val = RegexParser('[^0-9]');
        if(usernameRef.current.value === val){
            setError({...error, usernameError: `username can't be empty`});
        } else if(usernameRef.current.value.length < 8){
            setError({...error, usernameError: `username should be minimum 8 characters` });
        } else{
            setError({...error, usernameError:''});
        }
    }

    const validatePassword = () => {
        if(passwordRef.current.value === ''){
            setError({...error, passwordError: `password can't be empty`});
        } else if(passwordRef.current.value.length < 8){
            setError({...error, passwordError: `password should be minimum 8 characters`});
        } else{
            setError({...error, passwordError:''});
        }
    }

    const login = (e) => {
        let userInfo = {}
        e.preventDefault();
        userInfo[usernameRef.current.name] = usernameRef.current.value;
        userInfo[passwordRef.current.name] = passwordRef.current.value;
        console.log(userInfo);
        validateUserName();
        // if(!error){
        //     axios.post('https://jsonplaceholder.typicode.com/posts', userInfo)
        //     .then((data) => {
        //         console.log(data);
        //     })
        // }
    }

   

  return (
    <>
        <h3>Login</h3>
        <form onSubmit={login}>
            <label htmlFor="username">User Name : </label>
            <input type="text" name="username" id="username" ref={usernameRef} onBlur={validateUserName}/>
            { error.usernameError && <div className='error'>{error.usernameError}</div>}
            {/* <br/>  */}
            <hr/>
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" ref={passwordRef} onBlur={validatePassword}/>
            { error.passwordError && <div className='error'>{error.passwordError}</div>}
            <br/>
            <input type="submit" value="submit" />
        </form>
    </>
    
  )
}
