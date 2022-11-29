import {React,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AdminDoctors from '../Components/AdminPanel/AdminDoctors'
import AdminMain from '../Components/AdminPanel/AdminMain'

function AdminDoctorsPage() {

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
        <AdminDoctors></AdminDoctors>
    </div>
  )
}

export default AdminDoctorsPage