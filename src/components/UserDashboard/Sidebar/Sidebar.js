// // import React from 'react';
// // import './Sidebar.css'
// // import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// // import SplitPane from 'react-split-pane';
// // import Order from '../Order/Order';
// // import Review from '../Review/Review';
// // import ServiceList from '../ServiceList/ServiceList';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
// // import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

// // const styles = {
// //   background: 'gray',
// //   width: '2px',
// //   cursor: 'col-resize',
// //   margin: '0 50px',
// //   height: '100%',
// // };

// // const Sidebar = () => {
// //     return (

// //             <Router>
// //              <div className="  col-md-2 py-5 px-4" style={{ height: "100vh" }}>
// //                 <SplitPane
// //                 split="vertical"
// //                 minSize={100}
// //                 defaultSize={100}
// //                 resizerStyle={styles}
// //                 className="sidebar"
// //                 >
// //                 <menu>
// //                 <ul className="list-unstyled " >
// //                             <li>
// //                             <Link to="/order">
// //                                  <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order</span>
// //                             </Link>
// //                             </li>
// //                             <li>
// //                             <Link to="/serviceList">
// //                              <FontAwesomeIcon icon={faGripHorizontal} /> <span>Service List</span>

// //                             </Link>
// //                             </li>
// //                             <li>
// //                             <Link to="/review">
// //                                  <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order</span>
// //                             Review
// //                             </Link>
// //                             </li>
// //                         </ul>
// //                 </menu>
// //                 <div>
// //                         <Route exact path="/order" component={Order} />
// //                         <Route path="/serviceList" component={ServiceList} />
// //                         <Route exact path="/review" component={Review} />
// //                 </div>
// //                 </SplitPane>
// //                   </div>
// //             </Router>

// //     );
// // };

// // export default Sidebar ;

// import React from 'react';
// import './Sidebar.css'
// // import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// // import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
// // import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
// // import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
// // import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
// import logo from '../../../images/logos/logo.png'

// import {Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faEject, faCommentDots, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {

//     return (
//         <div className='left-navbar'>
//             <div className='pt-4 pb-5 pl-2'>
//                 <Link to='/'>
//                     <img style={{height:'50px'}} src={logo} alt=""/>
//                 </Link>
//             </div>
//             <div>
//                 {
//                     ['Order', 'Service list', 'Review', 'Add Service', 'Make Admin'].map((item,index)=>{
//                         return(
//                         <Link style={{color:`${window.location.pathname=='/dashboard/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
//                              to={`/dashboard/${item.toLowerCase().split(' ').join('-')}`}>
//                             <div className='d-flex ml-3'>
//                             {index==0 &&  <FontAwesomeIcon icon={faShoppingCart} />}
//                             {index==1 &&  <FontAwesomeIcon icon={faEject} />}
//                             {index==2 && <FontAwesomeIcon  icon={faCommentDots} />}
//                             {index==3 && <FontAwesomeIcon  icon={faCommentDots} />}
//                             {index==4 && <FontAwesomeIcon  icon={faCommentDots} />}
//                             <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>{item}</p>
//                         </div>
//                         </Link>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     );
// };

// export default Sidebar;

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
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
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

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        {googleSignIn.admin ? (
          <div>
            <li>
              <Link to="/admin-service-list" className="text-dark">
                <FontAwesomeIcon icon={faListAlt} /> <span>Service list</span>
              </Link>
            </li>
            <li>
              <Link to="/add-service" className="text-dark">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
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
            <li>
              <Link to="/order" className="text-dark">
                <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
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
