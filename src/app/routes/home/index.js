import React from "react";
import "./home.scss";
import Page from "../../components/page";
//import Landing from "./landing";
// import Projects from "./projects";
// import Skills from "../../components/skills";
// import TestimonialServices from "../../components/testimonialAndServices";
// import WorkTogether from "../../components/workTogether";
import Meta from "../../constants/meta";
import About from "../about/index";
// import CarouselPage from "./project";

//import Landing from "./landing";

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Page {...Meta.home}>
        <div>
          <About />

          {/* <Projects /> */}
          {/* <TestimonialServices />
          <Skills />
          <WorkTogether /> */}
        </div>
      </Page>
    );
  }
}

export default Home;
