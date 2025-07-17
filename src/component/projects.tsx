"use client";
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material'
import { PinContainer } from "./ui/3d-pin";
import pimg from '../../public/Frame 4 (1).png'
import './project.css'
import langimg from '../../public/Frame 3 (1).png'



export function AnimatedPinDemo() {
  return (
    <>
      <Typography sx={{
        fontFamily: "Poppins3",
        display: "flex",
        justifyContent: "center",
        fontSize: { md: "50px", xs: "20px" },
        marginBottom: { md: "30px", xs: "10px" },
        color: "white",
        marginTop:{xs:"60px",md:"5px"}
      }}> A small selection of <span style={{
        fontFamily: 'Poppins2',
        color: "rgb(197, 117, 237)",
      }}> Recent Project</span></Typography>
      <Box sx={{
        display: "flex",
        gap: { md: "140px", xs: "30px" },
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "center",
        marginRight: { xs: "25px" },
        marginLeft: { xs: "25px" },
        marginBottom: "50px"

      }}>
        <Card
          heading='My Portfolio'
          description='Responsive web application'
          href="https://twitter.com/mannupaaji"
          title="/ui.aceternity.com"
        />
        <Card
          heading='Shopping Application'
          description='It a e-Commerce web app'
          href="https://twitter.com/mannupaaji"
          title="/google.com"
        />
        <Card
          heading='Mentroz'
          description='Career counseling Web App'
          href="https://google.com"
          title="/ui.aceternity.com"
        />
      </Box>
      {/* <Box
sx={{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
  }}>
  <Card
    heading='Aceternity UI'
    description='jdnvgkjrfgjkrnjdfkrg'
    href="https://twitter.com/mannupaaji"
    title="/ui.aceternity.com"
    />
  
</Box> */}
      {/* </Box> */}
    </>
  );
}
interface GridItemProps {
  heading: string,
  description: string,
  href: string,
  title: string // should be a URL or import path
}

const Card = ({ heading, description, href, title }: GridItemProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {/* <div className="h-[20rem] w-[20rem] flex justify-center bg-red-500"> */}
      <PinContainer
        title={`${title}`}
        href={`${href}`}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[23rem] items-center">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>
          {/* <div className="w-full rounded-xl mt-4 flex items-center justify-center bg-black"> */}
          {isMobile ? (<div className="w-70 rounded-xl mt-4 flex items-center justify-center bg-black">
            <img
              src={pimg}
            />
          </div>) : (<div className="w-full rounded-xl mt-4 flex items-center justify-center bg-black">
            <img
              src={pimg}
            />
          </div>)}
          {/* <img 
            src={pimg}
            />
            </div> */}
          {isMobile ?(<div className='btn-div pl-5 pr-5'>
            <img src={langimg}
              style={{
                width: "120px",
              }}
            />
            <div>Click to visit</div>
          </div>):(
            <div className='btn-div'>
            <img src={langimg}
              style={{
                width: "170px"
              }}
            />
            <div>Click to visit</div>
          </div>
          )}
        </div>
      </PinContainer>

    </>
  )
}
export default AnimatedPinDemo
