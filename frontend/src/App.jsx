import { useState } from 'react'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

function App() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Notifications/>
      <VideoPlayer/>
      <Options/>
    </div>
  )
}

export default App
