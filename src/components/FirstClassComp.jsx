import { Component } from "react";

export class FirstClassComp extends Component{
    // class comp must extend Component from React
    // to create a class component render method is a required method
    // render method should also return something

    constructor(props){
        super(props);
        // 3rd solution
        this.setName = this.setName.bind(this)
        this.state = {
            name: 'default',
            address: 'default',
            role: 'default'
        }
    }

    setName(){
        // when state is dependant upon prev state
        // this.setState((prevState) => prevState+1);
        console.log('start', this.state);
        this.setState({...this.state, name: 'Abhinav'}, () => {
            console.log('after update');
            console.log(this.state);
        });
        console.log('end', this.state);
        // console.log(this);

        // setTimeout(() => {
        //     console.log('calling setTimeout');
        // }, 1000)
    }

    // 1st solution is turning function into arrow fun
    // setName = () =>{
    //     // this.setState({...this.state, name: 'Abhinav'})
    //     console.log('this is my name');
    //     console.log(this.state);
    // }

    render(){
        return(
            <>
                <h2>FirstClassComp</h2>
                <div>Name: {this.state.name}</div>
                <div>Address: {this.state.address}</div>
                <div>Role: {this.state.role}</div>
                {/* 2nd solution is binding the fun while passing to onclick */}
                {/* <button onClick={this.setName.bind(this)}>SetName</button> */}
                <button onClick={this.setName}>SetName</button>
            </>
        )
    }
}

// new FirstClassComp().render()

// methods of class components
// phases of lifecycle of a component
// 1. creation phase / mounting phase ---> component gets created for the first time
// 2. Updation phase ---> component gets updated - by updating a state and props, 
// 3. removal phase / deletion phase / unmounting phase ---> component gets removed

// methods in creation phase | phase 1
// 1. constructor



// 1. in normal fun this keyword points to caller
// 2. in arrow func this keyword points to env


// functional scoping / functional chaning
// async programing -->
// classes in ES6 --> 
// clousures
// this keyword in JS
// hoisting
// ES6 features --> destructing, spreading, HOF(map, reduce, filter etc)