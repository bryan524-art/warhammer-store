import * as React from 'react'
import { useState } from 'react'

import { Box, Button, Card, } from '@mui/material'

export const Usestate = () => {

  const [imperio, setimperio] = useState("...");

  return (
    <Box sx={{
      padding: "2",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    }}>
    <h1>Mi imperio favorito son {imperio}!</h1>
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",}}>
        <Card sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          margin: "10px",
          width: "30%",
          height: "200px"}}>
      <Button onClick={() => setimperio("los temparios oscuros")} sx={ButtonStyle}>
        <Box sx={ButtonStyle2}>
        los ultra marines
        </Box>
          <Box
            sx={{
              overflow: "hidden",
            }}>
            <img
              src="/Shu Sheyu.png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
      </Button>
        </Card>
        <Card sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          margin: "10px",
          width: "30%",
          height: "200px"}}>
      <Button onClick={() => setimperio("los ultra marines")} sx={ButtonStyle}>
        <Box sx={ButtonStyle2}>
          los templarios oscuros
        </Box>
          <Box
            sx={{
              overflow: "hidden",
            }}>
            <img
              src="/descarga (30).png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
      </Button>
        </Card>
        <Card sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "20px",
          boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          margin: "10px",
          width: "30%",
          height: "200px"}}>
      <Button onClick={() => setimperio("los angeles sangrientos")} sx={ButtonStyle}>
        <Box sx={ButtonStyle2}>
          los angeles sangrientos
        </Box>
          <Box
            sx={{
              overflow: "hidden",
            }}>
            <img
              src="/descarga (31).png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
      </Button>
        </Card>
    </Box>
    </Box>
  )
}

const ButtonStyle = {
  margin: 0,
  padding: 0,
  boxSizing: "border-box", // en JS se escribe boxSizingsto ayuda a que el padding no rompa el ancho */ 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}

const ButtonStyle2 = {
  backgroundColor: "#002d68",
  color: "white",
  width: "100%",
}