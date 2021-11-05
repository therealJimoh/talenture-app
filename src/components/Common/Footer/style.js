import styled from "styled-components";

export const Container = styled.div`
  background: #182433;

  .footerWrapper {
    display: flex;
    justify-content: space-around;
    padding: 25px;
  }
  li {
    list-style: none;
    margin-bottom: 12px;
    color: #ffffff;
    font-size: 12px;
  }
  h1 {
    font-size: 18px;
    margin-bottom: 25px;
    color: #ffffff;
  }
  h4 {
    margin-bottom: 25px;
    color: #ffffff;
    font-size: 12px;
  }
  h5 {
    color: #17436a;
    font-size: 12px;
  }

  @media only screen and (max-width: 652px) {
    .footerWrapper {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    h1,
    h4,
    li {
      text-align: center;
    }
    h5 {
      display: none;
    }
  }
`;
