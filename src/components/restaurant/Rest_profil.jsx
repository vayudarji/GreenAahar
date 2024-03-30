import { getDatabase, set , ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react'
import { app } from '../../../firebase';
import { UIDContext } from '../../context/UserID';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Rest_profil() {

    const auth = getAuth(app);

    // const UserIDContext = useContext(UIDContext)
    // console.log( UserIDContext);
    

    const [restName , setRestName] = useState("");
    const [restAddress , setRestAddress] = useState("");
    const [restPrudect , setRestProduct] = useState("");
    const [userID , setUserID] = useState("");

    const db = getDatabase(app);

    const setData = () => {
        console.log(userID)
        if(userID){
            set(ref(db,'organisation/profil/' + userID),{
                orgname:restName,
                orgaddress:restAddress,
                orgproduct:restPrudect
            });
        }
    }
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
    },[]);
    
    const handleName = (e) => {
        setRestName(e.target.value);
    }
    const handleAddress = (e) => {
        setRestAddress(e.target.value);
    }
    const handleCuisine = (e) => {
        setRestProduct(e.target.value);
    }
  return (
    <div className='grid grid-cols-2 gap-4'>  
        <label htmlFor="">Organisation Name</label>
        <input type="text" onChange={handleName} className='outline'/>
        <label htmlFor="">Address of Organisation</label>
        <input type="text" onChange={handleAddress} className='outline'/>
        <label htmlFor="">Product</label>
        <input type="text" onChange={handleCuisine} className='outline'/>
        <button onClick={setData}>Submit</button>
    </div>
    
  )
}

export default Rest_profil