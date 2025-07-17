import { Box, Typography } from "@mui/material"
import { useState,useEffect } from "react"
import img1 from '../../public/edu-img (2).png'
import img2 from '../../public/edu-img (3).png'
import img3 from '../../public/edu-img (4).png'
import img4 from '../../public/edu-img (5).png'

const educationData = [
    {
        img: img3,
        title: "MERN Full Stack at Naresh IT",
        description:
            "Naresh i Technologies offers a comprehensive UI Full Stack Developer training program designed to build expertise in both front-end (UI) and back-end development.",
    },
    {
        img: img2,
        title: "Master of Computer Application (2022–2024)",
        description: "CGPA : 7.5",
    },
    {
        img: img1,
        title: "Bachelor of Science in Mathematics (2019–2022)",
        description: "Percentage : 78%",
    },
    {
        img: img4,
        title: "Higher Secondary of Education (2017–2019)",
        description: "Percentage : 55.5%",
    },
];

const Education = () => {
 const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
        <Box
            sx={{
                width: { md: "75%", xs: "100%" },
                marginTop: "100px",
            }}>
            <Typography sx={{
                fontFamily: "Poppins3",
                display: "flex",
                justifyContent: "center",
                fontSize: { md: "50px", xs: "24px" },
                marginBottom: "30px",
                color: "white"
            }}>My <span style={{
                fontFamily: 'Poppins2',
                color: "rgb(197, 117, 237)",
            }}>Educational background</span></Typography>
          {isMobile? (<Box sx={{display:"flex",flexDirection:"row",width:"100%",alignItems:"start",pl:"8px",pr:"8px"}}>
          <Box
                sx={{
                    display: "flex",
                    flexDirection:"column",
                    gap: "20px",
                    justifyContent: "center",
                    alignItems:"center",
                    marginBottom: "20px",width:"50%"
                }}>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        border: "1px solid rgb(54, 1, 114)",
                        backgroundImage: 'linear-gradient(to top right, rgb(42, 1, 88),rgb(50, 42, 138),rgb(11, 6, 57))',
                        width: "170px",
                        borderRadius: "15px",
                        textAlign: "start",
                        p: "13px"
                    }}
                >
                    <img
                        src={img3}
                        style={{
                            height: "100px",
                            width: "100px"
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "17px",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>MERN Full Stack at Naresh IT</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "10px"
                    }}>
                        Naresh i Technologies offers a comprehensive UI Full Stack Developer training program designed to build expertise in both front-end (UI) and back-end development.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        border: "1px solid rgb(54, 1, 114)",
                        backgroundImage: 'linear-gradient(to top right, rgb(42, 1, 88),rgb(50, 42, 138),rgb(11, 6, 57))',
                        width: "170px",
                        borderRadius: "15px",
                        textAlign: "start",
                        p: "13px"
                    }}
                >
                    <img
                        src={img1}
                        style={{
                            height: "100px",
                            width: "100px"
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "7",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>Bachelor of Science in Mathematics (2019-2022)</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "10px"
                    }}>
                        Percentage : 78%
                    </Typography>
                </Box>
                
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: '20px',
                    justifyContent: "center",
                    alignItems: "center",width:"50%"
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        border: "1px solid rgb(54, 1, 114)",
                       backgroundImage: 'linear-gradient(to top right, rgb(42, 1, 88),rgb(50, 42, 138),rgb(11, 6, 57))',
                        width: "170px",
                        borderRadius: "15px",
                        textAlign: "start",
                        p: "13px"
                    }}
                >
                    <img
                        src={img2}
                        style={{
                            height: "100px",
                            width: "100px"
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "7",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>Master of Computer Application (2022-2024)</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "10px"
                    }}>
                        CGPA : 7.5
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        border: "1px solid rgb(54, 1, 114)",
                        backgroundImage: 'linear-gradient(to top right, rgb(42, 1, 88),rgb(50, 42, 138),rgb(11, 6, 57))',
                        width: "170px",
                        borderRadius: "15px",
                        textAlign: "start",
                        p: "13px"
                    }}
                >
                    <img
                        src={img4}
                        style={{
                            height: "100px",
                            width: "100px"
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "7",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>Higher Secondary of Education (2017-2019)</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "10px"
                    }}>
                        Percentage : 55.5%
                    </Typography>
                </Box>


            </Box>
            </Box>):( <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: { xs: "20px", md: "60px" },
                    mb: "50px",
                    px: 2,
                }}
            >
                {educationData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "7px",
                            border: "1px solid rgb(54, 1, 114)",
                            backgroundImage: 'linear-gradient(to top right, rgb(42, 1, 88),rgb(50, 42, 138),rgb(11, 6, 57))',
                            width: { xs: "100%", sm: "340px", md: "470px" },
                            borderRadius: "22px",
                            textAlign: "start",
                            p: "25px",
                        }}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            style={{
                                height: "100px",
                                width: "100px",
                                objectFit: "contain",
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "20px",
                                color: "white",
                                fontFamily: "Poppins3",
                                fontWeight: "bold",
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            sx={{
                                color: "white",
                                fontFamily: "Poppins2",
                                fontSize: "14px",
                            }}
                        >
                            {item.description}
                        </Typography>
                    </Box>
                ))}
            </Box>)}
        </Box>
    )
}
export default Education