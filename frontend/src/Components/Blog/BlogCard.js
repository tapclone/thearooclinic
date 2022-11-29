import React from 'react'

function BlogCard({item}) {
  console.log(item.Name);
  return (
    
    <div class="blog-list col-md-6 " >
      <div style={{width:'100%',height:'50%'}}><img src={item.image} class="img-fluid" alt="#" style={{width:'100%',height:'100%'}}/></div>
    
    <div class="blog-date">
        <h3>{item.blogDate.day}</h3>
        <span>{item.blogDate.month}</span>
    </div>
    <div class="blog-text-wrap">
        
        <h3>{item.Name}</h3>
        <p>{item.Description}</p>
        <a href="/blogSingle" class="btn btn-primary">Read More</a>
    </div>
</div>
  )
}

export default BlogCard