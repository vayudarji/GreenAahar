import React, { useEffect, useState , useContext } from 'react'
import Signin from './Signin'
import Login from './Login'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../../firebase'
import Layout from './Layout'
import {UIDContext} from "../context/UserID"

function SignInSignUp() {

    const userIDState = useContext(UIDContext);
      console.log(userIDState.userID);

    const auth = getAuth(app);
    const [users , setUsers] = useState(null);

    useEffect(()=>{
        onAuthStateChanged(auth , (user) => {
            if(user){
                console.log("hello", user.uid );
                setUsers(user);
                userIDState.setUserID(user.uid)
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