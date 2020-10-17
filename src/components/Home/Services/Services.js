import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
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
      <h1 className="text-center">Provide awesome <span className="color-brand">services</span> </h1>
      <div className="row mt-5">
                  {/* {
                    servicesCard.length === 0
                    && <Button className="m-5 m-auto" variant="primary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                            Services Loading...
                        </Button>
                }
                {
                    servicesCard.length > 0
                    && servicesCard.map(service =>
                        <ServiceCard
                            key={service._id}
                            handleService={handleService}
                            service={service}
                        />
                    )
                } */}
        {servicesCard.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
