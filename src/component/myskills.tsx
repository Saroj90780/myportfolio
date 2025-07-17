import { Typography,Box} from "@mui/material"
import skillsimg from '../../public/Group 1909 (1).png'
const Myskills=()=>{
   return(
    <>
    <Typography sx={{
                fontFamily: "Poppins3",
                display: "flex",
                justifyContent: "center",
                fontSize: { md: "50px", xs: "24px"},
                marginTop:"40px",
                color: "white"
            }}>My <span style={{
                fontFamily: 'Poppins2',
                color: "rgb(197, 117, 237)",
            }}>Skills</span></Typography>
            <Box sx={{
                width:{md:"45%",xs:"90%"}
            }}>
                <img src={skillsimg} />
            </Box>
            
    </>
   ) 
}
export default Myskills