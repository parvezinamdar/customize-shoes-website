import React from 'react';
import './SideDrawer.css';
import NavigtaionItems from '../NavigationItems/NavigtaionItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["side-drawer","close"];
    if(props.open){
        attachedClasses = ["side-drawer","open"];
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <nav className="d-lg-none">
                    <NavigtaionItems isAuthenticated={props.isAuth}/>
                </nav>
            </div>
            
        </React.Fragment>
        
    );
}

export default sideDrawer;