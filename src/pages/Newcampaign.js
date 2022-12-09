import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components";
import newCampaign from "../images/newCampaign.svg";
import { useGlobalContext } from "../context";

const Newcampaign = () => {
  const { addCampaigns } = useGlobalContext();
  const navigate = useNavigate();
  const [contri, setContribution] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contri && title && desc) {
      addCampaigns({
        title,
        contri,
        img,
        address,
        desc,
      });
      navigate("/campaigns");
    } else {
      if (window.confirm("Some fields are empty!! Want to continue")) {
        navigate("/campaigns");
      }
    }
  };

  return (
    <main>
      <Navbar />
      <Wrapper>
        <table>
          <thead>
            <tr>
              <th>
                <h3>Create Campaign</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <form onSubmit={handleSubmit}>
                  <p className="label">Contribution</p>
                  <input
                    type="number"
                    min="100"
                    name="contribution"
                    max="100000000"
                    placeholder="Contribution"
                    onChange={(e) => setContribution(e.target.value)}
                  />
                  <p className="label">Title</p>
                  <input
                    type="text"
                    name="title"
                    placeholder=""
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <p className="label">Description</p>
                  <input
                    type="text"
                    name="description"
                    placeholder="Brief description about your campaign"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <p className="label">Image link</p>
                  <input
                    type="text"
                    name="link"
                    onChange={(e) => setImg(e.target.value)}
                  />
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </form>
              </td>
              <td>
                <img src={newCampaign} alt="new campaign" />
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
    width: 70vw;
    font-size: 23px;
    border-spacing: 15px;
  }
  td,
  th {
    text-align: left;
  }
  td {
    width: calc(70vw / 2);
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    display: block;
  }

  .label {
    color: var(--clr-grey-1);
    margin-bottom: 0;
    margin-top: 20px;
  }
`;

export default Newcampaign;
