import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export const FunCompAPi = () => {

    // let postData = [];
    const [postData, setPostData] = useState([]);
    // make an api call as soon as the comp loads
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log('calling then');
            console.log(res);
            return res.json();
        })
        .then((data) => {
            // postData = data
            setPostData(data)
            console.log(data);
        })
        .catch((e) => {
            console.log('Error occurred');
            console.log(e);
        })
    }, [])

  return (
    <>
        <div>Make an APi call</div>
        {
            postData.map((post) => {
                return (
                    <Fragment key={post.id}>
                        <div>Name: {post.title}</div>
                    </Fragment>
                )
            })
        }
    </>
  )
}


function calculate(a,b){
    let no = a+b
    return no
}

calculate(10, 20)