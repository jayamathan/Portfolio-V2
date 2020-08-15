/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import Page from "../../components/page";
import "./about.scss";
import { Container, Row, Col } from "../../components/layout";
import TestimonialServices from "../../components/testimonialAndServices";
import { PageHeading } from "../../components/heading";
import WorkTogether from "../../components/workTogether";
import Skills from "../../components/skills";
import Timeline from "../../components/timeline";
//import WorkedWith from "../../components/workedWith";
import jayamathan from "../../assets/imgs/jayamathan_s.png";
import Meta from "../../constants/meta";
//import Landing from "./../home/landing";
import CarouselPage from "../home/project";
import Landing from "../home/landing";
import { FollowMe } from "./../contact/index";

const About = () => {
  return (
    <Page {...Meta.about}>
      <div className="about">
        <Landing />
        <Row>
          <div className="about-heading">
            <PageHeading text="About me" />
          </div>
        </Row>

        <Container>
          <div className="about-content">
            <Row>
              <Col xs={12} sm={12} md={8} lg={8}>
                {/* <h3>
                Hello! I'm{" "}
                <span className="name">
                  Jayamathan <b>Shanmugam</b>
                </span>
              </h3>
              <hr /> */}
                <p>
                  I am a crazy product enthusiast who hails from an Engineering
                  background possessing an undying craze for problem-solving.
                </p>

                <p>
                  I started as an engineer experimenting with microprocessors,
                  got curious, and grew into more holistic roles like Full-stack
                  development 👨🏻‍💻 and Product Management. Curiosity shaped my
                  journey all along🤔!
                </p>
                <p>
                  I have 3+ years of industry experience and built meaningful,
                  intuitive products with a customer-centric mindset. This
                  helped me develop an engineer’s mind, a designer’s intuition,
                  and an entrepreneur’s vision.{" "}
                </p>
                <p>
                  Currently, I’m working as a Full-stack Developer(MTS-2) in
                  Verizon, India.
                </p>
                <p>
                  My expertise includes both front end technologies such as
                  Javascript, React, HTML, CSS, and back end technologies
                  include Java, Python, NodeJs, Express.
                </p>

                <p>
                  And currently I'm in{" "}
                  <span role="img" aria-label="heart-emoji">
                    💖
                  </span>{" "}
                  love with Product Management.
                </p>
                {/* <button onClick={handleOnClick}>Click me</button> */}
              </Col>
              <Col xs={12} sm={12} md={4} lg={4}>
                <img src={jayamathan} className="img-fluid" alt="" />
              </Col>
            </Row>

            <Timeline />
          </div>
        </Container>
        <div className="about1">
          <CarouselPage />
          <Skills />
          <TestimonialServices />
          <WorkTogether />
          <FollowMe />
        </div>
      </div>
    </Page>
  );
};

export default About;
