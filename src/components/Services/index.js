import React from "react";

import {
  ServiceCard,
  ServiceH2,
  ServiceP,
  ServiceContainer,
  ServiceIcon,
  ServiceH1,
  ServiceWrapper,
} from "./ServicesElements";

const Services = ({ serviceItem }) => {
  return (
    <>
      <ServiceContainer id='services'>
        <ServiceH1>Our Services</ServiceH1>
        <ServiceWrapper>
          { serviceItem[0] && serviceItem.map((serviceBox) => {
            console.log(serviceItem.img, "data");
            return (
              <ServiceCard key={serviceBox.id}>
                <ServiceIcon src={serviceBox.img} alt={serviceBox.alt} />
                <ServiceH2>{serviceBox.serviceH2}</ServiceH2>
                <ServiceP>{serviceBox.serviceP}</ServiceP>
              </ServiceCard>
            );
          })}
         
        </ServiceWrapper>
      </ServiceContainer>
    </>
  );
};

export default Services;
