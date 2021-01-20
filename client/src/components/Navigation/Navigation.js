import React from 'react';
import '../../assets/css/style.css';
import './Navigation.css';
import NavigationItems from './NavigationItems/NavigtaionItems';
import DrawerToggle from './SideDrawer/DrawerToggle/DrawerToggle';
//Icofont
import Icofont from 'react-icofont';

import { Link } from 'react-router-dom';

const navigation = (props) => {
    
    return(
        <React.Fragment>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                    <div className="contact-info float-left">   
                        {/* Same like this <i className="icofont-envelope"></i>  */}
                        <Icofont icon="icofont-envelope"/> parvezinamdar9867@gmail.com
                        <Icofont icon="icofont-phone"/> <a href="tel:+919867822851">+91 986 782 2851</a>
                    </div>
                    <div className="social-links float-right">
                        <a href="/" className="twitter"><Icofont icon="icofont-twitter"/></a>
                        <a href="/" className="facebook"><Icofont icon="icofont-facebook"/></a>
                        <a href="/" className="instagram"><Icofont icon="icofont-instagram"/></a>
                        <a href="/" className="skype"><Icofont icon="icofont-skype"/></a>
                        <a href="/" className="linkedin"><Icofont icon="icofont-linkedin"/></a>
                    </div>
                </div>
            </section>

            
            <header id="header">
            
                <div className="container toolbar-nav">
                    <DrawerToggle clicked={props.drawerToggleClicked} />
                    <div className="logo float-left">
                        <h1 className="text-light"><Link to="/"><span>Snow White</span></Link></h1>
                    </div>

                    <nav className="nav-menu float-right d-none d-lg-block">
                        <NavigationItems isAuthenticated={props.isAuth} />
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default navigation;

