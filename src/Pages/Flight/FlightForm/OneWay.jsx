import React, { useEffect, useState } from "react";
import transfer from "../../../Images/transfer.png";
import "./OneWay.css";
import { Button } from "react-bootstrap";
import { Box, Grid, GridItem, Checkbox, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { oneWayAction } from "../../../Redux/FlightSearch/OneWay/oneWay";

const OneWay = () => {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);
  const [checked, setChecked] = useState(false);
  const [checkedd, setCheckedd] = useState(false);

  console.log("reducerState", reducerState);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {
      EndUserIp: reducerState?.ip?.ipData?.data?.ip,
      TokenId: "f5067481-79b2-4d27-9769-329cce4cd01a",
      AdultCount: formData.get("adult"),
      ChildCount: formData.get("child"),
      InfantCount: formData.get("infant"),
      DirectFlight: "false",
      OneStopFlight: "false",
      JourneyType: "1",
      PreferredAirlines: null,
      Segments: [
        {
          Origin: formData.get("from"),
          Destination: formData.get("to"),
          FlightCabinClass: formData.get("class"),
          PreferredDepartureTime: formData.get("departure"),
          PreferredArrivalTime: formData.get("departure"),
        },
      ],
      Sources: null,
    };
    console.log("OneWayData", payload);
    dispatch(oneWayAction(payload));
  }

  return (
    <form onSubmit={handleSubmit} className="formFlightSearch">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-3">
            <div className="form_input">
              <label className="form_lable">FROM</label>
              <input name="from" placeholder="Enter city or airport" />
            </div>
          </div>
          <div
            className="col-md-1"
            style={{ marginLeft: "-20px", marginRight: "-50px" }}
          >
            <img src={transfer} alt="name" />
          </div>
          <div className="col-xs-12 col-md-3">
            <div className="form_input">
              <label className="form_lable">TO</label>
              <input name="to" placeholder="Enter city or airport" />
            </div>
          </div>

          <div className="col-xs-12 col-md-2">
            <div className="form_input">
              <label className="form_lable">DEPARTURE</label>

              <input
                type="date"
                name="departure"
                id="departure"
                className="deaprture_input"
              ></input>
            </div>
          </div>

          <div className="col-xs-12 col-md-2">
            <div className="form_input">
              <label className="form_lable"></label>
              <select name="time" id="" className="form_input_select">
                <option mx={5}>Any Time</option>
                <option px={5}>Morning</option>
                <option px={5}>Evening</option>
                <option px={5}>Afternoon</option>
                <option mx={5}>Night</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-3 col-md-2 ">
            <label className="form_lable1">Select A Fair of Type</label>
          </div>
          <div className="col-xs-3 col-md-2 ">
            <button
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: "#00BDC4",
                color: "white",
                border: "none",
              }}
              onClick={() => {
                setChecked((old) => !old);
              }}
            >
              <input name="regular" type="radio" checked={checked} />
              Regular Fares
            </button>
          </div>
          <div className="col-xs-3 col-md-2 ">
            <button
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                backgroundColor: "#00BDC4",
                color: "white",
                border: "none",
              }}
              onClick={() => {
                setCheckedd((old) => !old);
              }}
            >
              <input name="student" type="radio" checked={checkedd} />
              Student Fares
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-9">
            <div className="row">
              <div className="col-3 col-md-3 col-lg-3 mb-3">
                <div className="form_input">
                  <label className="form_lable">Adult(12+)</label>

                  <select name="adult" id="" className="form_input_select">
                    <option value="0">Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                  </select>
                </div>
              </div>

              <div className="col-3 col-md-3 col-lg-3 mb-3">
                <div className="form_input">
                  <label className="form_lable">Child(2-11)</label>
                  <select name="child" id="" className="form_input_select">
                    <option value="0">Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </div>
              </div>
              <div className="col-3 col-md-3 col-lg-3 mb-3">
                <div className="form_input">
                  <label className="form_lable">Infant (Under 2 Yrs)</label>
                  <select name="infant" id="" className="form_input_select">
                    <option value="0">Select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                  </select>
                </div>
              </div>

              <div className="col-3 col-md-3 col-lg-3 mb-3">
                <div className="form_input">
                  <label className="form_lable">Class</label>
                  <select name="class" id="" className="form_input_select">
                    <option value="0">Select</option>
                    <option value="1">All</option>
                    <option value="2">Ecomomy</option>
                    <option value="3">Premimum Economy</option>
                    <option value="4">Business</option>
                    <option value="5">Premimum Business</option>
                    <option value="6">First</option>
                  </select>
                </div>
              </div>
              {/* <div className="col-9 col-md-6 col-lg-2 " > </div> */}
            </div>
          </div>
        </div>

        {/* <div className="row">
          <div className="col-12 col-md-3 col-lg-3 mb-3 ">
            <div className="form_input creditBox">
              <label className="form_lable">Cradit Shell Pnr</label>

              <input placeholder="Enter city or airport" />
            </div>
          </div>

          <div className="col-12 col-md-3 col-lg-3 mb-3">
            <div className="form_input creditBox">
              <label className="form_lable">Preferred Carrier</label>
              <input placeholder="Enter city or airport" />
            </div>
          </div>
        </div> */}

        <div className="row">
          <label className="form_lable1">
            -More options: Airline prefrence
          </label>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3 mb-3">
            <div className="showDirectFligthDiv">
              <input name="direct" type="radio" />{" "}
              <span>Show direct flight</span>
            </div>
          </div>
        </div>

        <label style={{ fontSize: "20px", fontWeight: "400" }}>
          Restrict my Search to:{" "}
          <span style={{ color: "#00BDC4" }}>Select All / Unselect All</span>
        </label>
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>GPS</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Fly Dubai</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Air Arobia</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>zoom air</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Other intl LCC</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Air Asia</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Air India Express</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Air Cost</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>NokScoot</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Salman Air</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Inter Sky</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Triger Airways</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>SpiceJet</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>GOFIRTS</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Alliance Air</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Akasa Air</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Fly Scoot</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Indigo</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Bhutan Airlines</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>TruJet</span>
          </GridItem>
          <GridItem w="100%" h="30">
            <input
              className="inputSelect"
              type="checkbox"
              defaultChecked="checked"
            />{" "}
            <span>Mega Maldives</span>
          </GridItem>
        </Grid>

        <Box className="row">
          <Flex direction="row" justifyContent="center">
            <Button
              mt={4}
              // isLoading={props.isSubmitting}
              type="submit"
            >
              Flight Search
            </Button>
          </Flex>
        </Box>
      </div>
    </form>
  );
};

export default OneWay;
