import React, { useRef } from 'react';
import * as yup from 'yup';
import RegexParser from 'regex-parser';

export const FormV2 = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    // const notNumber = RegexParser('[^0-9]');
    // const res = notNumber.test('1343434gg');

    // console.log('res',res);

    const structure = yup.object().shape({
        // name: yup.string().required('name cant be empty').min(8).matches(RegexParser('[^0-9]', {message: 'not matching the pattern'})),
        name: yup.string().required('name cant be empty').min(8),
        password: yup.string().required('password cant be empty').min(10)
    })

    // {
    //     name11: '',
    //     passwoerd: ''
    // }

    // {
    //     name: '',
    //     pasword: ''
    // }

    const login = (e) => {
        console.log('login clicked');
        e.preventDefault()
        let userInfo = {}
        userInfo.name = usernameRef.current.value
        userInfo.password = passwordRef.current.value
        // userInfo.username = usernameRef.current.value
        console.log(userInfo);
        
        structure.validate(userInfo, {abortEarly: false})
        .then((value) => {
            console.log('successfully matched');
            console.log(value);
        })
        .catch((err) => {
            console.log('not matched');
            console.log(err.inner);
        })
    }

  return (
    <>
        <h3>Login</h3>
        <form onSubmit={login}>
            <label htmlFor="username">User Name : </label>
            <input type="text" name="username" id="username" ref={usernameRef}/>
            <hr/>
            <label htmlFor="password">Password : </label>
            <input type="text" name="password" id="password" ref={passwordRef}/>
            <br/>
            <input type="submit" value="submit" />
        </form>
    </>
  )
}
