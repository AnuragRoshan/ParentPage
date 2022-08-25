import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  servicesBox: {
    flex: "2",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    padding: "0.8rem",
    margin: "0.5rem",
    boxShadow: "-3px 0px 17px -4px rgba(216,216,216,0.75)" 
    
    // border:"0.2px solid grey"
  },
  
  img:{
    transition:"0.7s",
    "&:hover": {
      transform: "scale(0.90)"
    },
  }
}));

const OurServices = () => {
  const classes = useStyle();
  return (
    <Box style={{ padding: "1rem" }}>
      <Box
        style={{ padding: "1.2rem", display: "flex", flexDirection: "column" }}
      >
        <Box>
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Montserrat",
              paddingBlockEnd: "1rem",
              fontWeight: "bolder", 
              color:"#493d3d"
            }}
          >
            Our Services
          </Typography>
        </Box>
        <Box>
          {" "}
          <Typography
            style={{
              textAlign: "center",
              fontFamily: "Montserrat",
              paddingBlockEnd: "1rem",
              fontWeight: "bolder",
              fontSize: "2.2rem",
              color:"#493d3d"
            }}
          >
            {" "}
            This is what we offer
          </Typography>{" "}
        </Box>
        <Box style={{ display: "flex", flexDirection: "row",fontFamily:"Montserrat" }}>
          <Box className={classes.servicesBox}>
            <Box>
              <img
              className={classes.img}
                style={{
                  objectFit: "cover",
                  maxHeight: "100%",
                  maxWidth: "90%",
                }}
                src="https://markitup.in/assets/img/values-1.png"
                alt=""
                srcset=""
              />
            </Box>
            <Box style={{fontWeight:"bolder",fontSize:"1.7rem",paddingBlockEnd:"0.5rem"}}>Sjdfhsdhfj kjsdfh dsufhsk</Box>
            <Box style={{lineHeight:"1.4rem",paddingBlockEnd:"0.5rem"}}>jdsbfjksd dskjfdskf djdsfkjds djffd djfhdsjf <br /> dsfkhsd fkdsjfd jhgghjg jhgjh jygjg  <br />hygyug</Box>
          </Box>
          <Box className={classes.servicesBox}>
            <Box>
              <img
              className={classes.img}
                style={{
                  objectFit: "cover",
                  maxHeight: "100%",
                  maxWidth: "90%",
                }}
                src="https://markitup.in/assets/img/values-1.png"
                alt=""
                srcset=""
              />
            </Box>
            <Box style={{fontWeight:"bolder",fontSize:"1.7rem",paddingBlockEnd:"0.5rem"}}>Sjdfhsdhfj kjsdfh dsufhsk</Box>
            <Box style={{lineHeight:"1.4rem",paddingBlockEnd:"0.5rem"}}>jdsbfjksd dskjfdskf djdsfkjds djffd djfhdsjf <br /> dsfkhsd fkdsjfd jhgghjg jhgjh jygjg  <br />hygyug</Box>
          </Box>
          <Box className={classes.servicesBox}>
            <Box>
              <img
              className={classes.img}
                style={{
                  objectFit: "cover",
                  maxHeight: "100%",
                  maxWidth: "90%",
                }}
                src="https://markitup.in/assets/img/values-1.png"
                alt=""
                srcset=""
              />
            </Box>
            <Box style={{fontWeight:"bolder",fontSize:"1.7rem",paddingBlockEnd:"0.5rem"}}>Sjdfhsdhfj kjsdfh dsufhsk</Box>
            <Box style={{lineHeight:"1.4rem",paddingBlockEnd:"0.5rem"}}>jdsbfjksd dskjfdskf djdsfkjds djffd djfhdsjf <br /> dsfkhsd fkdsjfd jhgghjg jhgjh jygjg  <br />hygyug</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurServices;
