import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {buyCake} from '../redux/cake/cakeActions';

const CakeContainer =() => {
    let numOfCakes = useSelector(state=>state.numOfCakes);
    let dispatch = useDispatch();
    return(
        <div>
            <h1>
                No of cakes : {numOfCakes}
            </h1>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}
export default CakeContainer