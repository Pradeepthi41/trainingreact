import React from 'react'

const FBCStateEx = () => {

    const [value , setvalue]= React.useState(0);
    console.log(value);
    const changeValue=()=>{
        setvalue(1000);

    }
      return (
    <div>FBCStateEx
        <h1>{value}</h1>
        <button onClick={changeValue}>changevalue</button>
    </div>
  )
}

export default FBCStateEx