import React from "react";
import { Container } from "./style";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="footerWrapper">
          <div className="footerLogo">
            <h1>TALENTURE</h1>
            <h4>
              Get out and discover your next slope, <br /> moutain and
              destination.
            </h4>
            <h5> Copyright 2021 TALENTURE</h5>
          </div>
          <div className="blog">
            <h1>More on the Blog</h1>
            <ul className="lists">
              <li className="list">About TALENTURE</li>
              <li className="list">Contributions</li>
              <li className="list">Contact Us</li>
            </ul>
          </div>
          <div className="more">
            <h1>More on TALENTURE</h1>
            <ul className="lists">
              <li className="list">The Team</li>
              <li className="list">Jobs</li>
              <li className="list">Press</li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
