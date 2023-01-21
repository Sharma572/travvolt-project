import { useEffect, useState } from "react";
import "./login.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Button, Box } from "@mui/material";
import { useDispatch, useSelector, useReducer } from "react-redux";
import { loginAction } from "../../Redux/Auth/logIn/actionLogin";
import Alert from "@mui/material/Alert";

export default function Demo(props) {
  const dispatch = useDispatch();
  const reducerState = useSelector((state) => state);

  console.log("reducerState", reducerState);
  const [isDisabled, setIsDisabled] = useState(true);

  const [value, setValue] = useState(false);
  const [text, getText] = useState("");

  const handleText = (event) => {
    getText(event.target.value);
  };

  const [string, setString] = useState("");

  useEffect(() => {
    generateRandomString();
  }, []);

  useEffect(() => {
    handleValidate();
  }, [text]);

  const handleValidate = () => {
    if (string === text) {
      console.log("True");
      setIsDisabled(false);
      setValue(true);
    } else {
      console.log("False");
      setIsDisabled(true);
    }
  };

  const handleSubmit = () => {
    if (value === true) {
      const payload = {
        email: props.email,
        password: props.password,
      };
      console.log("Form Data", payload);
      dispatch(loginAction(payload));
    }
  };

  useEffect(() => {
    if(value === true) {
      const payload = {
        email: props.email,
        password: props.password,
      };
      console.log("Form Data", payload);
      dispatch(loginAction(payload));
    }
  }, [value]);

  const generateRandomString = () => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setString(result);
  };

  return (
    <div>
      <Box style={{ display: "flex" }} my={1}>
        <Box
          className="capt"
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {string}
        </Box>
        <RefreshIcon
          style={{ color: "#006FFF" }}
          onClick={generateRandomString}
        />
        <input className="textinput" value={text} onChange={handleText}></input>
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%" mt={3}>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#0052D0",
            color: "white",
            width: "100%",
            borderRadius: "20px",
          }}
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          Login
        </Button>
      </Box>
    </div>
  );
}
