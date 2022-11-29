import { useEffect } from "react";
import { Component } from "react";

export class Mounting extends Component{
    constructor(props){
        // runs when component gets created for first time
        // gets access to props and call to super
        // initialize the state
        // binding of event handlers
        // side effects not possible
        super(props);
        this.state = {
            fullName: this.props.name + ' kumar'
        }
        console.log('calling constructor');
    }

    // static getDerivedStateFromProps(props, state){

    //     console.log('props', props);
    //     console.log('state', state);
    //     console.log('calling getDerivedStateFromProps');
    //     return {fullName: props.name + ' kumar'}
    // }

    componentDidMount(){
        // side effects in mounting phase
        // fetch
        // setTimeOut
        // useEffect(() => {

        // }, [])
        setTimeout(() => {
            console.log('calling componentDidMount after a sec');
        }, 1000)
        console.log('calling componentDidMount');
    }

    shouldComponentUpdate(){
        // it decides whether the comp should be updated or not
        // performance optimization
        console.log('calling shouldComponentUpdate');
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('calling getSnapshotBeforeUpdate');
    }

    componentDidUpdate(){
        // side effects in updation phase
        // useEffect(() => {

        // }, [name])
        console.log('calling componentDidUpdate');
    }

    componentWillUnmount(){
        // called when component is removed
        // cleanup activities
        // useEffect(() => {
            // return () => {
            // }
        // }, [])
        console.log('calling componentWillUnmount');
    }

    render(){
        console.log('calling render');
        return (
            <>
                <h2>Mounting</h2>
                <div>Name: {this.props.name}</div>
                <div>FullName: {this.state.fullName}</div>
            </>
        )
    }
}

// Mounting phase has 4 methods
// 1. constructor
// 2. getDerivedStateFromProps
// 3. render --> required method
// 4. componentDidMount

// Updation Phase Methods
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate

// Deletion or unmounting phase
// 1. componentWillUnmount