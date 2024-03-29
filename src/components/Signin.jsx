
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'

function Signin() {
    const auth = getAuth()
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
                onChange={handleEmail} />
        </div>
        <div>
            <label >Enter password</label>
            <input type="password"
                onChange={handlePassword} />
        </div>
        <div>
            <button onClick={signIn}>Signin</button>
        </div>
    </div>
  )
}

export default Signin