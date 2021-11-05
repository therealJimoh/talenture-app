import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #434343;

  .profileWrapper {
    display: flex;
    justify-content: space-between;
    padding: 55px;
  }
  .profileImg {
    display: flex;
  }
  .welcome h1 {
    margin-bottom: 15px;
  }
  h1 {
    font-size: 28px;
    color: #ffffff;
  }
  p {
    color: #ffffff;
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {
    .profileWrapper {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }
    .profileWrapper > * {
      margin-bottom: 25px;
    }
  }
`;

export const Image = styled.img`
  border-radius: 25px;
  height: 50px;
  width: 50px;
  margin-left: 25px;
`;
