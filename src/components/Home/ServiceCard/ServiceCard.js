import React from "react";
import { useHistory } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const history = useHistory();

  const handleRegisterService = (id) => {
    history.push(`/dashboard/${id}`);
  };

  return (
    <div className="col-md-4 mb-3">
      <div
        onClick={() => handleRegisterService(service._id)}
        className="card text-center border-0 p-4"
      >
        <img
          className="m-auto"
          style={{ width: "64px" }}
          src={`data:image/png;base64,${service.image.img}`}
          alt=""
        />
        <div className="card-body">
          <h4 className="card-title">{service.title}</h4>
          <p className="card-text">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
