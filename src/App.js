import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import ServiceList from "./components/UserDashboard/ServiceList/ServiceList";
import Review from "./components/UserDashboard/Review/Review";
import Dashboard from "./components/UserDashboard/Dashboard/Dashboard";
import AddService from "./components/UserDashboard/Admin/AddService/AddService";
import MakeAdmin from "./components/UserDashboard/Admin/MakeAdmin/MakeAdmin";
import AdminServiceList from "./components/UserDashboard/Admin/AdminServiceList/AdminServiceList";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Order from "./components/UserDashboard/Order/Order";

export const UserContext = createContext();

function App() {
  const [googleSignIn, setGoogleSignIn] = useState({});

  const [servicesCard, setServicesCard] = useState([]);
  // console.log(googleSignIn)
  return (
    <UserContext.Provider
      value={[googleSignIn, setGoogleSignIn, servicesCard, setServicesCard]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard/:id">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/service-list">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/admin-service-list">
            <AdminServiceList></AdminServiceList>
          </PrivateRoute>
          <PrivateRoute path="/add-service">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/make-admin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
