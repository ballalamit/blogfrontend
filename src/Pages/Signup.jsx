import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'

function Signup() {
    
    const initialValue = {
        name : "",
        email: "",
        password: "",
        phone_Number: ""
    }

    const [user, SetUser] = useState(initialValue)
    const [signupmessage, setSignupmessage] = useState(false)

    const hanldeOnchange = (e) => {
        SetUser({...user, [e.target.name]: e.target.value})
            // console.log(user)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(user)
        Signup(user);
    }


    const Signup = (user) => {

        const url = `https://crabby-fly-pumps.cyclic.cloud/signup`
        let { email, password, name, phone_Number } = user;
        axios
        .post(url, {
            email,
            password,
            name,
            phone_Number
      })
      .then((response) => {
        console.log("Signup page" ,response.data.message);
        if(response.data.message == "User registered Successfully"){
          setSignupmessage(true)
        }
      });
   
    }

    if(signupmessage){
      alert("User registered Successfully, Now go to Login Page")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" name="name" placeholder='name' onChange={(e) => hanldeOnchange(e)}/>
            <input type="text" name='email' placeholder='email' onChange={(e) => hanldeOnchange(e)}/>
            <input type="password" name='password' placeholder='password' onChange={(e) => hanldeOnchange(e)}/>
            <input type="text" name='phone_Number' placeholder='phone_Number' onChange={(e) => hanldeOnchange(e)} />
            <button>Signup</button>
        </form>

        
    </div>
  )
}

export default Signup