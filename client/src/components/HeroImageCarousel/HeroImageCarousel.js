import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HeroImageCarousel.css';

import { connect } from 'react-redux';


const HeroImageCarousel = (props) => {
    return (
        <Carousel>

            <Carousel.Item className="hero1">
                <div className="carousel-container">
                    <div className="carousel-content container">
                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Snow White</span></h2>
                        <p className="animate__animated animate__fadeInUp">THE NEW SHOE COMPANY FROM INDIA, AN INSPIRATIONAL CITY AROUND THE WORLD. CREATE FULLY CUSTOMIZED SNEAKERS WITH YOUR LOGO OR DESIGN. FEEL UNIQUE AND TRENDY WITH YOUR OWN PERSONALIZED SNEAKERS.</p>
                        <a href={props.isAuthenticated ? '/shoes-customize' : '/login'} className="btn-get-started animate__animated animate__fadeInUp scrollto">Customize Here</a>
                    </div>
                </div>
            </Carousel.Item>
            
            <Carousel.Item className="hero2">
                <div className="carousel-container">
                    <div className="carousel-content container">
                        <h2 className="animate__animated animate__fadeInDown">Customize your favourite brand</h2>
                        <p className="animate__animated animate__fadeInUp">THE NEW SHOE COMPANY FROM INDIA, AN INSPIRATIONAL CITY AROUND THE WORLD. CREATE FULLY CUSTOMIZED SNEAKERS WITH YOUR LOGO OR DESIGN. FEEL UNIQUE AND TRENDY WITH YOUR OWN PERSONALIZED SNEAKERS.</p>
                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="hero3">
                <div className="carousel-container">
                    <div className="carousel-content container">
                        <h2 className="animate__animated animate__fadeInDown">One Click Design Management</h2>
                        <p className="animate__animated animate__fadeInUp">THE NEW SHOE COMPANY FROM INDIA, AN INSPIRATIONAL CITY AROUND THE WORLD. CREATE FULLY CUSTOMIZED SNEAKERS WITH YOUR LOGO OR DESIGN. FEEL UNIQUE AND TRENDY WITH YOUR OWN PERSONALIZED SNEAKERS.</p>
                        <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}
  

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
}

export default connect(mapStateToProps)(HeroImageCarousel);