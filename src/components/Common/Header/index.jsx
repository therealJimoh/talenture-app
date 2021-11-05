import React from "react";
import { Container } from "./style";

const Header = () => {
  return (
    <>
      <Container>
        <div className="headerWrapper">
          <h4>A Hiking Guide</h4>
          <h1>
            Be Prepared For The <br /> Mountains and Beyond!
          </h1>
        </div>
      </Container>
    </>
  );
};

export default Header;
