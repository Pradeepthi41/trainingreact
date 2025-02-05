import React from 'react'

const FBCPropEx = (props) => {
    console.log(props);
   if(props.isMarried== true){
    return (
        <div>
            <h1>{props.username} is a married one </h1>
            {
                props.hobbies.map(hobby=>{
                    return <li>{hobby}</li>
                })
            }
        </div>
    )
   }else{
    return <h1>{props.username} is Not married</h1>
   }

    <div>FBCPropEx</div>
  
}

export default FBCPropEx