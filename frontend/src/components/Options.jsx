import React, { useContext, useState } from 'react'
import { SocketContext } from '../Context';

function Options() {

  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div>
      
    </div>
  )
}

export default Options