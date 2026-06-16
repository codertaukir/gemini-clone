import React, { useContext, useEffect, useState } from 'react'
import './sidebar.css'

import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FiMessageSquare } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { dataContext } from '../../context/UserContext';


const Sidebar = () => {



  const [extand, setExtand] = useState(true)
  const { prevData, sent, setInput, setShowResult } = useContext(dataContext);


  const hendlerNewChat = () => {
    setShowResult(false);
    setInput("")
  }
  const loadPrevPromt = async (promte) => {
    await sent(promte)
  }
  return (
    <div className={`sidebar ${extand ? "" : "center"} `}>
      <div id='hem' className={`${extand ? "hem1" : "hem2"}`} onClick={() => {
        setExtand(prev => !prev)
        console.log(extand)
      }}>
        {extand ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      <div className="newchat " onClick={() => {
        hendlerNewChat();
      }}>
        <FaPlus />
        {extand ? <p className={`${extand ? "" : "hide"}`}>New chat</p> : ""}
      </div>

      {
        prevData.map((item, index) => {
          return (
            <div key={index} className="recent" onClick={() => {
              loadPrevPromt(item);
            }}>
              < FiMessageSquare />
              {extand && <p className={`${extand ? "" : "hide"}`}>{item.slice(0, 15) + "..."}</p>}

            </div>)
        })
      }

    </div>
  )
}

export default Sidebar