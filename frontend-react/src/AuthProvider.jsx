
import React, { useState,useContext,createContext } from 'react'


// step1: create context
const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken')
    )

// step2: provide the context data
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};