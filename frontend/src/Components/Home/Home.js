import { React } from 'react'
import DoctorsSlider from './DoctorsSlider'

function Home() {
    return (
        <div>
            <section class="about-section">
                <div class="container container-custom">
                    <div class="row">
                        <div class="col-md-12">

                            <ul class="booking-form">
                                <li><input type="text" class="form-control" placeholder="Enter Your Name" /><i
                                    class="fas fa-user"></i></li>
                                <li><input type="text" class="form-control" placeholder="Select Your Location" /><i
                                    class="fas fa-map-marker-alt"></i></li>
                                <li>
                                    <select class="custom-select form-control">
                                        <option selected>Select a Service</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </li>
                                <li class="form-btn">
                                    <a href="#" class="btn btn-success">BOOK NOW</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="row space">

                        <div class="col-md-4">
                            <div class="service-thumbnail d-flex flex-fill">
                                <img src="images/service-thumbnail01.png" class="img-fluid" alt="#" />
                                <div class="service-thumbnail_text">
                                    <h4>Specialised Service</h4>
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="service-thumbnail d-flex flex-fill">
                                <img src="images/service-thumbnail02.png" class="img-fluid" alt="#" />
                                <div class="service-thumbnail_text">
                                    <h4>24/7 Advanced Care</h4>
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="service-thumbnail border-0 d-flex flex-fill">
                                <img src="images/service-thumbnail03.png" class="img-fluid" alt="#" />
                                <div class="service-thumbnail_text">
                                    <h4>Get Result Online</h4>
                                    <p>Lorem ipsum dolor sit</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-md-12">

                            <div class="about-video_block">
                                <div class="row">
                                    <div class="col-md-12 col-lg-6">
                                        <a href="https://www.youtube.com/watch?v=pBFQdxA-apI"
                                            class="video-play-img popup-youtube">
                                            <img src="images/about-img.jpg" class="img-fluid w-100" alt="#" />
                                            <div class="video-play-btn">
                                                <div class="video-play-icon">
                                                    <i class="fas fa-play"></i>
                                                </div>
                                                <span>PLAY VIDEO</span>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="col-md-12 col-lg-6">
                                        <div class="video-play-text">
                                            <h2>Short Story About Mededin Clinic.</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation.
                                            </p>
                                            <p>
                                                Sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostru
                                                <a href="#">Readmore</a>
                                            </p>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="facilities blue">
                                                        <h3>1000+</h3>
                                                        <span>Happy Patients</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="facilities green">
                                                        <h3>215+</h3>
                                                        <span>Expert Doctors</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="facilities yellow">
                                                        <h3>315+</h3>
                                                        <span>Hospital Rooms</span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="facilities gray">
                                                        <h3>106+</h3>
                                                        <span>Award Winner</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="space light">
                <div class="container container-custom">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="heading-style1">
                                <span>Our Services</span>
                                <h2>High Quality Services for You</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="service-slider">
                                <div class="service-block yellow">
                                    <img src="images/service-icon1.png" alt="#" />
                                    <h3>Dental Care</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore </p>
                                    <a href="#" class="btn btn-dark">READ MORE</a>
                                    <div class="service-bg-icon">
                                        <img src="images/services-bg1.png" class="img-fluid" alt="#" />
                                    </div>
                                </div>
                                <div class="service-block green">
                                    <img src="images/service-icon2.png" alt="#" />
                                    <h3>Eye Care</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                        incididunt ut labore</p>
                                    <a href="#" class="btn btn-dark">READ MORE</a>
                                    <div class="service-bg-icon">
                                        <img src="images/services-bg2.png" class="img-fluid" alt="#" />
                                    </div>
                                </div>
                                <div class="service-block blue">
                                    <img src="images/service-icon3.png" alt="#" />
                                    <h3>Allergic Issue</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                        incididunt ut labore
                                    </p>
                                    <a href="#" class="btn btn-dark">READ MORE</a>
                                    <div class="service-bg-icon">
                                        <img src="images/services-bg3.png" class="img-fluid" alt="#" />
                                    </div>
                                </div>
                                <div class="service-block green">
                                    <img src="images/service-icon3.png" alt="#" />
                                    <h3>Allergic Issue</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                        incididunt ut labore
                                    </p>
                                    <a href="#" class="btn btn-dark">READ MORE</a>
                                    <div class="service-bg-icon">
                                        <img src="images/services-bg4.png" class="img-fluid" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <p class="text-center service-help_link">
                                Contact us for better help and services.
                                <a href="#">Let’s get started</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="space why-choose-block">
                <div class="container container-custom">
                    <div class="row">
                        <div class="col-md-12 col-lg-5">
                            <h2>
                                Why Choose<br /> Mededin Care?
                            </h2>
                            <hr />
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="why-choose_list why-choose_list-br">
                                        <i class="fas fa-check"></i>
                                        <div class="why-choose_list-content">
                                            <h5>Advanced Care</h5>
                                            <span>Lorem ipsum dolor sit</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="why-choose_list why-choose_list-br">
                                        <i class="fas fa-check"></i>
                                        <div class="why-choose_list-content">
                                            <h5>Online Medicine</h5>
                                            <span>Lorem ipsum dolor sit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="why-choose_list why-choose_list-br">
                                        <i class="fas fa-check"></i>
                                        <div class="why-choose_list-content">
                                            <h5>Medical & Surgical</h5>
                                            <span>Lorem ipsum dolor sit</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="why-choose_list why-choose_list-br">
                                        <i class="fas fa-check"></i>
                                        <div class="why-choose_list-content">
                                            <h5>Lab Tests</h5>
                                            <span>Lorem ipsum dolor sit</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-md-12">
                                    <a href="#" class="btn btn-dark" tabindex="0">MAKE APPOINTMENT</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6 offset-lg-1">
                            <div class="why-choose_right">
                                <h2>
                                    Emergency?<br /> Contact Us.
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed do eius mod tempor
                                    incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam
                                </p>
                                <div class="why-choose_list">
                                    <div class="choose-icon">
                                        <i class="fas fa-phone-volume"></i>
                                    </div>

                                    <div class="why-choose_list-content">
                                        <span>Call us now</span>
                                        <h3>+123 456 7890</h3>
                                    </div>
                                </div>
                                <div class="why-choose_list">
                                    <div class="choose-icon">
                                        <i class="fas fa-envelope-open-text"></i>
                                    </div>
                                    <div class="why-choose_list-content">
                                        <span>Mail us</span>
                                        <h3>info@medenin.com</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="space">
                <div class="container container-custom">
                    <div class="row">
                        <div class="col-md-12 col-lg-6">
                            <div class="news-img-block">
                                <img src="images/play-img.png" class="img-fluid w-100" alt="#" />
                                <a class="video-play-button popup-youtube" href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                                    <span></span>
                                </a>
                                <div id="video-overlay" class="video-overlay">
                                    <a class="video-overlay-close">&times;</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-6">
                            <div class="video-play-text">
                                <span>Who we are -----</span>
                                <h2>We Have Advanced Technologies</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                                <hr />
                                <div class="newsletter-subscribe">
                                    <h4>Subscribe to our Newsletter</h4>
                                    <div class="newsletter-subscribe_form">
                                        <input type="text" class="form-control" placeholder="Enter Your Email" />
                                        <a href="#"><i class="fas fa-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
                    
        <section class="our-team">
        <div class="container container-custom">
            <div class="row">
                <div class="col-md-12">
                    <div class="sub-title_center">
                        <span>---- Our Team ----</span>
                        <h2>Our Dedicated Doctors</h2>
                    </div>
                </div>
            </div>
            <div>
                <DoctorsSlider></DoctorsSlider>
            </div>
            
        </div>
    </section>
                    
                

            <section class="bg-img3">
                <div class="container container-custom">
                    <div class="row">
                        <div class="col-lg-5 offset-lg-7">
                            <div class="consultant-content">
                                <h2>We Believe in a Healthier You</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                </p>
                                <p>
                                    Adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam,
                                </p>
                                <a href="#" class="btn btn-success">Get a Consultant</a>
                                <a href="https://www.youtube.com/watch?v=pBFQdxA-apI" class="popup-youtube"> <i
                                    class="fas fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="testimonial pb-0">
                <div class="container container-custom">
                    <div class="col-md-12">
                        <div class="heading-style1">
                            <span>Testimonials</span>
                            <h2>What Our Clients Say</h2>
                        </div>
                        <div class="testi-slider">
                            <div class="testimonial-wrap">
                                <img src="images/testi-img1.jpg" class="img-fluid testi-img-icon" alt="#" />
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                                <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                </p>
                                <span class="testi-name">Mary Jane (ceo)</span>
                                <div class="testi-styled-bg">
                                    <img src="images/testi-side-img_05.png" class="img-fluid" alt="#" />
                                </div>
                            </div>
                            <div class="testimonial-wrap quaternary-br-color">
                                <img src="images/testi-img2.jpg" class="img-fluid testi-img-icon" alt="#" />
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                                <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                </p>
                                <span class="testi-name">Mary Jane (ceo)</span>
                                <div class="testi-styled-bg">
                                    <img src="images/testi-side-img_05.png" class="img-fluid" alt="#" />
                                </div>
                            </div>
                            <div class="testimonial-wrap">
                                <img src="images/testi-img1.jpg" class="img-fluid testi-img-icon" alt="#" />
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                                <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                </p>
                                <span class="testi-name">Mary Jane (ceo)</span>
                                <div class="testi-styled-bg">
                                    <img src="images/testi-side-img_05.png" class="img-fluid" alt="#" />
                                </div>
                            </div>
                            <div class="testimonial-wrap quaternary-br-color">
                                <img src="images/testi-img2.jpg" class="img-fluid testi-img-icon" alt="#" />
                                <ul>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                    <li><i class="fas fa-star"></i></li>
                                </ul>
                                <p><span>L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation.
                                </p>
                                <span class="testi-name">Mary Jane (ceo)</span>
                                <div class="testi-styled-bg">
                                    <img src="images/testi-side-img_05.png" class="img-fluid" alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="space">
                <div class="container container-custom">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="sub-title_center">
                                <span><i>---- Blog ----</i></span>
                                <h2>Latest News & Events</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="blog-wrap">
                                <div class="blog-row-block">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="blog-img">
                                                <img src="images/blog-img1.jpg" class="img-fluid" alt="#" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="blog-content">
                                                <span>January 12 2019 | By Admin</span>
                                                <h3>
                                                    Finding meaning in the intersection <br /> between marriage and medicine...
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-flex align-items-center">
                                            <div class="blog-read-more">
                                                <p><i class="far fa-eye"></i>233 <span>|</span> <i class="far fa-comment"></i>33
                                                </p>
                                                <a href="#" class="btn btn-primary">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="blog-row-block">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="blog-img">
                                                <img src="images/blog-img2.jpg" class="img-fluid" alt="#" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="blog-content">
                                                <span>January 12 2019 | By Admin</span>
                                                <h3>
                                                    Telemedicine overprescribes antib iotics:<br /> Are you really receiving...
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-flex align-items-center">
                                            <div class="blog-read-more">
                                                <p><i class="far fa-eye"></i>233 <span>|</span> <i class="far fa-comment"></i>33
                                                </p>
                                                <a href="#" class="btn btn-primary">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="blog-row-block">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="blog-img">
                                                <img src="images/blog-img3.jpg" class="img-fluid" alt="#" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="blog-content">
                                                <span>January 12 2019 | By Admin</span>
                                                <h3>
                                                    23-year-old woman with 2 weeks of painful <br /> lumps on her legs and..
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-flex align-items-center">
                                            <div class="blog-read-more">
                                                <p><i class="far fa-eye"></i>233 <span>|</span> <i class="far fa-comment"></i>33
                                                </p>
                                                <a href="#" class="btn btn-primary">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="blog-row-block">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <div class="blog-img">
                                                <img src="images/blog-img4.jpg" class="img-fluid" alt="#" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 d-flex align-items-center">
                                            <div class="blog-content">
                                                <span>January 12 2019 | By Admin</span>
                                                <h3>
                                                    Keep insulting doctors, and good luck <br /> finding a physician in 10 days...
                                                </h3>
                                            </div>
                                        </div>
                                        <div class="col-md-3 d-flex align-items-center">
                                            <div class="blog-read-more">
                                                <p><i class="far fa-eye"></i>233 <span>|</span> <i class="far fa-comment"></i>33
                                                </p>
                                                <a href="#" class="btn btn-primary">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="text-center mt-5">
                                <a href="#" class="btn btn-outline-primary">View All Blogs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home