import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [
    googleSignIn,
    setGoogleSignIn,
    servicesCard,
    setServicesCard,
  ] = useContext(UserContext);

  useEffect(() => {
    fetch("https://powerful-castle-90702.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServicesCard(data));
  }, []);
  // console.log(servicesCard)
  return (
    <section className="service container m-5 mt-4">
      <h1 className="text-center">Provide awesome services</h1>
      <div className="row mt-5">
        {servicesCard.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
