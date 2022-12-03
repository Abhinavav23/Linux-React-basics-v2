import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { Error } from './Error';
import { Loader } from './Loader/Loader';

export const FunCompAPi = () => {

    // let postData = [];
    const [postData, setPostData] = useState([]);
    // make an api call as soon as the comp loads
    const [showError, setShowError] = useState(false);

    const [loading, setLoading] = useState(false);

    const fetchData = () => {
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
    };

    const fetChDataUsingAsync = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPostData(data);
            setShowError(false);
            setLoading(false);
        }catch(e){
            setLoading(false);
            setShowError(true);
            console.log(e);
        }
    }

    useEffect(() => {
        // fetchData();
        fetChDataUsingAsync();
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await res.json();
        // setPostData(data);
    }, [])

  return (
    <>
        <h3>Make an APi call</h3>
        {loading ? <Loader/> : <div>
        {
            postData.map((post) => {
                return (
                    <Fragment key={post.id}>
                        <div>Name: {post.title}</div>
                    </Fragment>
                )
            })
        }
        </div>
        }

       {showError && <Error/>}
    </>
  )
}

function calculate(a,b){
    let no = a+b
    return no
}

calculate(10, 20)