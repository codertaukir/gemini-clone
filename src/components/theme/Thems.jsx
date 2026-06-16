import React, { useEffect, useState } from 'react'
import './themes.css'

import { MdNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Themes = () => {

    const [mode, setMode]=useState("darkmode");
    const [btn, setBtn]= useState(true);

    

    function toggle(){
        if(mode==="darkmode"){
            setMode("lightmode");
        }else{
            setMode("darkmode")
        }
    };

    useEffect(()=>{
        document.body.className=mode
    }, [mode])

  return (
    <button className='btn-color' onClick={()=> {
        toggle();
        setBtn(prev=>!prev)
        
        
    }}>{ btn ? <CiLight/>  : <MdNightlight/> }</button>
  )
}

export default Themes