import React, { Component } from "react";
 export default class CBCPropEx extends Component {
    render () {
        console.log(this);
        return (
            <div>
                 CBCPropEx
                 <h1>{this.props.username}</h1>
                 <h1>{this.props.age}</h1>
                 {
                    this.props.hobbies.map(hobby=> {
                        return <li>{hobby}</li>
                    })
                 }
                 
                 <h1>{this.props.address.city}</h1>
        <button onclick={this.props.sendFun}>Click</button>

            </div>
        )
    }
 }