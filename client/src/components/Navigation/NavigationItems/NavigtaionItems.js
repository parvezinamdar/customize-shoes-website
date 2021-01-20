import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../Navigation.css';
const navigationItems = (props) => (
    <ul>
        <NavLink className="started" to={`${props.isAuthenticated ? "/shoes-customize" : "/login"}`} >Get Started</NavLink>
        <NavigationItem link="/">Home</NavigationItem>
        <Link className="about-link" to="about" smooth={true} duration={800}>About Us</Link>
        <Link className="about-link" to="portfolio" smooth={true} duration={800}>Gallery</Link>
        { props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        <Link className="about-link" to="contact" smooth={true} duration={800}>Contact Us</Link>
        { props.isAuthenticated ? 
            <NavigationItem link="/logout">Logout</NavigationItem>:
            <NavigationItem link="/login">Login</NavigationItem>}
    </ul>
);

export default navigationItems;