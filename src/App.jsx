import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home/Home";

const App = () => {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerpath && <NavBar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
