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
      <Link to="/">
        {" "}
        <img
          className=" mr-3"
          style={{ width: "150px" }}
          src={agencyLogo}
          alt=""
        />
      </Link>
      <h3 className="mr-auto ml-5">
        {" "}
        {googleSignIn.admin ? "Admin" : "Order"}
      </h3>
      <h5>{googleSignIn.name}</h5>
    </div>
  );
};

export default Topbar;
