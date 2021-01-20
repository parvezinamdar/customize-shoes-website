
import React , {Component} from 'react';

//About Image
import About from '../../assets/img/about.jpg';

//Shoes Image
import Classic from '../../assets/img/Shoes/Classic/Classic.png';
import Nike from '../../assets/img/Shoes/Nike/Nike.png';
import Reebok from '../../assets/img/Shoes/Reebok/Reebok.png';
import Vintage from '../../assets/img/Shoes/Vintage/Vintage.png';
import Adidas from '../../assets/img/Shoes/Adidas/Adidas.png';

//Portolio
import nike1 from '../../assets/img/Portfolio/nike1.jpg';
import nike2 from '../../assets/img/Portfolio/nike2.jpg';
import nike3 from '../../assets/img/Portfolio/nike3.jpeg';

import adidas1 from '../../assets/img/Portfolio/adidas1.jpg';
import adidas2 from '../../assets/img/Portfolio/adidas2.jpg';
import adidas3 from '../../assets/img/Portfolio/adidas3.jpg';

import reebok1 from '../../assets/img/Portfolio/reebok1.jpg';
import reebok2 from '../../assets/img/Portfolio/reebok2.jpg';
import reebok3 from '../../assets/img/Portfolio/reebok3.jpg';

import { connect } from 'react-redux';

import HeroImageCarousel from '../../components/HeroImageCarousel/HeroImageCarousel';

import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

import Contact from '../../components/HomeContact/Contact';
import CountUp from 'react-countup';
import './Home.css';

class Home extends Component{
    render(){
        return (
            <React.Fragment>
                <section id="hero">
                    <HeroImageCarousel />
                </section>
                <main id="main">
                    <section id="about" className="about">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-lg-6 video-box">
                                    <img src={About} className="img-fluid" alt="about-section" />
                                    <a href="https://youtu.be/LnkkVKI47XM" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"> </a>
                                </div>

                                <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
                                    <div className="section-title">
                                        <h2>About Us</h2>
                                        <p>With our full ID-CUSTOM@ SYSTEM, each pair of sneakers becomes unique, and we will consider every detail on them. Designers and Professional shoe artisans located in india will carefully produce your new cutomized sneakers</p>
                                    </div>

                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                        <h4 className="title"><a href="">We Design</a></h4>
                                        <p className="description">Our design team can assist you with different proposals for your brand.</p>
                                    </div>

                                    <div className="icon-box">
                                        <div className="icon"><i className="bx bx-gift"></i></div>
                                        <h4 className="title"><a href={this.props.isAuthenticated ? '/shoes-customize' : '/login'}>You Design</a></h4>
                                        <p className="description">Design and custom your own sneakers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End About Us Section --> */}

                    {/* <!-- ======= About Lists Section ======= --> */}
                    <section className="about-lists">
                        <div className="container">
                            <div className="row no-gutters">
                                <div className="col-lg-4 col-md-6 content-item">
                                    <span>01</span>
                                    <h4>Classic</h4>
                                    <img src={Classic} alt="classic-shoes"/>
                                </div>

                                <div className="col-lg-4 col-md-6 content-item">
                                    <span>02</span>
                                    <h4>Vintage</h4>
                                    <img src={Vintage} alt="nike-shoes" />
                                </div>

                                <div className="col-lg-4 col-md-6 content-item">
                                    <span>03</span>
                                    <h4>Nike</h4>
                                    <img src={Nike} alt="reebok-shoes" />
                                </div>

                                <div className="col-lg-4 col-md-6 content-item">
                                    <span>04</span>
                                    <h4>Reebok</h4>
                                    <img src={Reebok} alt="reebok-shoes" />
                                </div>

                                <div className="col-lg-4 col-md-6 content-item">
                                    <span>05</span>
                                    <h4>Adidas</h4>
                                    <img style={{ width: '190px', height:'100px'}} src={Adidas} alt="reebok-shoes" />    
                                </div>

                                <div style={{ display: "flex", 
                                                justifyContent: "center",
                                                alignItems:"center" }} 
                                                className="col-lg-4 col-md-6 content-item">
                                    <a href={this.props.isAuthenticated ? '/shoes-customize' : '/login'}> 
                                    <i className="icofont-plus"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End About Lists Section --> */}

                    {/* <!-- ======= Counts Section ======= --> */}
                    <section className="counts section-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 text-center">
                                    <div className="count-box">
                                        <i className="icofont-simple-smile" style={{color: "#20b38e"}}></i>
                                        <span data-toggle="counter-up">232</span>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 text-center">
                                    <div className="count-box">
                                        <i className="icofont-shopping-cart" style={{color: "#c042ff"}}></i>
                                        <span data-toggle="counter-up"><CountUp end={521}/></span>
                                        <p>Total Shoes</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 text-center">
                                    <div className="count-box">
                                        <i className="icofont-live-support" style={{color: "#46d1ff"}}></i>
                                        <span data-toggle="counter-up">1,463</span>
                                        <p>Hours Of Support</p>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 text-center" data-aos-delay="600">
                                    <div className="count-box">
                                        <i className="icofont-users-alt-5" style={{color: "#ffb459"}}></i>
                                        <span data-toggle="counter-up">15</span>
                                        <p>Hard Workers</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>
                    {/* <!-- End Counts Section --> */}

                    {/* <!-- ======= Services Section ======= --> */}
                    {/* <section id="services" className="services">
                        <div className="container">
                            <div className="section-title">
                                <h2>Services</h2>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-computer"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-earth"></i></div>
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-image"></i></div>
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-settings"></i></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box">
                                    <div className="icon"><i className="icofont-tasks-alt"></i></div>
                                    <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                                </div>
                            </div>

                        </div>
                    </section> */}
                    {/* <!-- End Services Section --> */}

                    {/* <!-- ======= Our Portfolio Section ======= --> */}
                    <section id="portfolio" className="portfolio section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Our Gallery</h2>
                                <p>CHOOSE YOUR STYLE & BRAND YOUR SHOES!</p>
                            </div>
                            <div className="row portfolio-container">
                                <div className="col-lg-4 col-md-6 portfolio-item filter-classic">
                                    <div className="portfolio-wrap">
                                        <img src={nike1} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src={nike2} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-classic">
                                    <div className="portfolio-wrap">
                                        <img src={nike3} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-adidas">
                                    <div className="portfolio-wrap">
                                        <img src={adidas1} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src={adidas2} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-classic">
                                    <div className="portfolio-wrap">
                                        <img src={adidas3} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-adidas">
                                    <div className="portfolio-wrap">
                                        <img src={reebok1} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-adidas">
                                    <div className="portfolio-wrap">
                                        <img src={reebok2} className="img-fluid" alt="" />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src={reebok3} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- End Our Portfolio Section --> */}


                    {/* <!-- ======= Contact Us Section ======= --> */}
                    <Contact />
                    {/* <!-- End Contact Us Section --> */}

                </main>
                {/* <!-- End #main --> */}
                <ScrollToTop />
            </React.Fragment>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

export default connect(mapStateToProps)(Home);