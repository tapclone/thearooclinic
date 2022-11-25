import React from 'react'

function BlogCard() {
  return (
    <div class="blog-list col-md-6 " >
    <img src="https://demo.web3canvas.com/themeforest/medenin/images/blog-img.jpg" class="img-fluid" alt="#"/>
    <div class="blog-date">
        <h3>05</h3>
        <span>JUN</span>
    </div>
    <div class="blog-text-wrap">
        <div class="blog-comment-top">
            <p><i class="far fa-user"></i>Jhone Doe <span>|</span> <i class="far fa-user"></i>Jhone Doe</p>
            <label>Health Tips</label>
        </div>
        <h3>Things you may not know about medicaid den..</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudt. </p>
        <a href="/blogSingle" class="btn btn-primary">Read More</a>
    </div>
</div>
  )
}

export default BlogCard