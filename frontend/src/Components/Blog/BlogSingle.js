import {React,useContext, useEffect} from 'react'
import {userContext} from '../Context/Context'
function BlogSingle() {
  const {singleBlog,setSingleBlog}=useContext(userContext)

  useEffect(()=>{
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  },[])
  return (
    <div className='container mt-5 mb-5'>
        <div className="row">
            <div className="col-md-6">
                <img src={singleBlog.image} alt="" style={{width:'inherit',height:'inherit'}}/>
            </div>
            <div className="col-md-6">
                <h1>{singleBlog.Name}</h1>
                <p>{singleBlog.Description}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogSingle