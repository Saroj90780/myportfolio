import {Box,Typography} from '@mui/material'
import { Spotlight } from "../components/ui/spotlight";
import Links from './lastpart'

const SpotlightPreview=()=> {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: {md:'30rem',xs:"300px"},
        width: '100%',
        overflow: 'hidden',
        borderRadius: 4, // equivalent to Tailwind's rounded-md
        backgroundColor: 'transparent',
        alignItems: { md: 'center' },
        justifyContent: { md: 'center' },
      }}
    >
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:transparent]",
        )}
      /> */}

      <Spotlight
        className="-top-20 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      {/* <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Ready to take your <br/>digital presence to the next level?
        </h1>
        <p className="mx-auto mt-4 text-center text-base font-normal text-neutral-300">
          Reach out to me today and let's discuss how I can help you achieve your goals
        </p>
      </div> */}
      <Box
      sx={{
        position: 'relative',
        zIndex: 10,
        mx: 'auto',
        width: '100%',
        maxWidth: '1280px', // max-w-7xl
        pt: { xs: 7, md: 0 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          mt:{md:6,xs:1},
          fontSize: { xs: '20px', md: '60px' }, // text-4xl to md:text-7xl
          fontWeight: 'bold',
          backgroundImage: 'linear-gradient(to bottom, #fafafa, #a3a3a3)', // from-neutral-50 to-neutral-400
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
          opacity: 0.7, // bg-opacity-50 equivalent for gradient
        }}
      >
        Ready to take your <br />
        digital presence to the next level?
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: {md:6,xs:2},
          fontSize: {md:'17px',xs:'11px'},
          fontWeight: 400,
          color: '#d4d4d4', // text-neutral-300 (#d4d4d4)
        }}
      >
        Reach out to me today and let's discuss how I can help you achieve your goals
      </Typography>
    </Box>
      <Links/>
    </Box>
  );
}
export default SpotlightPreview
