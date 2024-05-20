import React from 'react';
import './MyServices.css';
import services_Data from '../../constant/services';
import { HiArrowNarrowRight } from 'react-icons/hi';

const MyServices = () => {
  return (
    <div id='services' className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <div className="underline"></div>
      </div>
      <div className="services-container">
        {services_Data.map((service, id) => {
          return (
            <div className="services-format" key={id}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readMore">
                <p>Read More</p>
                <HiArrowNarrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyServices;
