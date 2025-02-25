import { useState } from "react";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import {useCookies} from "react-cookie"
import login from './login.jpg'
export const Auth = () => {
  return (
    <div style={{backgroundImage:`url(${login})` , backgroundSize:"cover"}}>
      <Login />
      <Register />
    </div>
  );
}

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  let [, setCookies] = useCookies(["access_token"]);


  let submit = async(e) => {
    e.preventDefault();
    try {
     let responce = await axios.post("http://localhost:3001/auth/login" ,{ 
     username , password,})
     if(responce.data.message == "user DOnt Exit"){
       return alert("User Not Found")
     }
     else{
     
      alert("Login Sucessfully You can Begin ! ")
      setCookies("access_token" , responce.data.tokken)
      window.localStorage.setItem("userID", responce.data.Userid);
     console.log(responce.data);
     navigate("/")
     }
    } catch (error){
      return alert(error)
    }
  }
  return (
    <>
      <div>
        <h1 className="text-center" style={{fontSize:"30px"}}>Login</h1>
        <form className="max-w-sm mx-auto" onSubmit={submit}>
          <div className="mb-5">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 text-black">Your username</label>
            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required
              value={username} onChange={(e) => (setUsername(e.target.value))}
            />
          </div>
          <div className="mb-5">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 text-black	">Your password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password" required
              value={password} onChange={(e) => (setPassword(e.target.value))}
            />
          </div>
          <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
              <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          <h1>{password}</h1>

        </form>
      </div>

    </>
  )
}

const Register = () => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  let submit = async (e)=> {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register" , {
        username,
        password,
      })
      alert("Sucessfully You can Begin ! ")
    } catch (error){
      return alert(error)
    }


  }
  return (
    <>

      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        label="Register"
        submit={submit}

      />

    </>
  )
}

let Form = ({ username, setUsername, password, setPassword, label, submit }) => {
  return (
    <>
      <h1 className="text-center"style={{fontSize:"30px"}}>{label}</h1>
      <form className="max-w-sm mx-auto" onSubmit={submit}>
        <div className="mb-5">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 text-black">Your Name</label>
          <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Name" required
            value={username} onChange={(e) => (setUsername(e.target.value))}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 text-black	">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Password"  required
            value={password} onChange={(e) => (setPassword(e.target.value))}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>


      </form>
    </>
  )
}