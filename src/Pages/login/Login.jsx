import React from "react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Input, Typography } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Flex, space, Spacer, Text } from "@chakra-ui/react";
import Popularfilter from "../Flight/flightresult/Popularfilter";
import tra from "../../Images/tra.png";
import LockIcon from "@mui/icons-material/Lock";
import { InnerBarLogo } from "../../data";
import { logindata } from "../../logindata";
import { logindataaa } from "../../logindataaa";
import { NavLink } from "react-router-dom";
import NavBarBox from "../../Components/NavBarBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RefreshIcon from "@mui/icons-material/Refresh";
import Alert from "@mui/material/Alert";
import Capchacode from "./Capchacode";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Button } from "@mui/material";
import { fontWeight } from "@mui/system";

const Login = () => {
  const reducerState = useSelector((state) => state);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (reducerState?.logIn?.loginData?.data?.data) {
      navigate("/");
    }
  }, [reducerState, navigate]);

  return (
    <React.Fragment>
      <div className="loginContainer">
        {/* step by step updating part */}

        <Box>
          <div>
            <Grid container px={10} py={5}>
              <Grid item xs={12} sm={12} lg={9}>
                <Box
                  display="flex"
                  justifyContant="center"
                  alignItems="center"
                  textAlign="center"
                  marginTop="20px"
                  font="Quicksand, Bold"
                >
                  <Box
                    sx={{
                      width: "69px",
                      height: "69px",
                    }}
                  >
                    <img src={tra} style={{ width: "100%" }}></img>
                  </Box>
                  <Typography className="logo_text">Travvolt</Typography>
                </Box>
                <Box sx={{ displayf: "flex", justifyContent: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "24px",
                      fontWeight: "600",
                      textAlign: "center",
                      marginTop: "30px",
                      font: "Quicksand, Bold",
                    }}
                  >
                    Our Services
                  </Typography>
                  <Box
                    px={10}
                    display="flex"
                    justifyContent="space-around"
                    mt={7}
                  >
                    {logindata.map(({ avatar, name, path }, index) => {
                      return (
                        <Grid container>
                          <Grid
                            lg={9}
                            direction="row"
                            justifyContent="space-around"
                            key={index}
                            style={{ width: "60px", paddingX: "200px" }}
                          >
                            <NavLink
                              // className={({ isActive }) =>
                              //   isActive
                              //     ? "active-nav logo_login"
                              //     : "logo_login"
                              // }
                              style={{
                                textDecoration: "none",
                                color: "#252525",
                                font: "Quicksand, Bold",
                                height: "100%",
                                justifyContent: "space-around",
                              }}
                            >
                              {/* components call from other components for blue print */}

                              <NavBarBox
                                name={name}
                                avatar={avatar}
                                key={index}
                                style={{ backgroundColor: "red" }}
                              />
                            </NavLink>
                          </Grid>
                        </Grid>
                      );
                      {
                        /* </Square> */
                      }
                    })}
                  </Box>
                  <Box
                    px={10}
                    display="flex"
                    justifyContent="center"
                    textAlign="center"
                    alignItems="center"
                    marginLeft="70px"
                  >
                    {logindataaa.map(({ avatar, name, path }, index) => {
                      return (
                        <Grid container>
                          <Grid
                            lg={6}
                            direction="row"
                            display="flex"
                            justifycontent="center"
                            textAlign="center"
                            alignItems="center"
                            key={index}
                          >
                            <NavLink
                              // to={path}
                              // className={({ isActive }) =>
                              //   isActive
                              //     ? "active-nav logo_login"
                              //     : "logo_login"
                              // }
                              style={{
                                textDecoration: "none",
                                color: "#252525",
                                font: "Quicksand, Bold",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {/* components call from other components for blue print */}

                              <NavBarBox
                                name={name}
                                avatar={avatar}
                                key={index}
                                style={{
                                  backgroundColor: "red",
                                  textAlign: "center",
                                }}
                              />
                            </NavLink>
                          </Grid>
                        </Grid>
                      );
                      {
                        /* </Square> */
                      }
                    })}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} lg={3}>
                <form action="/Registration">
                  <Box textAlign="right">
                    <Button
                      type="submit"
                      variant="contained"
                      startIcon={<AccountCircleIcon />}
                      style={{
                        backgroundColor: "white",
                        color: "#254B70",
                        fontWeight: "bold",
                        borderRadius: "10px",
                      }}
                    >
                      Register
                    </Button>
                  </Box>
                </form>
                <form action="/">
                  {reducerState.logIn.loginData?.data?.data?.message && (
                    <Alert severity="success">
                      Thankyou ! for Registering, we'll contact you ASAP
                    </Alert>
                  )}
                  <Box pt={5} className="login_field">
                    <Typography className="Login_min" font="Quicksand, Bold">
                      Login
                    </Typography>
                    <Box py={2}>
                      <div className="form_input">
                        <label className="form_lable">Email*</label>

                        <input
                          style={{ height: "60px", width: "400px" }}
                          name="email"
                          type="email"
                          placeholder="Enter your Email Address"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                    </Box>
                    <Box py={2}>
                      <div className="form_input">
                        <label className="form_lable">Password*</label>

                        <input
                          style={{ height: "60px", width: "400px" }}
                          type="password"
                          placeholder="Enter Your Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                    </Box>
                    <Box>
                      <Capchacode email={email} password={password} />

                      <Typography className="forget_pass">
                        Forgot Password
                      </Typography>

                      <Box
                        display="flex"
                        justifyContent="center"
                        mt={2}
                        textAlign="center"
                      >
                        <Typography color="black" fontSize="10px">
                          By proceeding, you agree to Travvolt{" "}
                          <Link href="#" underline="always" color="#FF8900">
                            {"Privacy Policy"}
                          </Link>{" "}
                          ,{" "}
                          <Link href="#" underline="always" color="#FF8900">
                            {"User Agreement"}
                          </Link>{" "}
                          and{" "}
                          <Link href="#" underline="always" color="#FF8900">
                            {"Terms of Service"}
                          </Link>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </form>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                lg={3}
                display="flex"
                justifyContent="start"
                alignItems="center"
              ></Grid>
            </Grid>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Login;
