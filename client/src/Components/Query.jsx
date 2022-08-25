import { Box, makeStyles, TextareaAutosize, TextField } from "@material-ui/core";
import React from "react";



const useStyles = makeStyles({
  cssLabel: {
    color: "black",
    "&.Mui-focused": {
      color: "black",
    },
  }
});


export const Query = () => {
  const classes=useStyles();
  return (
    <Box
      style={{
        padding: "2.2rem",
        marginRight:"1rem",
        display: "flex",
        flexDirection: "column",
        boxShadow: "-3px 0px 17px 4px rgba(216 ,216,216,0.75)",
        // WebkitBoxShadow:"0 0 5px 2px #fff",
        // MozBoxShadow:"0 0 5px 2px #fff",
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
          marginBlockStart: "1rem",
        }}
      >
        
        <TextField
        label={"Your Name"}
          type={"text"}
          rows={3}
          style={{
            width: "90%",
          }}
          
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
        label={"Your Email"}
          type={"email"}
          
          style={{
            width: "90%",
          }}
          
    // InputProps={{ sx: { height: 80 } }}
          
        ></TextField>
      </Box>
      <Box
        style={{
          textAlign: "left",
          border: "1px ",
          display: "flex",
          flexDirection: "column",
        }}
        sx={{ height: '2rem' }}
      >
        <TextField
        label={"Suggestions"}
          type={"text"}
          multiline={true}
  rows={18}
  rowsMax={18}
          style={{
            width: "90%",
          }}
          
        ></TextField>
      </Box>
    </Box>
  );
};
