import React from "react";
import { Container, Image } from "./style";
import Avatar from "../../../assets/images/avatar.jpeg";

const ProfileHeader = ({user}) => {
  return (
    <>
      <Container>
        <div className="profileWrapper">
          <div className="welcome">
            <h1>Welcome {user.user.first_name}!</h1>
            <p>Welcome to Talenture Hiking Guide!</p>
          </div>
          <div className="profileImg">
            <h1><span>{user.user.first_name}</span> <span>{user.user.last_name}</span></h1>
            <Image src={Avatar} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProfileHeader;
