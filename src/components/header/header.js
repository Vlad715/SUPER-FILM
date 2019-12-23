import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


const Header = (props) => {

    return ( 
        <div className="header">
            <Link to="/"><img src="https://img.icons8.com/android/48/000000/back.png"/></Link>
            <h1>SUPER FILM</h1>
            <div/>
        </div>       
    );
};

export default Header;