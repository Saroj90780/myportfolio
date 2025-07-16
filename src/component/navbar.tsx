import {
    Box
} from '@mui/material';
import './navbar.css';

const Navbar =()=>{
const item=['Home','Project','Education','Contact','About me']
    return(
<>
<Box 
sx={{

    fontFamily:'Poppins2',
    display:{md:"flex",xs:"none"},
    justifyContent:"center",
    gap:'30px',
    paddingTop:"26px",
    paddingBottom:"26px",
    fontSize:"20px",
    color:'rgb(61, 102, 156)',
    textShadow:"0px 0px 12px gray"
}}>
    { item.map((items) => (

    
        <Box key={items}>
{items}
        </Box>
    ))}
</Box>
</>
    )
}
export default Navbar

