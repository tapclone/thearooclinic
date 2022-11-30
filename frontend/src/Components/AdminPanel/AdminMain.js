import {React,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import CollectionsIcon from '@mui/icons-material/Collections';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import MedicationIcon from '@mui/icons-material/Medication';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import swal from 'sweetalert'
function AdminMain() {
  const [navState,setNavState]=useState(false)
  const navigate=useNavigate()
  const handleLogout=()=>{
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          localStorage.removeItem('adminToken')
          navigate('/admin')
        } catch (error) {
          console.log(error);
        }
      } 

    });
   
  }
  return (
      <div class="s-layout__sidebar">
        <a class="s-sidebar__trigger" href="#0" onClick={()=>setNavState(!navState)}>
          <MenuIcon sx={{fontSize:'2rem',color:'white'}} ></MenuIcon>
        </a>
        <nav className={`s-sidebar__nav ${navState?' navBarResponsive':'notResp'}`}>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              height: "100%",
              marginTop: '3rem'
            }}
          >
            <div>
              <li>
                <a class="s-sidebar__nav-link" href="/adminHome">
                  <CollectionsIcon className='navIcon'></CollectionsIcon>
                  <em>Gallery</em>
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="/adminBlog">
                  <BookmarksIcon className='navIcon'></BookmarksIcon>
                  <em>Blog</em>
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="/adminAddDoctors">
                  <MedicationIcon className='navIcon'></MedicationIcon>
                  <em>Doctors</em>
                </a>
              </li>
            </div>
            <div>
              <li>
                <a class="s-sidebar__nav-link" onClick={handleLogout} >
                  <LogoutIcon className='navIcon'/>
                  <em>Logout</em>
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>
  )
}

export default AdminMain