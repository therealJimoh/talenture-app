import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #152436;
  padding: 35px;
`;

export const ProfileCard = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #f5f7fa;
  border-radius: 5px;
  box-shadow: 10px 10px 5px black;

  .profile {
    display: flex;
    padding: 35px 25px;
    margin-left: 28px;

    > * {
      margin-right: 15px;
    }
  }

  .hikingDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 18px;
    }
    .lists {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 30px;
      text-align: center;
      margin: 20px 0 15px 0;
    }
    li {
      list-style: none;
    }
  }

  @media only screen and (max-width: 600px) {
    .profile {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      > * {
        text-align: center;
      }
    }
    .hikingDetails .lists {
      grid-template-columns: none;
    }
    .hikingDetails h1 {
      text-align: center;
    }
  }
`;

export const HikingLocation = styled(ProfileCard)`
  margin-top: 35px;

  .gridMemories {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 25px 20px;
    place-items: center;
    padding: 15px;
  }

  @media only screen and (max-width: 600px) {
    .gridMemories {
      grid-template-columns: none;
    }
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 30px;
`;

export const Picture = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;
