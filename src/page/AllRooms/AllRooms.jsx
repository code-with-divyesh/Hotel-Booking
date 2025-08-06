import React from "react";
import "./AllRooms.css";
import Title from "../../Components/Title/Title";
import { roomsDummyData } from "../../assets/assets";
import HotelCardAllRooms from "../../Components/HotelCardAllRooms/HotelCard";
import Filters from "../../Components/Filters/Filters";
const AllRooms = () => {
  return (
    <div className="container">
      <div className="room-left">
        <Title
          align="left"
          title="Hotel Rooms"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <div className="ar-list">
          {roomsDummyData.map((room, idx) => (
            <HotelCardAllRooms
              key={room._id || idx}
              room={room}
              index={idx}
              showLocation
            />
          ))}
        </div>
        
      </div>
      <div className="room-right">
        <Filters/>
      </div>
    </div>
  );
};

export default AllRooms;
