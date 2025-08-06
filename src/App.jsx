import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home/Home";
import Footer from "./Components/Footer/Footer";
import AllRooms from "./page/AllRooms/AllRooms";

const App = () => {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerpath && <NavBar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
