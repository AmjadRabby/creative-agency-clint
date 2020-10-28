import React from 'react';

const Contact = () => {
    return (
        <section className="container contact">
            <div className="row ">
                <div className="col-md-5 col-sm-12 my-5">
                    <h2>Let us handle your project, professionally.</h2>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 col-sm-12 mb-5 my-5">
                    <form>
                        <div className="form-group">                        
                            <input type="email" className="form-control p-4 " placeholder="Your email address"/>
                        </div>
                        <div className="form-group">                            
                            <input type="text" className="form-control p-4 " placeholder="Your name / company name"/>
                        </div>
                        <div className="form-group message-area">
                            <textarea type="text" className="form-control amjad " style={{height: "150px"}} placeholder="Your message" />  
                        </div>
                            <button type="submit" className="btn btn-dark">Send</button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;