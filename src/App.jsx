import React from 'react'
import Sidebar from './components/sideBar/sideBar'
import ChatSection from './components/chatSection/ChatSection'
import Sepration from './components/sepretion/Sepration'

const App = () => {
  return (
    <div id='app'>
      <Sidebar/>
      <Sepration/>
      <ChatSection/>
    </div>
  )
}

export default App