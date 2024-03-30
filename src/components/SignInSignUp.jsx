import React, { useEffect, useState } from 'react'
import Signin from './Signin'
import Login from './Login'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import Layout from './Layout'

function SignInSignUp() {
    const auth = getAuth(app);
    const [users , setUsers] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth , (user) => {
            if(user){
                console.log("hello", user );
                setUsers(user);
            }
            else{
                console.log("please login")
                setUsers(null)
            }
        })
    },[]);

    if(users == null){
        return(
            <>
                <Login />
                <Signin />
            </>
            )
    }

  return (
    <div>
        <Layout />
    </div>
  )
}

export default SignInSignUp