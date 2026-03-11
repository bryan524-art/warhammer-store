import * as React from 'react'
import { useState, useEffect } from 'react'
        
import { Typography, Box, Button } from '@mui/material'

export const Useeffect2 = () => {

const [creado, setCreado] = useState(0);
const [calculation, setCalculation] = useState(0);

useEffect (() => {
  setCalculation(creado + 1);
}, [creado]);

return (
  <Box>
    <Typography>Imperios creados {creado}</Typography>
    <Button onClick={() => setCreado(creado + 1)}>Crear un nuevo imperio</Button>
    <Typography>Imperios creados {calculation}</Typography>
  </Box>
)}