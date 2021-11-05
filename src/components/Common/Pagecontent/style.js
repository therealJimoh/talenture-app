import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #152436;

  .itemContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .itemContainer > :last-child,
  .itemContainer > :first-child {
    margin: 25px;
  }

  @media only screen and (max-width: 820px) {
    .itemContainer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .itemContainer > div {
      margin: 20px;
    }
    .itemContainer > :last-child,
    .itemContainer > :first-child {
      margin-bottom: 25px;
    }
  }
`;

export const Text = styled.div`
  text-align: left;

  h4 {
    color: #eadbc9;
    font-size: 12px;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 18px;
    color: #ffffff;
    margin-bottom: 15px;
  }
  p {
    color: #ffffff;
    font-size: 16px;
    margin-bottom: 29px;
    width: 400px;
  }
  span {
    background: #c4c4c4;
    padding: 5px;
    border-radius: 5px;
    text-align: center;
  }
`;

export const Image = styled.img`
  height: 400px;
  width: 280px;
`;
