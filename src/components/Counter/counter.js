import React, { Component } from 'react'
import './counter.css'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    inc = () => {
        let prev = this.state.counter
        this.setState({
            counter: prev + 1
        })
    }
    dec = () => {
        let prev = this.state.counter
        if (prev > 0) {
            this.setState({
                counter: prev - 1
            })
        } else
            alert("Ohhh! dear , Please increment first")
    }
    render() {
        return (
            <div>
                <span className='count'>{this.state.counter}</span>
                <br />
                <button className='btn' onClick={this.inc}>increment</button>
                <button className='btn' onClick={this.dec}>decrement</button>
            </div>
        )
    }
}
