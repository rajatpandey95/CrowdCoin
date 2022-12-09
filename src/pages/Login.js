import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import loginImg from "../images/loginImg.svg";

const Login = () => {
  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github user" />
        <h1>Crowd Coin</h1>
        <Link to="/campaigns" className="btn">
          View All Campaign
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  .container {
    width: 90vw;
    max-width: 600px;
    text-align: center;
  }
  img {
    margin-bottom: 2rem;
  }
  h1 {
    margin-bottom: 1.5rem;
  }
`;
export default Login;
