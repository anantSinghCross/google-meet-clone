import React, { useContext } from 'react'
import { SocketContext } from '../Context'

function VideoPlayer() {

  const { me, name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)

  return (
    <div className='grid grid-cols-2'>
      {
        stream && (
          <div>
            <h4>My Video</h4>
            <h4 className=' font-mono text-sm text-gray-500'>{me}</h4>
            <video className='rounded-lg' muted ref={myVideo} autoPlay width="400" />
          </div>
        )
      }
      {
        callAccepted && !callEnded && (
          <div>
            <h4>Other's Video</h4>
            <h4 className=' font-mono text-sm text-gray-500'>{call.name || 'Name'}</h4>
            <video className='rounded-lg' ref={userVideo} autoPlay width="600" />
          </div>
        )
      }
    </div>
  )
}

export default VideoPlayer