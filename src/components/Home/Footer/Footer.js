import React from 'react';
import Contact from '../Contact/Contact';

const Footer = () => {
    return (
        <footer className="footer-container mt-5 pt-5 ">
            <Contact/>
          <div className="text-center mt-5 ">
            <p className="text-secondary mb-0 pt-5 ">copyright orange lab {new Date().getFullYear()}</p>
          </div>
        </footer>
    );
};

export default Footer;