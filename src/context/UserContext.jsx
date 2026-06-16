import React, { createContext, useEffect, useState } from 'react'
import main from '../gemini'

export const dataContext = createContext()

const UserContext = ({ children }) => {


  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false)
  const [resultData, setResultData] = useState("")
  const [userData, setUserData] = useState("")
  const [prevData, setPrevData] = useState([])




  async function sent(promte) {
    if (!promte.trim()) return;

    setLoading(true)
    setShowResult(true)
    setUserData(promte)
    setResultData("")

    try {

      let response = await main(promte);
      setResultData(response.split("**")+ "")

      setPrevData((prev) => {
        if (prev.includes(promte)) return prev;

        return [...prev, promte]
      })


    } catch (error) {
      console.log("Gemini side error", error);

    }
    finally {
      setLoading(false)
    }

  }

  const data = {
    sent,
    loading,
    input,
    setInput,
    showResult,
    setShowResult,
    resultData,
    userData,
    setUserData,
    prevData
  }


  return (
    <>
      <dataContext.Provider value={data}>

        {children}
      </dataContext.Provider>
    </>
  )
}

export default UserContext