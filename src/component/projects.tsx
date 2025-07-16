"use client";
import {Box,Typography} from '@mui/material'
import { PinContainer } from "./ui/3d-pin";
import pimg from '../../public/5204684_2665820.jpg'
import './project.css'



export function AnimatedPinDemo() {
  return (
    <>
<Typography sx={{
                    fontFamily: "Poppins3",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: {md:"50px",xs:"18px"},
                    marginBottom: {md:"30px",xs:"10px"},
                    color: "white"
                }}> A small selection of <span style={{
                  fontFamily:'Poppins2',
                  color:"rgb(197, 117, 237)",
                }}> Recent Project</span></Typography>
  <Box sx={{
    display:"flex",
    gap:"140px",
    flexDirection:{md:"row",xs:"column"},
    justifyContent:"center",
    
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
    title="/google.com"
    />
      <Card
    heading='Aceternity UI'
    description='jdnvgkjrfgjkrnjdfkrg'
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
    heading:string,
    description:string,
    href:string,
    title:string // should be a URL or import path
}

const Card =({heading,description,href,title}: GridItemProps)=>{
  return(
    <>
{/* <div className="h-[20rem] w-[20rem] flex justify-center bg-red-500"> */}
      <PinContainer
        title={`${title}`}
        href={`${href}`}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[23rem] h-[23rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {heading}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              {description}
            </span>
          </div>
          <div className="w-full rounded-xl mt-6 flex items-center justify-center">
            <img 
            className="w-50"
            src={pimg}
            />
            </div>
            <div className='btn-div'>
            <button>
              Visit
            </button>
            </div>
        </div>
      </PinContainer>
  
    </>
  )
}
export default AnimatedPinDemo
