import React, { useContext, useState } from 'react'
import { SocketContext } from '../Context';

function Options() {

  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div className='flex gap-2 mt-2'>
      {
        callAccepted && !callEnded ? (
            <button 
              className='px-3 py-1 bg-red-500 text-white rounded-md shadow font-semibold text-sm' 
              onClick={leaveCall}
            >
                End Call
            </button>
        ) : (
          <>
            <input 
              className='px-2 py-1 border rounded-md outline-blue-400' 
              placeholder='User ID' 
              type="text" 
              value={idToCall} 
              onChange={(e) => setIdToCall(e.target.value)}
            />
            <button 
              className='px-3 py-1 bg-blue-500 text-white rounded-md shadow font-semibold text-sm' 
              onClick={() => callUser(idToCall)}
            >
                Call
            </button>
          </>
        )
      }

    </div>
  )
}

export default Options