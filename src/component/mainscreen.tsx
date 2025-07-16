import {Box} from '@mui/material';

import Navbar from './navbar'
import Toppart from './toppart'
import Aboutme from './aboutme'
import Newcard from './projects'
import Education from './education'
import backimg from '../../public/abstract-blue-lens-flare-with-hexagon-ghost-design-element.jpg'
import phoneimg from '../../public/blue-light-black-background.jpg'

const Mainscreen =()=> {


  return (
<>
    <Box sx={{
      width: '98.8vw',
      overflowX: "hidden",
      position:"relative",
      backgroundImage: {md:`url(${backimg})`,xs:`url(${phoneimg})`},
    backgroundSize:"cover",
    backgroundPosition: 'bottom',
    backgroundColor:"rgb(19, 19, 36)",
    // background: "linear-gradient(135deg, rgba(228, 102, 102, 0.6), rgba(106, 106, 219, 0.9))",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",

    }}>
      <Navbar/>
      <Toppart/>
      <Aboutme/>
      <Newcard/>
      <Education/>

      
      
    </Box>
</>
  )
}

export default Mainscreen