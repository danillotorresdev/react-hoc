import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        setInterval(() => this.setState({
            counter: this.state.counter+1
        }), 1000)
    }
    render() {
        const { props } = this
        return (
            <div>
                <h1>{props.header(this.state)}  {this.state.counter}</h1>
                <div>{props.body}</div>
                <div>{props.children(this.state)}</div>
            </div>
        )
    }

}

export default Card