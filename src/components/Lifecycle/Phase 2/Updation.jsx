import { Component } from "react";

export class Updation extends Component{
    static getDerivedStateFromProps(){
        console.log('calling getDerivedStateFromProps');
    }
    shouldComponentUpdate(){
        console.log('calling shouldComponentUpdate');
    }
    getSnapshotBeforeUpdate(){
        console.log('calling getSnapshotBeforeUpdate');
    }
    componentDidUpdate(){
        console.log('calling componentDidUpdate');
    }
    render(){
        console.log('calling render');
        return (
            <>
                <h2>Updation</h2>
            </>
        )
    }
}

// Updation Phase Methods
// 1. getDerivedStateFromProps
// 2. shouldComponentUpdate
// 3. render
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate