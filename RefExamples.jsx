import React, { useRef,useState,useEffect } from 'react'
import VIDEO from "./video.mp4"
const RefExamples = () => {
    const [play , setPlay ] = useState(true);
    const eleRef = useRef();
    const videoRef = useRef(); 
    console.log(videoRef);

    // console.log(eleRef);
    useEffect(()=>{
        eleRef.current.style.color = "teal";
        eleRef.current.innerText = "React ref"
    });

    let playORpause=()=>{
        if(play == true){
            videoRef.current.play();
            console.log(play);
            setPlay(false);
        }else{
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
    }
  return (
    <div>RefExamples
        <h1 ref = {eleRef}>RefExamples</h1>
        <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
        {/* <video src={VIDEO} controls></video> */}  
        

    </div>
  )
}

export default RefExamples