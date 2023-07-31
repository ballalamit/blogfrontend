import React from 'react'
import { Link as ReactLink } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display: "flex" , justifyContent: "space-evenly" , border: "1px solid black"}}>
        <ReactLink to={"/"} >Home</ReactLink>
        <ReactLink to={"/login"} >login</ReactLink>
        <ReactLink to={"/Signup"} >Signup</ReactLink>
        <ReactLink to={"/add"} >Add Blog</ReactLink>

    </div>
  )
}

export default Navbar