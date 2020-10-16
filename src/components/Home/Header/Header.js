import React from 'react';
import './Header.css'
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';


const Header = () => {
    return (
        <section className="header" >
          <div className="container">
          <Navbar/>
            <HeaderContent/>
          </div>
        </section>
    );
};

export default Header;