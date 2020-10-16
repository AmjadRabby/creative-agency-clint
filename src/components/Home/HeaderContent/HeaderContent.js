import React from 'react';
import headerFrame from '../../../images/logos/frame.png'

const HeaderContent = () => {
    return (
        <section className="">
            <div className="row d-flex align-items-center">
                <div className="col-md-4 col-sm-12 col-xs-5  mt-4 pt-4">
                    <h1>Let's Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi dignissimos adipisci incidunt, laborum velit</p>
                    <button className="btn btn-dark m-2">Hire us</button>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-6 ml-5">                    
                    <img  src={headerFrame} alt="" className="img-fluid w-100"/>
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;