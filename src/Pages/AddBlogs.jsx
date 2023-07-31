import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddBlogs() {

    const initialValue = {
        title: "",
        description: "",
        category: "",
        image: "",
    }

    const navigate = useNavigate();


    const [input, setInput] = useState(initialValue)
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name]: name === 'image' ? value : value.trim(),
      }));
        console.log(input)
    }
    
    const handleSubmit = () => {
        const url = `https://crabby-fly-pumps.cyclic.cloud/blogs/create`
        const  {title, description, category, image} = input

        axios.post(
            url,
            {
                title,
                description,
                category,
                image
            },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        ).then((response) =>{
            console.log(response.data.message)
            if(response.data.message == "Blog created successfully"){
                navigate('/')
            }
        });
    }

    

  return (
    <div>
        <br />
        <input type="text" placeholder='title' name='title' onChange={(e) => handleChange(e)} />
        <br />
        <br />
        <textarea name="description" id="description" cols="20" rows="8"  placeholder='description' onChange={(e) => handleChange(e)} ></textarea>
        <br />
        <select name="category" id="category" onChange={(e) => handleChange(e)} >
          <option value="Career">Career</option>
          <option value="Finance">Finance</option>
          <option value="Travel">Travel</option>
          <option value="Sports">Sports</option>
        </select>
        <br />
        <br />
        <input type="text" placeholder='Add image URL (Optional)' name="image" onChange={(e) => handleChange(e)}  />
        <br />
        <br />
        <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddBlogs