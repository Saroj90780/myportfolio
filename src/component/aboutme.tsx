import { Box, Grid, Typography, Button } from '@mui/material';
import React, { useState, useEffect, } from "react";
import { GlowingEffect } from "./ui/glowing-effect";
import img1 from '../image/16252136_rm378-07.jpg'
import img2 from '../image/background-img.jpg'
import img3 from '../image/32993994_840843081452.jpg'
import img5 from '../image/technology.jpg'
import mern from '../image/mern stack.png'
const Aboutme = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [copied, setCopied] = useState(false);
    const email = "2001sarojpadhi25@gmail.com"

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Copy failed:', err);
        }
    };

    return (
        <Box sx={{
            width: "98.9vw",
            position: "relative",
            // backgroundImage: `url(${img})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'top',
            // backgroundColor:"rgb(19, 19, 36)",
            padding: { md: "0px 150px 150px 150px", xs: "22px 22px 22px 22px" },

        }}>
            <Box>
                <Typography sx={{
                    fontFamily: "Poppins2",
                    display: "flex",
                    justifyContent: { md: "left", xs: "left" },
                    fontSize: { md: "38px", xs: "25px" },
                    marginBottom: "30px",
                    color: "white"
                }}>About Me</Typography>

                {/* <Grid sx={{
                    display: {md:"flex",xs:"none"},
                    flexDirection: "column",
                    gap: {md:"40px",xs:"20px"}
                }}>
                    <Grid sx={{ display: "flex",flexDirection:{xs:"column",md:"row"} }}>
                        <GridItem
                            area="h-90 w-180 xs:h-20 w-30"
                            description="Running out of copy so I'll write anything."
                            img={img2}
                        />
                        <Grid sx={{
                            marginLeft: "40px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "40px"

                        }}>
                            <GridItem
                                area="h-40 w-130"
                                description="It's the best money you'll ever spend"
                                img={img1}
                            />

                            <GridItem
                                area="h-40 w-130"
                                description="It's the best money you'll ever spend"
                                img={img1}
                            />
                        </Grid>

                    </Grid>
                    <Grid sx={{ display: "flex" ,flexDirection:{xs:"column",md:"row"}}}>
                        <GridItem
                            area="h-40 w-130"
                            description="I'm not even kidding. Ask my mom if you don't believe me."
                            img={img5}
                        />
                        <GridItem
                            area="h-40 w-180 ml-10"
                            description="I'm writing the code as I record this, no shit."
                            img={img3}
                        />
                    </Grid>
                </Grid> */}

                {isMobile ? (<>
                    <Grid sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "27px",
                        marginLeft: "15px",
                        marginRight: "15px"
                    }}>
                        <GridItem
                            area="h-45 w-full"
                            description={<Typography sx={{ fontFamily: "Poppins1", fontSize: "20px", textAlign: "left", marginTop: "90px" }}>Building the future, one line of code at a time.</Typography>}
                            img={`url(${img2})`}
                        />
                        <GridItem
                            area="h-45 w-full"
                            description={<Typography sx={{ fontFamily: "Poppins1", fontSize: "20px", marginTop: "26px" }}>I turn your ideas into high-performance web applications.</Typography>}
                            img={`url(${img1})`}
                        />
                        <GridItem
                            area="h-45 w-full"
                            description={<Box>
                                <Typography sx={{ fontFamily: "Poppins1", fontSize: "20px", marginTop: "15px" }}>Do you want to start a project together?</Typography>
                                <Button
                                    onClick={handleCopy}
                                    sx={{
                                        height: "37px", width: "60%", border: "1px solid blue", marginTop: "10px", color: "white", backgroundColor: "rgba(5, 2, 35, 1)", 
                                        "&:focus": { outline: "none" },
                                        "&.Mui-focusVisible": { outline: "none" },fontFamily:"Poppins3"
                                    }}
                                >
                                    {copied ? 'Email copied' : 'Copy my email'}
                                </Button>
                            </Box>}
                            img={`linear-gradient(to top right, rgba(70, 8, 139, 1),rgba(25, 22, 58, 1),rgba(70, 8, 139, 1))`}
                        />
                        <GridItem
                            area="h-45 w-full"
                            description={<Typography sx={{ fontFamily: "Poppins1", fontSize: "20px" }}>Tech enthusiast with a passion for development.</Typography>}
                                img={`url(${img5})`}
                        />
                        <GridItem
                            area="h-45 w-full"
                            description={<><Typography sx={{ fontFamily: "Poppins2", fontSize: "10px", color: "gray", textAlign: "left", marginTop: "auto" }}>
                                    I constantly try to improve
                                </Typography>
                                    <Typography sx={{ fontFamily: "Poppins1", fontSize: "20px", textAlign: "left", marginTop: "auto" }}>
                                        My Tech stack
                                    </Typography>
                                    <Box sx={{
                                        backgroundImage: `url(${mern})`, width: "200px", height: "100px", backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}/>
                                </>}
                            img={`url(${img3})`}
                        />
                    </Grid>
                </>) : (<>
                    <Grid sx={{
                        display: { md: "flex", xs: "none" },
                        flexDirection: "column",
                        gap: { md: "40px", xs: "20px" }
                    }}>
                        <Grid sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                            <GridItem
                                area="h-90 w-180 xs:h-20 w-30"
                                description={<Typography sx={{ fontFamily: "Poppins1", fontSize: "30px", textAlign: "left", marginTop: "200px" }}>Building the future, one line of code at a time.</Typography>}
                                img={`url(${img2})`}

                            />
                            <Grid sx={{
                                marginLeft: "40px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "40px"

                            }}>
                                <GridItem
                                    area="h-40 w-130"
                                    description={<Typography sx={{ fontFamily: "Poppins1", fontSize: "25px" }}>I turn your ideas into high-performance web applications.</Typography>}
                                    img={`url(${img1})`}


                                />

                                <GridItem
                                    area="h-40 w-130"
                                    description={<Box>
                                        <Typography sx={{ fontFamily: "Poppins1", fontSize: "30px" }}>Do you want to start a project together?</Typography>
                                        <Button
                                            onClick={handleCopy}
                                            sx={{
                                                height: "35px", width: "40%", border: "1px solid blue", marginTop: "5px", color: "white", backgroundColor: "rgba(5, 2, 35, 1)",
                                                "&:focus": { outline: "none" },
                                                "&.Mui-focusVisible": { outline: "none" },
                                                fontFamily:"Poppins3"
                                            }}
                                        >
                                            {copied ? 'Email copied' : 'Copy my email'}
                                        </Button>
                                    </Box>}
                                    img={`linear-gradient(to top right, rgba(70, 8, 139, 1),rgba(25, 22, 58, 1),rgba(70, 8, 139, 1))`}
                                />
                            </Grid>

                        </Grid>
                        <Grid sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                            <GridItem
                                area="h-70 w-130"
                                description={<Typography sx={{ fontFamily: "Poppins1", fontSize: "30px" }}>Tech enthusiast with a passion for development.</Typography>}
                                img={`url(${img5})`}

                            />
                            <GridItem
                                area="h-70 w-180 ml-10"
                                description={<><Typography sx={{ fontFamily: "Poppins2", fontSize: "15px", color: "gray", textAlign: "left", marginTop: "auto" }}>
                                    I constantly try to improve
                                </Typography>
                                    <Typography sx={{ fontFamily: "Poppins1", fontSize: "32px", textAlign: "left", marginTop: "auto" }}>
                                        My Tech stack
                                    </Typography>
                                    <Box sx={{
                                        backgroundImage: `url(${mern})`, width: "320px", height: "190px", backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                    }}/>
                                </>}
                            img={`url(${img3})`}
                            />
                        </Grid>
                    </Grid></>)}
            </Box>


        </Box>
    )
}

interface GridItemProps {
    area: string;
    description: React.ReactNode;
    img: string;  // should be a URL or import path
}

const GridItem = ({ area, description, img }: GridItemProps) => {

    return (
        <div className={`relative ${area} rounded-xl border md:rounded-xl`}>
            <Box
                sx={{
                    backgroundImage: `${img}`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: 'inherit',
                    padding: '1rem',
                    height: '100%', // optional: control height
                    width: '100%',  // optional: control width
                    position: 'absolute',

                }}
            >
                <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className='h-100% relative text-white w-full'>
                    {description}
                </div>
            </Box>
        </div>
    );
};


export default Aboutme