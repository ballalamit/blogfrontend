import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Blogs from './Blogs'
import Editblogs from './EditBlogs'
import AddBlogs from './AddBlogs'
import Signup from './Signup'
import Login from './Login'


function AllRoutes() {
  return (
    <div>
      
        <Routes >
            <Route path='/' element={<Blogs/>} />
            <Route path='/blogs/edit/:blogid' element={<Editblogs/>} />
            <Route path='/add' element={<AddBlogs/>} />
            <Route path='/signup' element={<Signup />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>

    </div>
  )
}

export default AllRoutes