import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "grey",
    color: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },
  },
  link: {
    color: "black",
    "&:hover": {
      color: "grey",
    },
  },
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{
          boxShadow: " 0 2px 4px 0 rgba(0,0,0,.2)",
          backgroundColor: "#fffffff0",
          position: "fixed",
          padding: "0.5rem",
        }}
      >
        <Toolbar style={{ marginInline: "4rem" }}>
          <Grid item xs={11}>
            <Typography
              variant="h5"
              style={{
                color: "black",
                fontFamily: "Montserrat",
                fontSize: "30px",
                fontWeight: "bolder",
              }}
            >
              ASKGroup
            </Typography>
          </Grid>
          <Grid>
            <a href="" style={{ textDecoration: "none" }}>
              <Typography
                className={classes.link}
                style={{
                  width: "130px",
                  paddingLeft: "1rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                }}
              >
                Our Services{" "}
              </Typography>{" "}
            </a>
          </Grid>
          <Grid>
            <Button
              style={{ padding: "0", marginLeft: "1px", textTransform: "none" }}
            >
              {" "}
              <Typography
                className={classes.btn}
                style={{
                  borderRadius: "4px",
                  width: "110px",
                  padding: "0.4rem",
                  fontFamily: "Montserrat",
                  fontWeight: "bolder",
                }}
              >
                Contact Us
              </Typography>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
