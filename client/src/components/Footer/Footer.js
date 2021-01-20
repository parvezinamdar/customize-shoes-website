import React from 'react';
import './Footer.css';

const footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>Snow White</h3>
                            <p className="mb-2">A 201 Rajiv Apartment Near Vimal Diary <br />
                                Mumbai, Bhayander, India<br /> </p>
                            <p className="mb-2">Phone:<br /> <a style={{ color: 'white'}} href="tel:+919867822851">+91 986 782 2851</a></p>
                            <p>Email:<br /> <a>pavezinamdar9867@gmail.com</a><br /></p>

                            <div className="social-links mt-3">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Brands</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Nike</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Reebok</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Adidas</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Puma</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Skechers</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-newsletter">
                        
                            <h4>Our Newsletter</h4>
                            <p>Subscribe to our newsletter</p>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Snow White</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">Parvez Inamdar</a>
                </div>
            </div>
        </footer>
    )
}

export default footer;