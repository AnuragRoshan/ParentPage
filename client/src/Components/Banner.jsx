import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import SearchIcon from "@mui/icons-material/Search";


const useStyle = makeStyles(() => ({
  left: {
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
  },
  right: {
    padding: "4rem",
  },
  btn: {
    backgroundColor: "grey",
    color: "white",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      border:"1px solid black"
    },
  },
}));
const Banner = () => {
  const classes = useStyle();
  return (
    <Box style={{  marginBlock: "4rem",padding: "1.8rem" ,backgroundColor:"transparent",backgroundImage:"https://www.linkpicture.com/q/5667004.jpg"}}>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box className={classes.left} style={{ flex: "1" }}>
          <Box>
            <Typography
              variant="h2"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                paddingBlock: "0.8rem",
              }}
            >
              We do this that <br />
              those
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
                fontWeight: "bold",
                color: "grey",
                paddingBlock: "0.8rem",
              }}
            >
              Our Slogan is ok okoo ijojeof jowf <br />
              this
            </Typography>
          </Box>
          <Box>
            <Button
              className={classes.btn}
              style={{
                textTransform: "none",
                marginBlock: "0.8rem",
                fontSize: "1rem",
                fontFamily: "Montserrat",
                fontWeight: "bolder",
                paddingInline: "3rem",
              }}
            >
              <Box style={{ position: "relative" }}> Click Here</Box>
            </Button>
          </Box>
        </Box>
        <Box
          className={classes.right}
          style={{ flex: "1" }}
        >
          <Box >
            <img style={{width:"100%"}} src="https://markitup.in/assets/img/hero-img-min.png" alt="" />
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
