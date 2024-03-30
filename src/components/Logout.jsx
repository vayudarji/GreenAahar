import { getAuth, signOut } from 'firebase/auth'
import React from 'react'
import { app } from '../../firebase'

function Logout() {

    const auth = getAuth(app)

  return (
    <div>
        <button onClick={()=>{signOut(auth)}}
            className='bg-blue-300 rounded-md'>
            Logout</button>
    </div>
  )
}

export default Logout