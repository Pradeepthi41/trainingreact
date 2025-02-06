import React, {Component} from 'react'
 class CBCStateEx extends Component {
  constructor(){
    super();
    this.state={
      users:["s","p"],
      num:100
    };
  }
  changeNumber=()=>{
    this.setState({num:200})
    this.setState({num:300})
  }
  render(){
    console.log(this);
    return(
      <div>
      {
        this.state.users.map((user,i)=>{
            return <li key={i}>{user}</li>
        }
    )
      }
      <h1>{this.state.num}</h1>
      <button onClick={this.changeNumber}>changeNumber</button>
    
      </div>
      );
      
  }
 }
 export default CBCStateEx;

