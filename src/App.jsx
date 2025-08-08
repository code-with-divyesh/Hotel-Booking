import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./page/Home/Home";
import Footer from "./Components/Footer/Footer";
import AllRooms from "./page/AllRooms/AllRooms";
import RoomDetails from "./page/RoomDetails/RoomDetails";
import MyBookings from "./page/MyBookings/MyBookings";
import HotelRegister from "./Components/HotelRegister/HotelRegister";

const App = () => {
  const isOwnerpath = useLocation().pathname.includes("owner");
  return (
    <div>
      {false && <HotelRegister />}
      {!isOwnerpath && <NavBar />}
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-Bookings" element={<MyBookings />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
