import React from "react";
import { Login, Dashboard, Newcampaign, ViewCampaign } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/campaigns" element={<Dashboard />} />
        <Route path="/new" element={<Newcampaign />} />
        <Route path="/viewcampaign/:id" element={<ViewCampaign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
