import {
  Container,
  ProfileCard,
  HikingLocation,
  Image,
  Picture,
} from "./style";
import Avatar from "../../../assets/images/avatar.jpeg";
import Picture1 from "../../../assets/images/picture1.jpg";
import Picture2 from "../../../assets/images/picture2.jpg";
import Picture3 from "../../../assets/images/picture3.jpg";
import Picture4 from "../../../assets/images/picture4.jpg";

const ProfileDetails = ({user}) => {
 
  return (
    <>
      <Container>
        <ProfileCard>
          <div className="profile">
            <Image src={Avatar} />
            <div className="profileDesc">
              <h1> {user.user.first_name}</h1>
              <h2>{user.user.position}</h2>
              <h3>{user.user.role}</h3>
            </div>
          </div>
          <div className="hikingDetails">
            <h1>Previous Hiking Destinations</h1>
            <div className="prevHikingDest">
              <ul className="lists">
                <li className="list">Glacier National Park</li>
                <li className="list">Yosemite</li>
                <li className="list">Yellowstone</li>
                <li className="list">Zion National Park</li>
              </ul>
            </div>
          </div>
        </ProfileCard>
        <HikingLocation>
          <div className="gridMemories">
            <Picture src={Picture1} />
            <Picture src={Picture2} />
            <Picture src={Picture3} />
            <Picture src={Picture4} />
          </div>
        </HikingLocation>
      </Container>
    </>
  );
};

export default ProfileDetails;
