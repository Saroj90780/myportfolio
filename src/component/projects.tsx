"use client";
import React from "react";
import {Box,Typography} from '@mui/material'
import { PinContainer } from "./ui/3d-pin";
import pimg from '../../public/5204684_2665820.jpg'



export function AnimatedPinDemo() {
  return (
    <>
    {/* <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div> */}
{/* <Box
sx={{
  display:"flex",
  flexDirection:"column",
  height:"50vh"
}}
> */}
<Typography sx={{
                    fontFamily: "Poppins3",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "50px",
                    marginBottom: "30px",
                    color: "white"
                }}> A small selection of <span style={{
                  fontFamily:'Poppins2',
                  color:"rgb(197, 117, 237)",
                }}> Recent Project</span></Typography>
  <Box sx={{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    paddingLeft:"100px",
    paddingRight:"100px"
  }}>
  <Card
    heading='Aceternity UI'
    description='jdnvgkjrfgjkrnjdfkrg'
    href="https://twitter.com/mannupaaji"
    title="/ui.aceternity.com"
    />
    <Card
    heading='Aceternity UI'
    description='jdnvgkjrfgjkrnjdfkrg'
    href="https://twitter.com/mannupaaji"
    title="/ui.aceternity.com"
    />
      <Card
    heading='Aceternity UI'
    description='jdnvgkjrfgjkrnjdfkrg'
    href="https://twitter.com/mannupaaji"
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


const Card =({heading,description,href,title})=>{
  return(
<div className="h-[30rem] w-full flex items-center justify-center">
      <PinContainer
        title={`${title}`}
        href={`${href}`}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>
          <div className="w-full rounded-lg mt-8">
            <img 
            className="h-60 w-60"
            src={pimg}
            />
            </div>
        </div>
      </PinContainer>
    </div>
  )
}
export default AnimatedPinDemo
