import {
  Box,
  Button,
  makeStyles,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";


const useStyles = makeStyles({
  btn: {
    border: "1px solid black",
    textTransform: "none",
    marginBlock: "0.8rem",
    fontSize: "1rem",
    fontFamily: "Montserrat",
    fontWeight: "bolder",
    paddingInline: "3rem",
    transition: "0s",
    "&:hover": {
      border: "0px solid black",
      backgroundColor: "rgb(93 81 81)",
      color: "white",
    },
  },
});

export const Query = () => {
  const classes = useStyles();

  // maintain state of form data start
  const initialValues = {
    name: "",
    email: "",
    suggestions: "",
  };
  const [user, setUser] = useState({ initialValues });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // maintain state of form data end

  const submitForm =async()=>{

  }


  return (
    <Box
      style={{
        padding: "2.2rem",
        marginRight: "1rem",
        display: "flex",
        flexDirection: "column",
        boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
        fontFamily: "Montserrat",
      }}
    >
      <Box
        style={{
          fontFamily: "Montserrat",
          fontWeight: "bolder",
          fontSize: "3rem",
          color: "#493d3d",
          textAlign: "left",
        }}
      >
        Get in touch
      </Box>
      <Box
        style={{
          textAlign: "left",
          marginBlockStart: "2rem",
          border: "1px ",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Your Name"}
          type={"text"}
          rows={3}
          style={{
            width: "90%",
          }}
          name="name"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box
        style={{
          textAlign: "left",
          border: "1px ",
          display: "flex",
          flexDirection: "column",
          marginBlock: "1rem",
        }}
      >
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Your Email"}
          type={"email"}
          style={{
            width: "90%",
          }}
          name="email"
          autoComplete="off"
        ></TextField>
      </Box>
      <Box
        style={{
          textAlign: "left",
          border: "1px ",
          display: "flex",
          flexDirection: "column",
        }}
        sx={{ height: "2rem" }}
      >
        <TextField
          onChange={(e) => handleInputs(e)}
          label={"Suggestions"}
          type={"text"}
          multiline={true}
          rows={13}
          rowsMax={15}
          style={{
            width: "90%",
          }}
          autoComplete="off"
          name="suggestions"
        ></TextField>
        <Box>
          <Button onClick={()=>submitForm()} className={classes.btn}>
            <Box style={{ position: "relative" }}> Submit</Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
