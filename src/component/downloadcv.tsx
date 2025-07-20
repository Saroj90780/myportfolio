import React from 'react';
import { Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import cv from '../Saroj padhi resume....pdf'

const DownloadCV: React.FC = () => {
  return (
    <a
      href={cv}
      download="Saroj_Padhi_CV.pdf"
      style={{ textDecoration: 'none', outline: "none"}}
    >
      <Button
        startIcon={<DownloadIcon />}
        sx={{
          height: { md: "40px", xs: "35px" }, width: { md: "170px", xs: "120px" }, marginTop: "15px", borderRadius: "8px", fontFamily: 'Poppins2', color: "white", fontSize: { md: "15px", xs: "10px" }, "&:focus": { outline: "none" },
          "&.Mui-focusVisible": { outline: "none" },
          backgroundImage: `linear-gradient(to top right, rgba(2, 56, 110, 0.5),rgba(149, 74, 248, 1),rgba(49, 1, 78, 0.5))`
        }}
      >
        Download CV
      </Button>
    </a>
  );
};

export default DownloadCV;
