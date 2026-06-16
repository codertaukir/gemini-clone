import React, { useCallback, useContext } from 'react'
import './chatsection.css'
import Themes from '../theme/Thems'
import { IoIosSend } from "react-icons/io";
import { dataContext } from '../../context/UserContext';

import robotAvatar from '../../assets/robotAvatar.jpg'
import userimg from '../../assets/user-image.png'

const ChatSection = () => {

  let { sent, setInput, input, loading, showResult, resultData, userData } = useContext(dataContext);



  function hendeleOniClick() {

    if (input.trim() !== "") {
      console.log("Hendle click button ...", input)
      sent(input);
      setInput("")
    }

  }

  const inputhendler = (e) => {

    let inputResult = e.target.value
    setInput(inputResult)
  }

  return (
    <div className='chatsections'>
      <div className="topsection">

        {!showResult ? <div className="headings">

          <span>Hello Codertaukir  </span>
          <span>I am your own Assistant </span>
          <span>What Can i help you</span>
        </div> : <div className='chat-container'>


          <div className='user-chat'>
            <p>{userData}</p>
            <img className='user-avatar' src={userimg} alt="" />

          </div>

          {
            loading ?
              <div className='loder'>

                <hr />
                <hr />
                <hr />

              </div> : <div className='ai-avatar'>
                <img className='robot-avatar' src={robotAvatar} alt="" />

                <p>{resultData}</p>
              </div>
          }


        </div>}


      </div>

      <div className="buttomsection">

        <div className='input-area'>
          <input type="text" placeholder='Write Everything' value={input} onChange={inputhendler} />
          <p className='thingking'>{loading ? "Thingking..." : ""}</p>
         {
          input ?  <IoIosSend className='sendbtn' onClick={() => {
            hendeleOniClick()
          }} /> : ""
         }


          <Themes />

        </div>

      </div>


    </div>
  )
}

export default ChatSection