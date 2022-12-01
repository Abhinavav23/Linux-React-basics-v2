import React, { Component, Fragment } from 'react'

export default class Error extends Component {
    constructor(props){
        super(props);
        this.state = {
            errorOccurred: false,
            errorMessage: ''
        }
    }

    // you get this called whenever the error occurs and returns the updated values 
    static getDerivedStateFromError(error){
        return {
            errorOccurred: true,
            errorMessage: error.message
        }
    }

    // to log the error for further processing or debugging
    componentDidCatch(error, info){
        console.log(info);
        console.log(error);
    }

  render() {
   if(this.state.errorOccurred){
    return (
        <>
            <div>Error: {this.state.errorMessage}</div>
        </>
    )
   }
    return this.props.children
  }
}


<input id="name"/>