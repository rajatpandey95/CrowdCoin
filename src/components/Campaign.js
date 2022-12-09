import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Campaign = (campaign) => {
  const { title, img, desc, address } = campaign;
  return (
    <Wrapper>
      <div className="flexbox-item">
        <img src={img} alt="Company image" />
        <div className="info">
          <h3 className="heading">{title}</h3>
          <p>{desc}</p>
          <p>Address : {address}</p>
          <Link to={`/viewcampaign/${campaign.id}`} className="btn">
            View Campaign
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .flexbox-item {
    width: 34vw;
    margin: 5px 40px 40px 40px;
    border: 1px solid black;
    background-color: aliceblue;
    border-radius: 10px;
  }
  img {
    height: 20em;
    border-radius: 10px;
  }
  .info {
    padding: 20px;
  }
  .btn {
    width: 100%;
  }
`;

export default Campaign;
