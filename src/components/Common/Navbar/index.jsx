import React from "react";
import { Container } from "./style";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="navWrapper">
          <div className="logo">
            <h1>
              <Link to="/" className="StyledLink" >TALENTURE</Link>
            </h1>
          </div>
          <div className="account">
            <h1>
              <Link to="/profile"  className="StyledLink">Account</Link>
            </h1>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
