import React, { Component } from 'react'
import "./Insertionsort.css"

export default class ArrayNode extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        const {value} = this.props
        return (
            <div className="array-node" style={{height:value*3+"px"}}>
                {value}
            </div>
        )
    }
}
