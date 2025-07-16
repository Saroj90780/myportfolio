import {Box} from '@mui/material';

import Navbar from './navbar'
import Toppart from './toppart'
import Aboutme from './aboutme'
import Newcard from './projects'

const Mainscreen =()=> {


  return (
<>
    <Box sx={{
      width: '98.8vw',
      overflowX: "hidden",
      position:"relative",
    //   backgroundImage: `url(${backimg})`,
    // backgroundSize: 'cover',
    // backgroundPosition: 'bottom',
    backgroundColor:"rgb(19, 19, 36)"
    }}>
      <Navbar/>
      <Toppart/>
      <Aboutme/>
      <Newcard/>
      
    </Box>
    {/* <Box sx={{width: '98.8vw',
      overflowX: "hidden",}}>
    <Aboutme/>
    
    </Box> */}
    
</>
  )
}

export default Mainscreen