import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import ProfileHeader from "../components/Common/ProfileHeader";
import ProfileDetails from "../components/Common/Profiledetails";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  return (
    <>
      <Navbar />
      <ProfileHeader user={user} />
      <ProfileDetails user={user} />
      <Footer />
    </>
  );
};

export default Profile;
