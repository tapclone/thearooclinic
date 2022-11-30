import {React,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {userContext} from '../Context/Context'
function BlogCard({item,splitDesc}) {
  const navigate=useNavigate()
  const {singleBlog,setSingleBlog}=useContext(userContext)


  function handleSingleBlog(item){
    setSingleBlog(item)
    navigate('/blogSingle')
  }
  return (

    <div class="blog-list col-md-6 " >
      <div style={{width:'100%',height:'50%'}}><img src={item.image} class="img-fluid" alt="#" style={{width:'100%',height:'100%'}}/></div>
    
    <div class="blog-date">
        <h3>{item.blogDate.day}</h3>
        <span>{item.blogDate.month}</span>
    </div>
    <div class="blog-text-wrap">
        
        <h3>{item.Name}</h3>
        <p>{splitDesc}.......</p>
        <a  class="btn btn-primary"  onClick={()=>handleSingleBlog(item)}>Read More</a>
    </div>
</div>
  )
}

export default BlogCard