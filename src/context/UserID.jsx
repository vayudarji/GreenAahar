import { createContext, useState } from "react";

export const UIDContext = createContext(null);


export const UIDProvider = (props) => {
    const [userID , setUserID] = useState("");
    return(
        <UIDContext.Provider value={{userID , setUserID}}>
            {props.children}
        </UIDContext.Provider>
    )
}