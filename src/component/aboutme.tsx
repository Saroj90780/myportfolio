import { Box, Grid, Typography } from '@mui/material';
import React from "react";
// import { Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
// import Earth from './ui/earth'
// import img from '../../public/reverse.jpg'
import img1 from '../../public/programming-background-with-person-working-with-codes-computer.jpg'
import img2 from '../../public/view-neon-illuminated-gaming-desk-setup-with-keyboard.jpg'
import img3 from '../../public/32993994_840843081452.jpg'
import img5 from '../../public/technology.jpg'
const Aboutme = () => {
    return (
        <Box sx={{
            width: "98.9vw",
            position: "relative",
            // backgroundImage: `url(${img})`,
            // backgroundSize: 'cover',
            // backgroundPosition: 'top',
            backgroundColor:"rgb(19, 19, 36)",
            padding: "0px 150px 150px 150px",

        }}>
            <Box>
                <Typography sx={{
                    fontFamily: "Poppins2",
                    display: "flex",
                    justifyContent: "left",
                    fontSize: "38px",
                    marginBottom: "30px",
                    color: "white"
                }}>About Me</Typography>

                <Grid sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px"
                }}>
                    <Grid sx={{ display: "flex" }}>
                        <GridItem
                            area="h-90 w-180"
                            description="Running out of copy so I'll write anything."
                            img={img2}
                        />
                        <Grid sx={{
                            marginLeft: "40px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "40px"

                        }}>
                            {/* <GridItem
                                area="h-40 w-130"
                                description={<Suspense>
                                    <Earth/>
                                </Suspense>}
                                img={img4}
                            /> */}

                            <GridItem
                                area="h-40 w-130"
                                description="It's the best money you'll ever spend"
                                img={img1}
                            />
                        </Grid>

                    </Grid>
                    <Grid sx={{ display: "flex" }}>
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
                </Grid>
            </Box>


        </Box>
    )
}

interface GridItemProps {
    area: string;
    description: React.ReactNode;
    img: string; // should be a URL or import path
}

const GridItem = ({ area,description,img }: GridItemProps) => {
    return (
        <div className={`relative ${area} rounded-xl border md:rounded-xl`}>
            <Box
                sx={{
                    backgroundImage: `url(${img})`,
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
                <div className="relative z-10 text-white font-semibold text-3xl">
                    <div className='z-10'>
                      {description}  
                    </div>
                </div>
            </Box>
        </div>
    );
};


export default Aboutme