import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Editblogs() {

    let {blogid} = useParams()
    const navigate = useNavigate();

    const initialValue = {
      title: "",
      description: "",
      category: "",
      image: "",
    }

    const [input, setInput] = useState(initialValue)



    const handleEdit = () => {
        const url = `https://crabby-fly-pumps.cyclic.cloud/blogs/edit/${blogid}`
        const  {title, description, category, image} = input

        axios.put(
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
            console.log(response)
            if(response.status){
                navigate('/')
            }
        });
    }

    const handleChange = (e) => {
      const { name, value } = e.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name]: name === 'image' ? value : value.trim(),
      }));
        console.log(input)
    }


    const handleSubmit = () => {
        console.log(input);
        handleEdit()
      }

  return (
    <div>
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
        <button onClick={handleSubmit}>Edit This Blog</button>
    </div>

    </div>
  )
}

export default Editblogs