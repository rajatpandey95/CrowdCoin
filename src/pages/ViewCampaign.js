import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

const ViewCampaign = () => {
  const { id } = useParams();
  const { campaigns } = useGlobalContext();
  const campaign = campaigns.find((campaign) => campaign.id == id);

  const { title, desc, img, contri, address } = campaign;

  return (
    <main>
      <Navbar />
      <Wrapper>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Campaign Details</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="details">
                <div>
                  <div className="child1">
                    <h4>Title :</h4>
                    <p>{title}</p>
                  </div>
                  <div className="child2">
                    <h4>Description:</h4>
                    <p>{desc}</p>
                  </div>
                  <div className="child3">
                    <h4>Address:</h4>
                    <p>{address}</p>
                  </div>
                  <div className="child4">
                    <h4>Contribution Amount:</h4>
                    <p>{contri}</p>
                  </div>
                  <div className="child5">
                    <h4>Number of Requests</h4>
                    <p>0</p>
                  </div>
                  <div className="child6">
                    <h4>Number of Approvals</h4>
                    <p>0</p>
                  </div>
                  <div className="child7">
                    <h4>Balance:</h4>
                    <p>0</p>
                  </div>
                  <button className="btn">View Requests</button>
                </div>
              </td>
              <td>
                <img src={img} alt="new campaign" />
              </td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  table {
    font-family: arial, sans-serif;
    width: 80vw;
    border-spacing: 15px;
  }
  td,
  th {
    text-align: left;
    padding: 8px;
  }
  td {
    width: calc(80vw / 2);
  }
  h4,
  p {
    font-size: 18px;
  }
  .details {
    border: 1px solid black;
    border-radius: 1%;
  }
  img {
    width: 40vw;
    height: 60vh;
    border-radius: 1%;
  }
  .btn {
    width: 100%;
  }
`;

export default ViewCampaign;
