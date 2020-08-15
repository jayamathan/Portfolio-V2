/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../../components/button";

import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import youtube from "../../assets/imgs/youtube.PNG";
import monstersilk from "../../assets/imgs/m&s.png";
import styled from "styled-components";
import Heading from "../../components/heading";
import ProjectCard from "../../components/projectCard";
import crown from "../../assets/imgs/crownclothing.png";

const CarouselPage = () => {
  const click1 = () => {
    window.open("http://crwn-store.herokuapp.com/", "_blank");
  };
  const click2 = () => {
    window.open("https://monsters-and-silk.web.app/", "_blank");
  };
  const click3 = () => {
    window.open("https://youtube-jm.netlify.com/", "_blank");
  };
  const click4 = () => {
    window.open("https://github.com/jayamathan/V2-crwn-clothing", "_blank");
  };
  const click5 = () => {
    window.open("https://github.com/jayamathan/Digital-Agency", "_blank");
  };
  const click6 = () => {
    window.open("https://github.com/jayamathan/Youtube_Clone", "_blank");
  };
  return (
    <MDBContainer>
      <Heading text="Recent Work" className="text-center" />
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" onClick={click1}>
            <MDBView>
              <ProjectCard
                className="text-white"
                name="Crown Store"
                type="E-commerce"
                image={crown}
                onClick={click1}
              />
              <p>
                Online Ecommerce Clothing website developed using React and
                Redux. This website acts like a native app in mobile browsers.
                This project has many latest features such as a Realtime stripe
                payments option, Gmail, and third party sign-in signout
                functionality.
              </p>

              <Buttonstyle>
                <Button label="View Github &#8594;" onClick={click4} />
              </Buttonstyle>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" onClick={click2}>
            <MDBView>
              <ProjectCard
                className="text-white"
                name="Monster & Silk"
                type="Digital Agency website built using sass & other css styles. Inspired from real website design"
                image={monstersilk}
                onClick={click2}
              />
              <p>
                Sleek website for Innovative Digital Agency. This website is a
                remake of the existing website https://www.wolfwhale.com/.
                Building this website has been a ton of fun.
              </p>

              <Buttonstyle>
                <Button label="View Github &#8594;" onClick={click5} />
              </Buttonstyle>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" onClick={click3}>
            <MDBView>
              <ProjectCard
                className="text-white"
                name="Youtube Clone"
                type="Web App"
                image={youtube}
                onClick={click3}
              />
              <p>
                Youtube clone built with ReactJs. This website provides realtime
                youtube data with suggestions. Also highlighted for Github
                Arctic Code Vault Contribution
              </p>
              <Buttonstyle>
                <Button label="View Github &#8594;" onClick={click6} />
              </Buttonstyle>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

const Buttonstyle = styled.div`
  position: relative;
  margin: 15px 0;
  width: 100%;
  text-align: center;
`;

export default CarouselPage;
