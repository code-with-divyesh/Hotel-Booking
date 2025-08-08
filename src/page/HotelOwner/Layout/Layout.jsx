import React from "react";
import NavBar from "../../../Components/HotelOwner/NavBar/NavBar";
import SideBar from "../../../Components/HotelOwner/SideBar/SideBar";
const Layout = () => {
  return (
    <div className="owner-container">
      <NavBar />
      <div className="owner-hero-section">
        <SideBar />
      </div>
    </div>
  );
};

export default Layout;
