import { Component } from "react";

export class FirstClassComp extends Component{
    // class comp must extend Component from React
    // to create a class component render method is a required method
    // render method should also return something

    constructor(props){
        super(props);
        this.state = {
            name: 'default',
            address: 'default',
            role: 'default'
        }
    }

    // setName(){
    //     // this.setState({...this.state, name: 'Abhinav'})
    //     console.log('this is my name normnal fun');
    //     console.log(this.state);
    // }

    setName = () =>{
        // this.setState({...this.state, name: 'Abhinav'})
        console.log('this is my name');
        console.log(this.state);
    }

    render(){
        return(
            <>
                <h2>FirstClassComp</h2>
                <div>Name: {this.state.name}</div>
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