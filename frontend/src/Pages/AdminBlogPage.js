import {React,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AdminBlog from '../Components/AdminPanel/AdminBlog'
import AdminMain from '../Components/AdminPanel/AdminMain'

function AdminBlogPage() {
  const navigate=useNavigate()
 const token=localStorage.getItem("adminToken");
 useEffect(()=>{
  if(!token){
    navigate('/admin')
   }
 },[])
 if(token)
  return (
    <div>
        <AdminMain></AdminMain>
        <AdminBlog></AdminBlog>
    </div>
  )
}

export default AdminBlogPage