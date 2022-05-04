import React, { Component } from 'react'

export class StateComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            like: 100
        }
    }

    addCount = () => {
        // count++ 
        // count = count+1
        this.setState({ count: this.state.count + 1 })
    }

    alertTest = () => {
        alert("Testing")
    }

    render() {
        return (
            <fieldset>
                <legend> StateComponent.jsx</legend>
                <h1> {this.props.title}</h1>
                <h1> Count: {this.state.count}</h1>
                <button onClick={this.addCount}> Add count</button>
                <button onClick={() => this.addCount()}> Add count</button>

                <h1> Like: {this.state.like}</h1>
                <button onClick={() => this.setState({ like: this.state.like + 1 })}> Like!</button>

                <p>
                    <button onClick={() => this.alertTest()}> Alert</button>
                </p>

            </fieldset>
        )
    }
}

export default StateComponent