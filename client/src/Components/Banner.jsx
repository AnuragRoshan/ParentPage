import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";


const useStyle = makeStyles(() => ({
  left: {
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    alignItems:"center"
  },
  right: {
    padding: "0rem",
    width:"100%",
    height:"100%"
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
  bannerResponsive:{
    display: "flex", 
    flexDirection: "row", 
    "@media (max-width:1000px)": {
      display: "flex",
      flexDirection: "column",
      margin: "7rem",
      fontSize:"1rem"
      // color: "white",
    },
  }
}));
const Banner = () => {
  const classes = useStyle();
  return (
    <Box style={{  marginBlock: "4rem",paddingInline: "3.6rem",paddingBlockStart:"3.6rem" ,backgroundColor:"transparent",backgroundImage:"https://www.linkpicture.com/q/5667004.jpg"}}>
      <Box className={classes.bannerResponsive} >
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
            <img style={{
                  objectFit: "cover",width:"100%" ,height:"100%"}} src="https://markitup.in/assets/img/hero-img-min.png" alt="" />
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
