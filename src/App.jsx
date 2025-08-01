import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";

const App = () => {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return <div>{!isOwnerpath && <NavBar />}</div>;
};

export default App;
