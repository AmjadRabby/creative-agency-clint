import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../App";
import agencyLogo from "../../../../images/logos/logo.png";

const Topbar = () => {
  const [
    googleSignIn,
    setGoogleSignIn,
    servicesCard,
    setServicesCard,
  ] = useContext(UserContext);
  
  return (
    <div className="d-flex justify-content-between py-3 px-4 fixed">
      {
       ( window.location.pathname == '/dashboard/order' ||  window.location.pathname == '/review') ? 
        <h4>Login Here</h4> 
      
      :

      
      <Link to="/">
        {" "}
        <img
          className=" mr-3"
          style={{ width: "150px" }}
          src={agencyLogo}
          alt=""
        />
    </Link>  

      }
      
      <h3 className="mr-auto ml-5 pl-3">
        {" "}
        {googleSignIn.admin ? "Admin" : "Order"}
      </h3>

      <img  style={{width: '40px', borderRadius: '50px'}} src={googleSignIn.image} alt=""/>

      <h5 className="p-2 pt-2">{googleSignIn.name}</h5>
    </div>
  );
};

export default Topbar;
