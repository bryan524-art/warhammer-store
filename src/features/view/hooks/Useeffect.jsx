import * as React from 'react'
import { useState, useEffect } from 'react'

import { Box } from '@mui/material'

export const Useeffect = () => {

  const [imperio, setImperio] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImperio((imperio) => imperio + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [imperio]);

  return (
    <Box sx={{
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    }}>
      <h1>Imperios creados {imperio}</h1>

      <Box
        component="card"
        sx={{
          width: { xs: "100%", sm: "85%", md: "65%", lg: "50%" },
          overflow: "hidden",
          borderRadius: "20px",
          marginTop: "10px"
        }}>
        <img
          src="/Ultramarines, Egor Samsonov_Nero_AI_Image_Upscaler_Photo_Face.png"
          alt="Ultramarine del Imperio"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

    </Box>
  )
}