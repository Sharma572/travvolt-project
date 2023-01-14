import * as React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import tra from "../Images/tra.png";
import { useDispatch, useSelector, useReducer } from "react-redux";

const Header = () => {
  const reducerState = useSelector((state) => state);
  console.log("reducerState", reducerState);
  const navigate = useNavigate();
  const openLoginpage = () => {
    navigate("/Registration");
  };

  const openRegistration = () => {
    navigate("/Login");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    window.location.reload();
  };
  return (
    <div className="header">
      <img src={tra} style={{ width: "70px", height: "70px" }} />

      <div className="travvolt">
        <h1 className="heading">Travvolt</h1>
      </div>
      <div className="welcome">
        <p>Contect Your Representative</p>
        <p className="welPrice">Cash Balance: ₹1300.00</p>
        <p>Recharge</p>

        <div style={{ marginBottom: "15px" }}>
          {/* {reducerState.logIn.loginData?.data?.data?.username && (
                    <Alert severity="success">
                      Thankyou ! for Registering, we'll contact you ASAP
                    </Alert>
                  )} */}
          {/* <Button
            style={{ justifyContent: "center" }}
            onClick={openRegistration}
          >
            Login
          </Button>
          <Button onClick={openLoginpage} style={{ justifyContent: "center" }}>
            Register
          </Button> */}
          <Box>
            <Typography
              sx={{
                color: "#2525250",
                fontSize: "15px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Welcome{" "}
            </Typography>
            <Typography
              sx={{
                color: "#0052D0",
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {reducerState?.logIn?.loginData?.data?.data?.username}
            </Typography>
          </Box>
        </div>
        <div
          style={{
            margin: "auto",
          }}
        >
          <ArrowDropDownIcon
            onClick={handleClick}
            id="menu"
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            cursor="pointer"
          />
          <Menu
            id="menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
