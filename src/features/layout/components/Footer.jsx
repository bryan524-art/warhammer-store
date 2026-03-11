import * as React from 'react'

import AdbIcon from '@mui/icons-material/Adb';

import { Typography, Box, } from '@mui/material'
import { Padding } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box sx={{
      border: "1px solid black",
      backgroundColor: "#1d1d1d",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      textAlign: "center",
      py: 2
    }}>
      <Typography sx={{color: "white", my: 1.1}}>
        <AdbIcon sx={IconStyle} />
        Aplicativo web desarrollado en React para la gestion de productos hecho por
        <AdbIcon sx={IconStyle}/>
      </Typography>
      <Typography sx={{color: "white"}}>
        ©2026 Bryan Franco Gomez
      </Typography>
    </Box>
  )
}

const IconStyle = {
  color: "white",
  mx: 1,
}
