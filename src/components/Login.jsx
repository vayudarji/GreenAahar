import React, { useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase';
import {UIDContext} from "../context/UserID"

function Login() {

    //  const userIDState = useContext(UIDContext);
    //  console.log(userIDState.userID);

    

    const auth = getAuth(app);

    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    
        const signUp = () => {
            createUserWithEmailAndPassword(auth , email , password )
                .then((value)=>{console.log(value)
                // userIDState.setUserID(value.uid)
            })
                .catch((error)=>(console.log(error)))
        }
    
    

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
    }

  return (
    <div>
        <div>
            <label htmlFor="">Enter Email</label>
            <input type="email"
            onChange={handleEmail}
            className='outline' />
        </div>
        <div>
            <label htmlFor="">Enter password</label>
            <input type="password"
            onChange={handlePass}
            className='outline' />
        </div>
        <div>
            <button onClick={signUp}
                className='text-white bg-blue-700 rounded-lg'
            >Signup</button>
        </div>
    </div>
  )
}

export default Login