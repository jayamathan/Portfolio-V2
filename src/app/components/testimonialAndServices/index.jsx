import React from "react";

import { Row, Col, Container } from "../layout";
import doccode from "../../assets/imgs/DOCUMENTED_CODE.png";
import resdesign from "../../assets/imgs/RESPONSIVE_DESIGN.png";
import thirdparty from "../../assets/imgs/THIRD_PARTY INTEGRATI_N.png";
import UIFrame from "../../assets/imgs/UI_FRAMEWOKS.png";

import "./testimonialAndServices.scss";

const TestimonialServices = () => {
  return (
    <React.Fragment>
      <Testimonial />
      <Services />
    </React.Fragment>
  );
};

const Testimonial = () => {
  return (
    <Container>
      <div className="testimonial">
        <Row className="flex">
          <div className="col-md-6">
            <p>
              Jayamathan has an excellent commitment and unwavering dedication
              to his work. He has a genuine intellectual curiosity and an
              innovative mindset to learn and implement novel concepts.
            </p>
            <span>
              - Annamol Alex <i> Lead Engineer at HTIC, IIT Madras</i>
            </span>
            <br />
            <span />
          </div>
          <div className="col-md-6">
            <p>
              Jayamathan has wonderful implementation skills in terms of front
              end, he learns everything quickly and great in exploring new
              skills.
            </p>
            <span>
              - Chitra Gurumoorthy <i> Technology Analyst at Infosys</i>
            </span>
          </div>
        </Row>
      </div>
    </Container>
  );
};

const ServiceCard = ({ image, name, desc, className }) => {
  return (
    <div className={`service-card ${className ? className : ""}`}>
      <div className="serivce-icon">
        <img src={image} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <Container>
      <section className="services">
        <Row className="m-0">
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className=""
              image={resdesign}
              name="Full stack development"
              desc="I have experience with both FrontEnd and BackEnd Development. I also comfortable in working with databases, APIs and Github/Gitlab version control."
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className=""
              image={doccode}
              name="Design and User Experience"
              desc="As a FrontEnd Developer, I have a special eye for UI/UX Design. I approach problems with a customer-centric mindset which helped to develop intuitive meaningful products"
            />
          </Col>
        </Row>
        <Row className="m-0">
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className="border-left-0 border-bottom-0"
              image={thirdparty}
              name="Responsibility and People"
              desc="I take ownership of my work and I love to help people. I am also interested in influencing people in a positive approach without authority"
            />
          </Col>
          <Col xs={12} sm={6} md={6} lg={6} className="p-0">
            <ServiceCard
              className="border-right-0 border-bottom-0"
              image={UIFrame}
              name="Continuous Learning"
              desc="Curiosity shaped my journey all along. I always explore relevant things to learn that benefits to both my personal and professional development"
            />
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default TestimonialServices;
