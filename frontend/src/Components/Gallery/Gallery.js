import {React,useEffect,useState} from 'react'
import axios from 'axios'
import Footer from '../Footer/Footer'
import SubHeader from '../Header/SubHeader'
import GalleryCard from './GalleryCard'
import './Gallery.css'
function Gallery() {
    const [gallery,setGallery]=useState([])
    useEffect(()=>{
        axios.get('/api/admin/viewAllGallery').then(res=>{
          
            setGallery(res.data)
           }).catch(err=>{
            console.log(err);
           })
    },[])
  return (
    <div>
        <SubHeader></SubHeader>
        <section class="space sub-header">
        <div class="container container-custom">
            <div class="row">
                <div class="col-md-6">
                    <div class="sub-header_content">
                        <p>Gallery</p>
                        <h3>Lorem ipsum dolor sit ametco nse<br/> ctetur adipisicing elitsed.</h3>
                        <span><i>Home / Gallery</i></span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="sub-header_main">
                        <h2>Gallery</h2>
                    </div>
                </div>
            </div>
        </div>
        </section>
        <section class="space light">
        <div class="container container-custom">
            <div class="row">
                <div class="col-md-12">
                    <div class="sub-title_center">
                        <span>---- Gallery ----</span>
                        <h2>Lorem ipsum dolor sit ametco nse</h2>
                    </div>
                </div>
            </div>
            <div className='container' >
                <div className='row'>
             {gallery.map((item)=>{
                return <GalleryCard item={item}></GalleryCard>
             })}
             </div>
            </div>
            
        </div>
        </section>
        <Footer></Footer>
    </div>
  )
}

export default Gallery