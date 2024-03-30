
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../../firebase'

function Signin() {
    const auth = getAuth(app)
    const [password , setPassword] = useState()
    const [email , setEmail] = useState()

    const  signIn = () => {
        signInWithEmailAndPassword(auth , email , password)
        .then((value)=>(console.log(value)))
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
  return (
    <div>
        <div>
            <label htmlFor="">Enter email</label>
            <input type="email"
                onChange={handleEmail}
                className='outline' />
        </div>
        <div>
            <label >Enter password</label>
            <input type="password"
                onChange={handlePassword}
                className='outline' />
        </div>
        <div>
            <button onClick={signIn} 
                className='text-white bg-blue-700 rounded-lg'
            >Signin</button>
        </div>
    </div>
  )
}

export default Signin