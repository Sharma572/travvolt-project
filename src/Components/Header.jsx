import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const openLoginpage = () => {
    navigate("/Registration");
  };

  const openRegistration = () => {
    navigate("/Login");
  };
  return (
    <div className="header">
      <div className="travvolt">
        <h1 className="heading">Travvolt</h1>
      </div>
      <div className="welcome">
        <p>Contect Your Representative</p>
        <p className="welPrice">Cash Balance: ₹1300.00</p>
        <p>Recharge</p>

        <div style={{ marginBottom: "15px" }}>
          {/* <h6 style={{fontSize:"1rem  "}}>Welcome</h6>
    <p className='skd'>SKD293</p> */}

          <Button
            style={{ justifyContent: "center" }}
            onClick={openRegistration}
          >
            Login
          </Button>
          <Button onClick={openLoginpage}>Register</Button>
        </div>
        <div
          style={{
            margin: "auto",
          }}
        >
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
