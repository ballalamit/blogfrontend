import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Blogs() {

 const [blogs, SetBlogs] = useState([]);

 const navigate = useNavigate();

 const getBlogs = () => {
    const url = `https://crabby-fly-pumps.cyclic.cloud/blogs`
    axios.get(url,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`
            }
    }).then((response) =>{
        SetBlogs(response.data.blogs)
       
    });
 }

 useEffect(()=>{
    getBlogs();
 },[])

 console.log(blogs);

 const handleEdit = (blogid) => {

    navigate(`/blogs/edit/${blogid}`)
    console.log(blogid);
 }

 const handleDelete = (blogid) => {

    const url = `https://crabby-fly-pumps.cyclic.cloud/blogs/delete/${blogid}`
    axios.delete(url,{
        headers: {
            Authorization : `Bearer ${localStorage.getItem("token")}`
            }
    }).then((response) =>{
        console.log(response)
        if(response.data.message=="You dont have access to delete this page"){
          alert("You dont have access to delete this blog")
        }
        getBlogs();
       
    });

    
 }

  return (
    <div >
       { blogs.map((elem) => {
              return ( <div key={elem._id} style={{border: "1px solid black", width: "500px" , margin: "auto", marginTop: "50px"}}>
                    <h3>Title: {elem.title}</h3>
                    <p>Content: {elem.description}</p>
                    <p>Category: {elem.category}</p>
                    <img src={elem.image} alt=""  width={"100px"}/>
                    <button onClick={() => {handleEdit(elem._id)}}>Edit</button>
                    <button onClick={() => {handleDelete(elem._id)}}>Delete</button>
                </div>
              )
        })
     }

    </div>
  )
}

export default Blogs