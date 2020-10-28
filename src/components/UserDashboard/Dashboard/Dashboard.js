import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import AdminServiceList from '../Admin/AdminServiceList/AdminServiceList';
import Topbar from '../DashboardNavbar/Topbar/Topbar';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    const [googleSignIn, setGoogleSignIn, servicesCard, setServicesCard] = useContext(UserContext) 
  const {id} =  useParams();

  useEffect(() => {
    fetch('https://powerful-castle-90702.herokuapp.com/checkAdmin?email='+googleSignIn.email)
    .then(res => res.json())
    .then(data => {
        if(data) {
            const newUser = {...googleSignIn};
            newUser.admin = true;
            setGoogleSignIn(newUser);
        } else {
            const newUser = {...googleSignIn};
            newUser.admin = false;
            setGoogleSignIn(newUser);
        }
        });

}, [])

    return (
        <div>
            <Topbar/>
            <div className="row"> 
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-9 bg-light">
                {
                googleSignIn.admin? <AdminServiceList/> :  <Order id={id} />
                }  
                              
            </div>            
        </div>
        </div>
    
    );
};

export default Dashboard;


