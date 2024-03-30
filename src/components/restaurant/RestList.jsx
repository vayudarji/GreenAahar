import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../../../firebase';
import { getDatabase, ref, onValue } from "firebase/database";


function RestList() {
    const db = getDatabase(app);
    const auth = getAuth(app);
    const [userID , setUserID] = useState("");
    const [orgData , setOrgData] = useState();

    useEffect(()=>{
        console.log("hello")
        onAuthStateChanged(auth , (user) => {
            if(user){
                console.log("hello", user.uid );
                setUserID(user.uid)
            }
            else{
                console.log("please login")
            }
        })
    },[auth ]);

    useEffect(()=>{
        
        const RestRef = ref(db , 'organisation/profil/' + userID)
        onValue(RestRef , (snapshot)=>{
            const data = snapshot.val();
            console.log(data)
            setOrgData(data)
        })
    },[db , userID])

  return (
    <div>
        {orgData && (
            <>
                <h1>{orgData.orgname}</h1>
                <h1>{orgData.orgproduct}</h1>
            </>
        )}
    </div>
  )
}

export default RestList