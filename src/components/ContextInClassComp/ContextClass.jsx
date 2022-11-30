import React, { Component } from 'react'
import { UserInfoContext } from '../../App';

export class ContextClass extends Component {
    
    // to consume/use the context value
    // 1. import the context
    // 2. use ContextNAme.consumer
    // you will be writing a callback anf in that callback the argument will be the context value

  render() {
    return (
        <UserInfoContext.Consumer>
            {
                (user) => {
                    return (
                        <>
                            <h3>Context Value</h3>
                            <div>Name: {user.name}</div>
                            <div>Role: {user.role}</div>
                        </>
                    )
                }
            }
        </UserInfoContext.Consumer>
    )
  }
}


// if(a === 0){
//     return (<></>)
// } else{
//     return (<></>)
// }