import React, { Component } from 'react'

export default class ApisInClassComp extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            this.setState({
                data
            })
        })
    }

  render() {
    return (
      <>
        <h2>ApisInClassComp</h2>
        {
            this.state.data.map((post) => {
                return (
                    <div key={post.id}>
                        <div>Id: {post.id}</div>
                        <div >Title: {post.title}</div>
                        <br/>
                    </div>
                )
            })
        }
      </>
    )
  }
}
