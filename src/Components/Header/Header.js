import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
function Header() {  
  return (
    <header>
        <div class="banner--wrap">
            <nav>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav class="navbar navbar-expand-lg navbar-light">
                                <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="#" /></a>
                                <button class="navbar-toggler nav-custome1" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle
                                        navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ml-auto">
                                        <li class="nav-item ">
                                            <a class="nav-link" href="/" 
                                                role="button"  aria-haspopup="true"
                                                aria-expanded="false"> Home <AddIcon sx={{fontSize:'small'}}></AddIcon> </a>
                                           
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false"> Department <AddIcon sx={{fontSize:'small'}}></AddIcon></a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="services.html">Gynacology</a>
                                                <a class="dropdown-item" href="services-2.html">Cardiology</a>
                                                
                                            </div>
                                        </li>
    
                                        <li class="nav-item ">
                                            <a class="nav-link" href="/gallery"
                                                aria-haspopup="true" aria-expanded="false">
                                                Gallery <AddIcon sx={{fontSize:'small'}}></AddIcon>
                                            </a>
                                            </li>
                                            <li class="nav-item ">
                                            <a class="nav-link" href="/blog" 
                                                role="button"  aria-haspopup="true"
                                                aria-expanded="false"> Blog <AddIcon sx={{fontSize:'small'}}></AddIcon> </a>
                                           
                                        </li>
                                       
                                        <li class="nav-item ">
                                            <a class="nav-link " href="/about"
                                                role="button"  aria-haspopup="true"
                                                aria-expanded="false"> About  <AddIcon sx={{fontSize:'small'}}></AddIcon> </a>
                                            
                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link " href="#" 
                                                role="button"  aria-haspopup="true"
                                                aria-expanded="false"> Contact Us <AddIcon sx={{fontSize:'small'}}></AddIcon> </a>
                                            
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link btn btn-outline-primary appointment-btn-top" href="appointment.html">Appointment</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                          
                        </div>
                    </div>
                </div>
            </nav>
            <div class="container">
                <div class="banner-slider">
                    <div class="banner">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                              
                                <div class="main-title">
                                    <span>We are here for you</span>
                                    <h1>
                                        What Makes Us Better, Makes You Better.
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                        ipsum dolor sit amet.
                                    </p>
                                    <a href="#" class="btn btn-primary">Make Appointment</a>
                                    <a href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                                        class="play-btn popup-youtube"><i class="fas fa-play"></i></a>
                                </div>
                               
                            </div>
                            <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                                <div class="anim-container flex-fill">
                                    <svg class="circle-svg" width="100%" height="100%" viewBox="0 0 754 733" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="big-circle" opacity="0.071" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                                            fill="#4D72D0" />
                                        <path class="small-circle" opacity="0.051" fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                                            fill="#4D72D0" />
                                    </svg>

                                    <img src="./images/hero-doctor-1.png" class="img-fluid animated-hero" alt="hero" />

                                    <ul class="main-slider-social">
                                        <li>
                                            <a href="#"><FacebookIcon sx={{fontSize:'small'}}></FacebookIcon></a>
                    
                                        </li>
                                        <li>
                                            <a href="#"><TwitterIcon sx={{fontSize:'small'}}></TwitterIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><InstagramIcon sx={{fontSize:'small'}}></InstagramIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><GoogleIcon sx={{fontSize:'small'}}></GoogleIcon></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="banner">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                           
                                <div class="main-title">
                                    <span>We are here for you</span>
                                    <h1>
                                        What Makes Us Better, Makes You Better.
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                        ipsum dolor sit amet.
                                    </p>
                                    <a href="#" class="btn btn-primary">Make Appointment</a>
                                    <a href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                                        class="play-btn popup-youtube"><i class="fas fa-play"></i></a>
                                </div>
                       
                            </div>
                            <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                                <div class="anim-container flex-fill">
                                    <svg class="circle-svg" width="100%" height="100%" viewBox="0 0 754 733" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="big-circle" opacity="0.071" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                                            fill="#4D72D0" />
                                        <path class="small-circle" opacity="0.051" fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                                            fill="#4D72D0" />
                                    </svg>

                                    <img src="./images/hero-doctor-1.png" class="img-fluid animated-hero" alt="hero" />

                                    <ul class="main-slider-social">
                                        <li>
                                            <a href="#"><FacebookIcon sx={{fontSize:'small'}}></FacebookIcon></a>
                    
                                        </li>
                                        <li>
                                            <a href="#"><TwitterIcon sx={{fontSize:'small'}}></TwitterIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><InstagramIcon sx={{fontSize:'small'}}></InstagramIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><TwitterIcon sx={{fontSize:'small'}}></TwitterIcon></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="banner">
                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                         
                                <div class="main-title">
                                    <span>We are here for you</span>
                                    <h1>
                                        What Makes Us Better, Makes You Better.
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                                        ipsum dolor sit amet.
                                    </p>
                                    <a href="#" class="btn btn-primary">Make Appointment</a>
                                    <a href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                                        class="play-btn popup-youtube"><i class="fas fa-play"></i></a>
                                </div>
                        
                            </div>
                            <div class="col-12 col-md-6 col-lg-7 d-flex align-items-end">
                                <div class="anim-container flex-fill">
                                    <svg class="circle-svg" width="100%" height="100%" viewBox="0 0 754 733" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="big-circle" opacity="0.071" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M377 29C563.12 29 714 179.879 714 366C714 552.119 563.12 702.999 377 702.999C190.88 702.999 40 552.119 40 366C40 179.879 190.88 29 377 29Z"
                                            fill="#4D72D0" />
                                        <path class="small-circle" opacity="0.051" fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M376.471 120.995C512.043 120.995 621.947 230.898 621.947 366.471C621.947 502.043 512.043 611.946 376.471 611.946C240.898 611.946 130.995 502.043 130.995 366.471C130.995 230.898 240.898 120.995 376.471 120.995Z"
                                            fill="#4D72D0" />
                                    </svg>

                                    <img src="./images/hero-doctor-1.png" class="img-fluid animated-hero" alt="hero" />

                                    <ul class="main-slider-social">
                                        <li>
                                            <a href="#"><FacebookIcon sx={{fontSize:'small'}}></FacebookIcon></a>
                    
                                        </li>
                                        <li>
                                            <a href="#"><TwitterIcon sx={{fontSize:'small'}}></TwitterIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><InstagramIcon sx={{fontSize:'small'}}></InstagramIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><TwitterIcon sx={{fontSize:'small'}}></TwitterIcon></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
        </div>
    </header>
  )
}

export default Header