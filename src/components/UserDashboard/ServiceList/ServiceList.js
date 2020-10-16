import React from 'react';
import Topbar from '../DashboardNavbar/Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import UserService from './UserService/UserService';

const ServiceList = () => {
    return(
        <div className="">
            <Topbar/>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar/>
                </div>
                <div className="col-md-9 bg-light">
                   
                    <UserService/>
                </div>
            </div>
        </div>
    );
  
};

export default ServiceList;
