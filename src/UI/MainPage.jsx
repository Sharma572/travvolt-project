import React from "react";
import { Box } from "@chakra-ui/react";
import { NavLink, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Layout/Footer";
import InnerNavbar from "../Layout/InnerNavbar";
import Active from "../Pages/Activities/Active";
import Banner from "../Pages/Banner/Banner";
import "./MainPage.css";
import Flight from "../Pages/Flight/Flight";
import Hotel from "../Pages/Hotel/Hotel";
import OneWay from "../Pages/Flight/FlightForm/OneWay";
import OffShare from "../Pages/Flight/FlightForm/OffShare";
import MultiStop from "../Pages/Flight/FlightForm/MultiStop";
import Calander from "../Pages/Flight/FlightForm/Calendar";
import Return from "../Pages/Flight/FlightForm/Return";
import Flightresult from "../Pages/Flight/flightresult/Flightresult";
import Registration from "../Pages/registration/Registration";
import Login from "../Pages/login/Login";
import HotelSearch from "../Pages/Hotel/hotelsearch/HotelSearch";
import Booknow from "../Pages/Flight/booknow/Booknow";
const MainPage = () => {
  return (
    <div className="mainBox">
      {/* header of main dashboard */}
      <Header />
      {/* inner navbar contain all pages */}
      <InnerNavbar />
      {/* all routes of inner navbar */}
      <div className="componentsContainer">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route
            element={<Active />}
            style={{ color: "inherit", textDecoration: "inherit" }}
          />
          <Route
            path="/Hotel"
            element={<Hotel />}
            style={{ color: "inherit", textDecoration: "inherit" }}
          />
          <Route exact path="flightresult" element={<Flightresult />} />
          <Route exact path="/hotel/hotelsearch" element={<HotelSearch />} />
          <Route exact path="flights/booknow" element={<Booknow />} />
          <Route path="/flights/*" element={<Flight />}>
            {/* <Route exact path="flightresult" element={<Flightresult />}/>  */}

            <Route exact path="oneway" element={<OneWay />} />
            <Route exact path="offShare" element={<OffShare />} />
            <Route exact path="multiStop" element={<MultiStop />} />
            <Route exact path="calenderfare" element={<Calander />} />
            <Route exact path="return" element={<Return />} />

            {/* <Route exact path='advanceSearch' element={}/> */}
          </Route>

          <Route path="/" element={<Banner />} />
        </Routes>
      </div>

      {/* main page footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
