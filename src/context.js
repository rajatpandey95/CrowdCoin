import React, { useState, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let temp = data;
  let tempId = 4;
  if (localStorage.getItem("campaigns")) {
    temp = JSON.parse(localStorage.getItem("campaigns"));
    tempId = JSON.parse(localStorage.getItem("id"));
  }

  const [campaigns, setCampaigns] = useState(temp);
  const [id, setId] = useState(tempId);

  const addCampaigns = (props) => {
    const temp = campaigns;
    setId(id + 1); // temperory purpose later we add a way to automatically create id for a campaign
    temp.push({ id, ...props });
    setCampaigns(temp);
    localStorage.setItem("campaigns", JSON.stringify(campaigns));
    localStorage.setItem("id", JSON.stringify(id + 1));
  };

  return (
    <AppContext.Provider value={{ campaigns, addCampaigns }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use (custom hook)
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
