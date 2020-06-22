import React from "react";
import services from "../constants/services";
import Service from "./Service";
import SubTitle from "./SubTitle";

const Services = () => {
  return (
    <div className="row" id="services">
      <div className="col-12">
        <SubTitle title="Services" />
        <section className="services-section">
          {services.map((service) => (
            <Service
              key={service.id}
              title={service.title}
              icon={service.icon}
              desc={service.text}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Services;
