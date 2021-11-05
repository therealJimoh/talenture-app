import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background: #c4c4c4;

  .navWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;

    .StyledLink {
      text-decoration: none;
      color: #000000;
    }
  }
  h1 {
    font-size: 18px;
  }
  h1 > {
    text-decoration: none;
  }
`;
