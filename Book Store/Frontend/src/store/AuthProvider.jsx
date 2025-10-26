import React, { Children } from "react";
import { createContext , useContext , useState  } from "react";
export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
   let intialAuthUser = localStorage.getItem("User")
   let [authUser , setAuthUser] = useState(
    intialAuthUser ? JSON.parse(intialAuthUser) : undefined
   );
   return (
     <AuthContext.Provider value={[authUser, setAuthUser]}>
    {children}
  </AuthContext.Provider>
   )

}

export const useAuth = ()=> useContext(AuthContext)