import { createContext, useContext, useEffect, useState } from "react";
import authservice from "../appwrite/auth";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) =>{
  const [user,setUser] = useState(null)
  const [getuser,setGetuser] = useState(true)

  useEffect(()=>{
    const fetchUser = async()=>{
      try {
        const userData = await authservice.get()
        if(userData){
          setUser(userData)
        }
      } catch (error) {
        setUser(null)
      }
      finally{
        setGetuser(false)
      }
    }
    fetchUser()
  },[])

  const signup = async({email,password,name})=>{
    try {
      const userAccount = await authservice.createAccount({email,password,name})
    const userData = await authservice.get()
    if(userData){
      setUser(userData)
    }
    return userAccount
    } catch (error) {
      setUser(null)
      console.error("SignUp Failed",error.message)
      throw error
    }
  
  }
  
  const login = async({email,password})=>{
    try {
      const session = await authservice.login({email,password})
    const userData = await authservice.get()
    if(userData){
      setUser(userData)
    }
    return session
    } catch (error) {
      setUser(null)
      console.error("Login Failed",error.message)
      throw error
    }
  
  }
  
  const logout = async()=>{
    try {
      await authservice.logout()
      setUser(null)
    } catch (error) {
      console.error("Logout Failed",error.message)
      throw error
    }
  }

  return(
    <AuthContext.Provider value={{user,getuser,signup,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}  

