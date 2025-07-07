import { create }from "zustand"
import { axiosInstance  } from "../lib/axios";
import toast from "react-hot-toast"

export const useAuthStore = create((set,get)=>({

    authUser : null,
    isCheckingAuth : true,
    isLogingin : false,
    isSigningup : false,
    isUpdatingProfile : false,


    checkAuth : async()=>{
       try {
         let responce = await axiosInstance.get("/api/auth/check")
         console.log(res);
         
         set({authUser : responce.data})
       } catch (error) {
         console.log("error in Check auth" , error);
         set({authUser : null})
         
       }
       finally{
        set({isCheckingAuth : false})
       }
    },
    signUp : async(data)=>{
       set({isSigningup : true})
       try {
        const res = await axiosInstance.post("/api/auth/signup" , data)
        set({authUser : res.data})
        toast.success("Account Created Successfully")
       } catch (error) {
         toast.error(error.response.data.message)
       }
       finally{
        set({isSigningup : false})
       }
    },
    login : async(data)=>{
      set({isLogingin : true})
      try {
        const res = await axiosInstance.post("/api/auth/signup" , data)
        set({authUser : res.data})
        toast.success("LoggIn Succesfully")
      } catch (error) {
        toast.error("Invalid Credentials")
        console.log(error.message);
        
      } 
      finally{
        set({authUser : false})
      }
    },
    logout : async()=>{
      try {
        await axiosInstance.post("/api/auth/logout")
        set({authUser : null})
        toast.success("Logout Successfully")
      } catch (error) {
        toast.error(error.message) 
      }
    }


}))