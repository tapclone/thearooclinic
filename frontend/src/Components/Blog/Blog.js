import axios from 'axios'
import {React,useState,useEffect} from 'react'
import BlogCard from './BlogCard'

function Blog() {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      },[blogs])

    useEffect(()=>{
        axios.get('/api/admin/viewAllBlog').then(res=>{
          
            setBlogs(res.data)
           }).catch(err=>{
            console.log(err);
           })
    },[])
  return (
    <div>
    <section class="space sub-header">
        <div class="container container-custom">
            <div class="row">
                <div class="col-md-6">
                    <div class="sub-header_content">
                        <p>BLOG STANDARD</p>
                        <h3>Lorem ipsum dolor sit ametco nse<br/> ctetur adipisicing elitsed.</h3>
                        <span><i>Home / Blog Standard</i></span>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="sub-header_main">
                        <h2>Blog</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <section class="space"> */}
        <div class="container mt-5 mb-5 ">
            <div class="row  " style={{padding:'0 5%'}}>

            {blogs.map((item)=>{
                const splitDesc=item.Description.slice(0,100)
                
               return <BlogCard item={item} splitDesc={splitDesc} ></BlogCard>
            })}
                    
        
            </div>
        </div>
    {/* </section> */}
    <section class="counter">
        <div class="container container-custom">
            <div class="row">
                <div class="col-sm-4 col-md-3 col-lg-3">
                    <div class="counter-block">
                        <img src="images/counter1.png" alt="#"/>
                        <div class="counter-text">
                            <h2>60+</h2>
                            <p>Expert Doctors</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 col-lg-3">
                    <div class="counter-block">
                        <img src="images/counter2.png" alt="#"/>
                        <div class="counter-text">
                            <h2>1000+</h2>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4 col-md-3 col-lg-3">
                    <div class="counter-block">
                        <img src="images/counter3.png" alt="#"/>
                        <div class="counter-text">
                            <h2>150+</h2>
                            <p>Award Winner</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3 col-lg-3 d-flex align-items-center justify-content-end">
                    <div class="counter-btn_block">
                        <a href="#" class="btn btn-success">BOOK NOW</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blog