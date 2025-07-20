import {
    Box
} from '@mui/material';
import './navbar.css';

// const Navbar =()=>{
// const item=['Home','Project','Education','Contact','About me']
//     return(
// <>
// <Box 
// sx={{

//     fontFamily:'Poppins2',
//     display:{md:"flex",xs:"none"},
//     justifyContent:"center",
//     gap:'30px',
//     paddingTop:"26px",
//     paddingBottom:"26px",
//     fontSize:"20px",
//     color:'rgb(61, 102, 156)',
//     textShadow:"0px 0px 12px gray"
// }}>
//     { item.map((items) => (

    
//         <Box key={items}>
// {items}
//         </Box>
//     ))}
// </Box>
// </>
//     )
// }
// export default Navbar


const Navbar = () => {
  const item = ['Home', 'Project', 'Education', 'Contact', 'About me'];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        fontFamily: 'Poppins2',
        display: { md: 'flex', xs: 'none' },
        justifyContent: 'center',
        gap: '30px',
        paddingTop: '26px',
        paddingBottom: '26px',
        fontSize: '20px',
        color: 'rgb(61, 102, 156)',
        textShadow: '0px 0px 12px gray',
        cursor: 'pointer',
      }}
    >
      {item.map((label) => (
        <Box key={label} onClick={() => handleScroll(label)}>
          {label}
        </Box>
      ))}
    </Box>
  );
};
export default Navbar


