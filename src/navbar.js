import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            
            <div>
                <Link to="/login">Sign In</Link>
            </div>
           
            <div>
                <Link to="/register">Sign Up</Link>
            </div>
     
        </nav>
    );
};

export default Navbar;
