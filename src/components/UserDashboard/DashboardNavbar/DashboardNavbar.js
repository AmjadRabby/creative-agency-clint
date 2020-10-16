import React from 'react';
import logo from '../../../images/logos/logo.png'

const DashboardNavbar = () => {
    return (
        <div>
            <nav class="navbar sticky-top navbar-light bg-light fixed-top">
                <a class="navbar-brand p-1 mr-5" href="#">  <img className="" src={logo} style={{width: '160px'}} alt="" /> </a>
                <h4 className="mr-auto ml-5">Order</h4>
            </nav> 
                      
        </div>
    );
};

export default DashboardNavbar;
