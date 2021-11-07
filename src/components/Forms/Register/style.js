import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #152436;
  height: 100vh;

  h1,
  h3 {
    width: 45%;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
  }

  h3 {
    margin-top: 25px;
  }
  h1 {
    margin-bottom: 25px;
  }

  .styledLink {
    text-decoration: none;
    color: pink;
  }
`;

export const FormWrapper = styled.div`
  width: 55%;
  background: #c4c4c4;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 5px 5px 5px #15152c;

  .formSuccess {
    color: #28a828;
    font-size: 18px;
    text-align: center;
    display: block;
    font-weight: bold;
  }
  .formError {
    color: red;
    font-size: 18px;
    text-align: center;
    display: block;
    font-weight: bold;
  }

  .formControl {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    width: 65%;
    margin: 5px auto;

    div {
      color: red;
      font-size: 12px;
    }
  }
  input[type="text"],
  input[type="password"],
  input[type="email"] {
    border-radius: 5px;
    border: 1px solid #151515;
    padding: 7px 10px;

    &:focus {
      outline: none;
    }
  }
  button[type="submit"] {
    display: block;
    width: 65%;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #151515;
    background: #182433;
    color: #ffffff;
    margin: 15px auto;
    margin-bottom: 5px;
  }

  @media only screen and (max-width: 520px) {
    .formControl {
      width: 85%;
    }
    button[type="submit"] {
      display: block;
      width: 85%;
      padding: 8px;
      border-radius: 3px;
      border: 1px solid #151515;
      background: #182433;
      color: #ffffff;
      margin: 0 auto;
      margin-bottom: 5px;

      &:focus {
        outline: none;
      }
    }
  }
`;
