import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
// import Twitter from '@mui/icons-material/Twitter';

import Instagram from "@mui/icons-material/Instagram";
import Linkedin from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";

const useStyles = makeStyles(() => ({
  link: {
    margin: "1.4rem",
    color: "black",
    textAlign: "center",
    "&:hover": {
      color: "grey",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      style={{ display: "flex", flexDirection: "column", padding: "2rem",marginBlockStart:"3.5rem" ,boxShadow:"3px 0px 17px 4px rgba(216 ,216,216,0.75)"}}
    >
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box style={{ flex: "3", display: "flex", flexDirection: "column" }}>
          <Box>
            <Grid item xs={11}>
              <Typography
                variant="h5"
                style={{
                  color: "black",
                  fontFamily: "Montserrat",
                  fontSize: "30px",
                  fontWeight: "bolder",
                  padding: "1.4rem",
                }}
              >
                ASKtechnology
              </Typography>
            </Grid>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <a href="" className={classes.link}>
              <Instagram fontSize="large" />
            </a>
            <a href="" className={classes.link}>
              <Linkedin fontSize="large" />
            </a>
            <a href="" className={classes.link}>
              <Twitter fontSize="large" />
            </a>
          </Box>
        </Box>
        <Box style={{ flex: "1" }}>
          <img style={{ width: "100%" }} src="" alt="" srcset="" />
        </Box>
      </Box>
      <Box
        style={{
          textAlign: "center",
          padding: "1.4rem",
          fontFamily: "Montserrat",
          fontWeight: "bolder",
        }}
      >
        {" "}
        © Copyright @ASKTechnology 2022
      </Box>
    </Grid>
  );
};

export default Footer;
