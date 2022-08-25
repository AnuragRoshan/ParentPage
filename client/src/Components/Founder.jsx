import { Box, makeStyles } from "@material-ui/core";
import React from "react";
const useStyle = makeStyles(() => ({
    profileBox:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
        
    },
  img: {
    transition: "0.6s",
    objectFit: "cover",
              maxHeight: "80%",
              maxWidth: "80%",
              borderRadius:"1rem",
    "&:hover": {
      transform: "scale(0.95)",
    },
   
  },
  detailInfo:{
    maxWidth:"80%",fontWeight:"bolder" ,paddingBlockStart:"1rem",color:"#493d3d"
  },
  detailOverView:{
    maxWidth:"80%" ,lineHeight:"1.4rem",color:"#493d3d"
  }
}));
const Founder = () => {
  const classes = useStyle();

  return (
    <Box
      style={{
        padding: "2.2rem",
        textAlign: "center",
        fontFamily: "Montserrat",
        lineHeight: "2rem",
        color: "#493d3d",
      }}
    >
      <Box style={{ fontWeight: "bolder", paddingBlockEnd: "1rem" }}>
        Who We Are
      </Box>
      <Box style={{ fontWeight: "bolder", fontSize: "1.8rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iure a
        expedita voluptate inventore illo facere reiciendis.<br />  Praesentium{" "}
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBlock: "1.4rem",
        }}
      >
        <Box style={{ flex: "1" }} className={classes.profileBox}>
          <img
            className={classes.img}
          
            src="https://www.linkpicture.com/q/photostudio-4-designify.png"
            alt=""
            srcset=""
          />
           
           <Box className={classes.detailInfo} >
            Anurag Roshan
          </Box>
          <Box className={classes.detailOverView}>
            kewuhffuiewfh oeifjewi iefu ewfie eoifewif  oiefie oiwefj w fjiwe fiewoj eoifewif  oiefie oiwefj w fjiwe fiewoj
          </Box>
        </Box>
        <Box style={{ flex: "1" }} className={classes.profileBox}>
          <img
            className={classes.img}
          
            src="https://www.linkpicture.com/q/photostudio-4-designify.png"
            alt=""
            srcset=""
          />
           
           <Box className={classes.detailInfo} >
            Anurag Roshan
          </Box>
          <Box className={classes.detailOverView}>
            kewuhffuiewfh oeifjewi iefu ewfie eoifewif  oiefie oiwefj w fjiwe fiewoj eoifewif  oiefie oiwefj w fjiwe fiewoj
          </Box>
        </Box>
        <Box style={{ flex: "1" }} className={classes.profileBox}>
          <img
            className={classes.img}
          
            src="https://www.linkpicture.com/q/photostudio-4-designify.png"
            alt=""
            srcset=""
          />
           <Box className={classes.detailInfo} >
            Anurag Roshan
          </Box>
          <Box className={classes.detailOverView}>
            kewuhffuiewfh oeifjewi iefu ewfie eoifewif  oiefie oiwefj w fjiwe fiewoj eoifewif  oiefie oiwefj w fjiwe fiewoj
          </Box>
        </Box>
     
      </Box>
    </Box>
  );
};

export default Founder;
