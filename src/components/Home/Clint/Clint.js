import React from "react";
import google from "../../../images/logos/google.png";
import netflix from "../../../images/logos/netflix.png";
import slack from "../../../images/logos/slack.png";
import uber from "../../../images/logos/uber.png";
import airbnb from "../../../images/logos/airbnb.png";

const Clint = () => {
  return (
    <div style={{height: '150px'}} className=" clint-section mb-5">
      <div className="row d-flex justify-content-center m-3 mt-2">
        <div className="col-md-2 col-sm-6 mt-3 mr-2">
          <img
            style={{ width:"135px", height:"35px" }}
            className="img-logo"
            src={slack}
            alt=""
          />
        </div>
        <div className="col-md-2 col-sm-6 mt-3  mr-2">
          <img
            style={{ width:"135px", height:"35px" }}
            className="img-logo"
            src={google}
            alt=""
          />
        </div>
        <div className="col-md-2 col-sm-6 mt-3  mr-2">
          <img
            style={{ width:"135px", height:"35px" }}
            className="img-logo"
            src={uber}
            alt=""
          />
        </div>
        <div className="col-md-2 col-sm-6 mt-3  mr-2">
          <img
            style={{ width:"135px", height:"35px" }}
            className="img-logo"
            src={netflix}
            alt=""
          />
        </div>
        <div className="col-md-2 col-sm-6 mt-3  mr-2">
          <img
            style={{ width:"135px", height:"35px" }}
            className="img-logo"
            src={airbnb}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Clint;
