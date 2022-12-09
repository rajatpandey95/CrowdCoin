import React from "react";
import Campaign from "./Campaign";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const CampaignContainer = () => {
  const { campaigns } = useGlobalContext();
  return (
    <Wrapper>
      <div className="flexbox-container">
        {campaigns.map((campaign) => {
          {
            /* console.log(campaign); */
          }
          return <Campaign key={campaign.id} {...campaign} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .flexbox-container {
    display: flex;
    width: 90vw;
    ${"" /* background-color: lightblue; */}
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export default CampaignContainer;
