
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentAlt,
  faListAlt,
  faPlus,
  faShoppingCart,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [googleSignIn, setGoogleSignIn] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    fetch("https://powerful-castle-90702.herokuapp.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: googleSignIn.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  // const sidebarColor {
  //   color: `${window.location.pathname=='/dashboard/order' ? '#009444' : 'black'}`
  // }

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {googleSignIn.admin ? (
          <div>
            <li>
              <Link to="/dashboard/admin-service-list" className="text-dark">
                <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
              </Link>
            </li>
            <li>
              <Link to="/add-service" className="text-dark">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service </span>
              </Link>
            </li>
           
            <li>
              <Link to="/make-admin" className="text-dark">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
          </div>
        ) : (
          <div>
            <li  >
              <Link to="/dashboard/order" className="text-dark">
                <FontAwesomeIcon icon={faShoppingCart}  /> <span style={{color:`${window.location.pathname=='/dashboard/order' ? '#009444' : 'black'}`}}> Order</span>
              </Link>
            </li>
            <li>
              <Link to="/service-list" className="text-dark">
                <FontAwesomeIcon icon={faListAlt} /> <span>Service list</span>
              </Link>
            </li>

            <li>
              <Link to="/review" className="text-dark">
                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      
    </div>
  );
};

export default Sidebar;
