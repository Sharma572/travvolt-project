import React, { useEffect, useState } from "react";
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
import { useLocation, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { ipAction } from "../Redux/IP/actionIp";
import Dashboard from "../Pages/Dashboard/Component/Dashboard";
import AdminLogin from "../Pages/AdminLogin/AdminLogin";
import TableContainer from "../Pages/Dashboard/Component/Table/TableContainer";

const MainPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const reducerState = useSelector((state) => state);
  const isLoginRoute = location.pathname === "/Login";
  const isRegisterRoute = location.pathname === "/Registration";
  const isLogin = location.pathname === "/adminLogin";
  const isDashboard = location.pathname === "/admin/dashboard";

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(ipAction());
  }, []);

  useEffect(() => {
    dispatch(ipAction());
    if (
      !reducerState?.logIn?.loginData?.data && location.pathname !== "/Registration" && location.pathname !== "/admin/dashboard" &&  location.pathname !== "/adminLogin"

    ) {
      navigate("/Login");
    }
   
  }, []);

  return (
    <>
      {/* {!reducerState?.logIn?.loginData?.data ? <Navigate to="/Login" /> : null} */}

      {!isLoginRoute && !isRegisterRoute && !isDashboard  && !isLogin &&  (  
        <div className="mainBox">
          {/* header of main dashboard */}
          <Header />
          {/* inner navbar contain all pages */}
          <InnerNavbar />

          {/* all routes of inner navbar */}
          <div className="componentsContainer">
            <Routes>
              {/* <Route path="login" element={<Login />} /> */}
              {/* <Route path="registration" element={<Registration />} /> */}
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
              <Route
                exact
                path="/hotel/hotelsearch"
                element={<HotelSearch />}
              />
              <Route exact path="flights/booknow" element={<Booknow />} />
              <Route path="/flights/*" element={<Flight />}>
                {/* <Route exact path="flightresult" element={<Flightresult />}/>  */}

                <Route exact path="oneway" element={<OneWay />} />
                <Route exact path="offShare" element={<OffShare />} />
                <Route exact path="multiStop" element={<MultiStop />} />
                <Route exact path="calenderfare" element={<Calander />} />
                <Route exact path="return" element={<Return />} />

                {/* <Route exact path="/dashboard/*" element={<Dashboard />}></Route> */}
                {/* <Route exact path='advanceSearch' element={}/> */}
              </Route>

              <Route path="/" element={<Banner />} />
            </Routes>
          </div>

          {/* main page footer */}
          {!isLoginRoute && <Footer />}
        </div>
      )}

      <div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          {/* <Route path="adminlogin" element={<AdminLogin />} /> */}
          <Route exact path="/admin/dashboard/*" element={<Dashboard />}></Route>
          <Route exact path="/adminLogin" element={<AdminLogin />}></Route>
          

        </Routes>
      </div>
    </>
  );
};

export default MainPage;
