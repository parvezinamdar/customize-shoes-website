import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <React.Fragment>
        
        <li>
            <NavLink to={props.link} exact>
                    {props.children}
            </NavLink>
        </li>

    </React.Fragment>
);

export default navigationItem;