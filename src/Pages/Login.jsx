import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

    const initialValue = {
         email: "",
        password: "",
    }

    const navigate = useNavigate();

    const [user, SetUser] = useState(initialValue);


    const Login = (user) => {
        const url = `https://crabby-fly-pumps.cyclic.cloud/login`
        let { email, password } = user;
        axios
        .post(url, {
            email,
            password,
      })
      .then((response) => {
        console.log("Login page" ,response);
        console.log("Login page" ,response.data.token);
        let token = response.data.token
        localStorage.setItem("token", token)

        if(response.data.message == "Login Successfull"){
          navigate(`/`)
        }
        
      });
    }
   
    const hanldeOnchange = (e) => {
        SetUser({...user, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Login(user);
    }



  return (
    <div>
         <form onSubmit={handleSubmit}>
            <input type="text" name='email' placeholder='email' onChange={(e) => hanldeOnchange(e)}/>
            <input type="password" name='password' placeholder='password' onChange={(e) => hanldeOnchange(e)}/>
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login