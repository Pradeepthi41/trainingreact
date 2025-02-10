import React, { useEffect, useState } from 'react'

// const UseEffectEx = () => {
//     const [count , setCount] = useState(0);

    // useEffect(()=>{
    //     setTimeout(()=>{
            
    //         setCount(2000);

    //     },2000);
    //     document.title = count;
    //     //document.title = 'sid';

    // },[count])  //[] this will not display the docment value as count,if we add[count] then it will displays the count value as the doc's name.
  
  
   // ! api fetching
   const UseEffectEx = () => {
    const [users ,setUsers ] = useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
            //console.log(data)
            setUsers(data);

        }))
        .catch(err=>console.log(err))
    },[])
   
    return (
    <div className='parent'>UseEffectEx
       {/* <h1>{count}</h1>*/}
       { 
        users.map((user, index)=>{
            return(
                <React.Fragment>
                    <h1>{user.name}</h1>
                    <h3>{user.email}</h3>
                </React.Fragment>
            )
        })
       }
    </div>
  )
}

export default UseEffectEx;