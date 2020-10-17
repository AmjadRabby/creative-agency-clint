import React, { useContext, useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { UserContext } from "../../../App";
import upload from "../../../images/logos/upload.png";
import "./Order.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../DashboardNavbar/Topbar/Topbar";

const Order = ({ id }) => {
  const [
    googleSignIn,
    setGoogleSignIn,
    servicesCard,
    setServicesCard,
  ] = useContext(UserContext);
  const [order, setOrder] = useState({});
  const [orderForm, setOrderForm] = useState(false);
  const [orderFile, setOrderFile] = useState(null);

  const matchService = servicesCard.find((service) => service._id === id);

  // console.log(matchService)

  const handleBlur = (e) => {
    const newOrder = { ...order };
    newOrder[e.target.name] = e.target.value;
    setOrder(newOrder);
  };

  // const orderFileChange = e => {
  //     const newFile = e.target.files[0];
  //     setOrderFile(newFile);
  // }

  // {
  //     matchService ? matchService : order
  // }

  const handleSubmit = (e) => {
    const newOrder = { ...googleSignIn, ...order, ...matchService };

    fetch("https://powerful-castle-90702.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("order successfully added");
        }
      });
    e.preventDefault();
  };

  return (
    <div>
        {/* <Topbar/> */}
      <div className="">
        <div className="">
          {/* <Sidebar /> */}
        </div>
        <div className="">
          <div className="py-5  px-3 dashboard  bg-light">
            <form className="bg-light w-50 " onSubmit={handleSubmit}>
              <input
                type="text"
                onBlur={handleBlur}
                name="name"
                className="form-control py-4"
                defaultValue={googleSignIn.name}
                placeholder="Your name/company's name"
                required
              />
              <br />
              <input
                type="email"
                onBlur={handleBlur}
                name="email"
                className="form-control py-4"
                defaultValue={googleSignIn.email}
                placeholder="Your email address"
                required
              />
              <br />
              <input
                type="text"
                onBlur={handleBlur}
                name="serviceName"
                className="form-control py-4"
                defaultValue={matchService && matchService.title}
                placeholder="Service name"
                required
              />
              <br />
              <textarea
                type="text"
                onBlur={handleBlur}
                style={{ height: "100px" }}
                name="projectDetail"
                defaultValue={matchService && matchService.description}
                className="form-control pt-3"
                placeholder="Project Details"
                required
              />
              <br />
              <div className="row d-flex justify-content-between px-3">
                <input
                  type="text"
                  onBlur={handleBlur}
                  name="price"
                  className="form-control mb-4 py-4 col-md-6 w-100"
                  placeholder="Price"
                  required
                />

                <div className="col-md-6">
                  <label
                    htmlFor="files"
                    className="btn btn-outline-success pb-3 w-100"
                  >
                    <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload project
                    file
                  </label>
                  <input
                    type="file"
                    name="picture"
                    style={{ display: "none" }}
                    id="files"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-dark px-5 mt-3">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
