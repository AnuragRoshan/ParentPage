import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(() => ({
 
    
    img:{
      transition:"0.7s",
      paddingBlockStart:"2rem",
      "&:hover": {
        transform: "scale(0.98)"
      },
    }
  }));


const Testimonial = () => {
    const classes=useStyle();
  return (
    <Box style={{padding:"2.2rem",display:"flex",flexDirection:"column"}}>
        <Box style={{
              fontFamily: 'Aboreto',fontWeight:"bolder",fontSize:"3rem",
              color:"#493d3d"}}>
            Testimonial
        </Box>
        <Box>
        <img
              className={classes.img}
                style={{
                  objectFit: "cover",
                  maxHeight: "100%",
                  maxWidth: "80%",
                }}
                src="https://markitup.in/assets/img/features-3.png"
                alt=""
              />
        </Box>

    </Box>
  )
}

export default Testimonial