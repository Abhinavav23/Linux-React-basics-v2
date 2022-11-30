import React, { Component } from 'react';

class Player extends Component {
    constructor(props){
        super(props);
    }

    allowedPlayerList = ['Virat', 'Rohit', 'Surya', 'Risabh'];
    render() {
        if(this.allowedPlayerList.indexOf(this.props.name) === -1){
            throw Error(`${this.props.name} is not a valid player`);
        }
        return (
            <div>
                Player Name: {this.props.name}
            </div>
        );
    }
}

export default Player;