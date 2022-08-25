
import { Box, makeStyles } from '@material-ui/core';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import OurServices from './Components/OurServices';
import Founder from './Components/Founder';
import Testimonial from './Components/Testimonial';
import { Query } from './Components/Query';
import Footer from './Components/Footer';

const useStyles = makeStyles(() => ({


}))

function App() {
  const classes = useStyles();
  return (
    <Box className="App" style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Banner />
      <OurServices />
      <Founder />
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box style={{ flex: "1", textAlign: "center" }}>
          <Testimonial />
        </Box>
        <Box style={{ flex: "1", textAlign: "center" }}>
          <Query />
        </Box>
      </Box>
      <Footer/>

    </Box>
  );
}

export default App;
