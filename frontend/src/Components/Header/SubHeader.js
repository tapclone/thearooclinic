import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
function SubHeader() {
    return (
        <div>
          <section>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="top-bar">
                        <div class="row">
                            <div class="col-lg-3 col-md-12">
                                <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="#"/></a>
                            </div>
                            <div class="col-md-9 d-flex align-items-end">
                                <ul class="ml-auto">
                                    <li>
                                        <img src="images/mail-icon.png" alt="#"/>
                                        <div>
                                            <span>Mail us</span>
                                            <h4>info@medenin</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="images/call-icon.png" alt="#"/>
                                        <div>
                                            <span>Toll Free</span>
                                            <h4>+123 456 7890</h4>
                                        </div>
                                    </li>
                                    <li class="appointment-btn">
                                        <a href="appointment.html" class="btn btn-primary">Make Appointment</a>
                                        <i class="fas fa-search"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </section>
            <div class="light nav-big">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <nav class="navbar navbar-expand-lg navbar-light">
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto nav-sub">
                                        <li class="nav-item ">
                                            <a class="nav-link " href="/" role="button" aria-haspopup="true" aria-expanded="false">
                                                Home <AddIcon sx={{ fontSize: 'small' }}></AddIcon>
                                            </a>

                                        </li>
                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown1"
                                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false"> Department <AddIcon sx={{ fontSize: 'small' }}></AddIcon></a>
                                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a class="dropdown-item" href="services.html">Gynacology</a>
                                                <a class="dropdown-item" href="services-2.html">Cardiology</a>

                                            </div>
                                        </li>

                                        <li class="nav-item ">
                                            <a class="nav-link " href="/gallery"
                                                aria-haspopup="true" aria-expanded="false">
                                                Gallery <AddIcon sx={{ fontSize: 'small' }}></AddIcon>
                                            </a>

                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link" href="/blog"
                                                role="button" aria-haspopup="true"
                                                aria-expanded="false"> Blog <AddIcon sx={{ fontSize: 'small' }}></AddIcon> </a>

                                        </li>

                                        <li class="nav-item ">
                                            <a class="nav-link" href="/about"
                                                role="button" aria-haspopup="true"
                                                aria-expanded="false"> About <AddIcon sx={{ fontSize: 'small' }}></AddIcon> </a>

                                        </li>
                                        <li class="nav-item ">
                                            <a class="nav-link " href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                                Contact Us <AddIcon sx={{ fontSize: 'small' }}></AddIcon>
                                            </a>

                                        </li>
                                    </ul>
                                    <ul class="nav-icon-wrap">
                                        <li>
                                            <a href="#"><FacebookIcon sx={{ fontSize: 'small' }}></FacebookIcon></a>

                                        </li>
                                        <li>
                                            <a href="#"><TwitterIcon sx={{ fontSize: 'small' }}></TwitterIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><InstagramIcon sx={{ fontSize: 'small' }}></InstagramIcon></a>
                                        </li>
                                        <li>
                                            <a href="#"><GoogleIcon sx={{ fontSize: 'small' }}></GoogleIcon></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader