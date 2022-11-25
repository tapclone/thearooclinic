import React from 'react'
import CollectionsIcon from '@mui/icons-material/Collections';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import MedicationIcon from '@mui/icons-material/Medication';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
function AdminMain() {
  return (
      <div class="s-layout__sidebar">
        <a class="s-sidebar__trigger" href="#0">
          <MenuIcon sx={{fontSize:'2rem',color:'white'}}></MenuIcon>
        </a>
        <nav class="s-sidebar__nav">
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              height: "100%",
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
                <a class="s-sidebar__nav-link" href="/adminGallery">
                  <BookmarksIcon className='navIcon'></BookmarksIcon>
                  <em>Blog</em>
                </a>
              </li>
              <li>
                <a class="s-sidebar__nav-link" href="/adminGallery">
                  <MedicationIcon className='navIcon'></MedicationIcon>
                  <em>Doctors</em>
                </a>
              </li>
            </div>
            <div>
              <li>
                <a class="s-sidebar__nav-link" >
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