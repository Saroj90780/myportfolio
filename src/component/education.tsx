import { Box, CardMedia, Typography, CardContent, Card } from "@mui/material"
import img1 from '../../public/edu-img (2).png'
import img2 from '../../public/edu-img (3).png'
import img3 from '../../public/edu-img (4).png'
import img4 from '../../public/edu-img (5).png'

const Education = () => {
    return (
        <Box
            sx={{
                width: "75%",
                marginTop: "100px",
            }}>
            <Typography sx={{
                fontFamily: "Poppins3",
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
                marginBottom: "30px",
                color: "white"
            }}>My <span style={{
                fontFamily: 'Poppins2',
                color: "rgb(197, 117, 237)",
            }}>Educational background</span></Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: '50px',
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "50px"
                }}>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        border: "1px solid rgb(54, 1, 114)",
                        backgroundColor: "rgb(31, 14, 51)",
                        width: "500px",
                        borderRadius: "22px",
                        textAlign: "start",
                        p: "25px"
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
                            fontSize: "25px",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>MERN Full Stack at Naresh IT</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "14px"
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
                        backgroundColor: "rgb(31, 14, 51)",
                        width: "500px",
                        borderRadius: "22px",
                        textAlign: "start",
                        p: "25px"
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
                            fontSize: "25px",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>Master of Computer Application (2022-2024)</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "14px"
                    }}>
                        CGPA : 7.5
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: '50px',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        border: "1px solid rgb(54, 1, 114)",
                        backgroundColor: "rgb(31, 14, 51)",
                        width: "500px",
                        borderRadius: "22px",
                        textAlign: "start",
                        p: "25px"
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
                            fontSize: "25px",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>Bachelor of Science in Mathematics (2019-2022)</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "14px"
                    }}>
                        Percentage : 78%
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "7px",
                        border: "1px solid rgb(54, 1, 114)",
                        backgroundColor: "rgb(31, 14, 51)",
                        width: "500px",
                        borderRadius: "22px",
                        textAlign: "start",
                        p: "25px"
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
                            fontSize: "25px",
                            color: "white",
                            fontFamily: "Poppins3"
                        }}>Higher Secondary of Education (2017-2019)</Typography>
                    <Typography sx={{
                        color: "white",
                        fontFamily: "Poppins2",
                        fontSize: "14px"
                    }}>
                        Percentage : 55.5%
                    </Typography>
                </Box>


            </Box>
        </Box>
    )
}
export default Education