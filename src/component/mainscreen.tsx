import { Box } from '@mui/material';

import Navbar from './navbar'
import Toppart from './toppart'
import Aboutme from './aboutme'
import Newcard from './projects'
import Education from './education'
import backimg from '../image/abstract-blue-lens-flare-with-hexagon-ghost-design-element.jpg'
import phoneimg from '../image/blue-light-black-background.jpg'
import Myskills from './myskills'
import Footer from './footer'

const Mainscreen = () => {


  return (
    <>
      <Box sx={{
        width: '98.8vw',
        overflowX: "hidden",
        position: "relative",
        backgroundImage: { md: `url(${backimg})`, xs: `url(${phoneimg})` },
        backgroundSize: "cover",
        backgroundPosition: 'bottom',
        backgroundColor: "rgb(19, 19, 36)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        scrollBehavior: "smooth" // 👈 Smooth scroll enabled
      }}>
        <Navbar />
        <Box id="Home" sx={{
          width: "100%", display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Toppart />
        </Box>

        <Box id="About me">
          <Aboutme />
        </Box>

        <Box id="Project">
          <Newcard />
        </Box>

        <Box id="Education" sx={{
          width: "100%", display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Education />
        </Box>
        <Myskills />
        <Box id="Contact">
        </Box>
        <Footer/>
      </Box>
    </>
  )
}

export default Mainscreen