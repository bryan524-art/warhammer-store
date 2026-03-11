import * as React from 'react'
import { useState } from 'react'

import { Card, CardContent, CardActions, Typography, Box, Button, TextField  } from '@mui/material'

export const Myaccount = () => {

  const [login, setlogin] = useState("...");

  return (
    <Box sx={{
      marginTop: { xs: "0.5%", sm: "1.5%", md: "2.5%" },
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}>
      <Box sx={{
        width: "30%",
        display: "flex",
        justifyContent: "space-between"
      }}>
      <Button sx={ButtonInicioSesion}
       onClick={() => setlogin(InicioSesion)}>
        <Typography>
          Iniciar sesion
        </Typography>
      </Button>
      <Button sx={ButtonRegistro}
       onClick={() => setlogin(Registro)}>
        <Typography>
          Registrate
        </Typography>
      </Button>
      </Box>
      <Card sx={{
        marginTop: { xs: "0.5%", sm: "1.5%", md: "2.5%" },
        width: "50%",
        minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",}}>
        Iniciar sesion o Registarte
        {login}
      </Card>
    </Box>
  )
}

const ButtonInicioSesion = {
  width: "40%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
  backgroundColor: "#1976D2",
  color: "white"
}

const ButtonRegistro = {
  width: "40%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
  backgroundColor: "#d21919",
  color: "white"
}

const InicioSesion = (
  <Box sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2
  }}>

    <Typography variant="h5" fontWeight="bold">
      Inicio de sesión
    </Typography>

    <Box sx={{
      width: { xs: "90%", sm: "70%", md: "60%" },
      display: "flex",
      flexDirection: "column",
      gap: 2
    }}>

      <TextField sx={{ 
        borderRadius: "10px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",}}
        id="usuario"
        name="usuario"
        label="Usuario"
        placeholder="Nombre: Bryan"
        variant="outlined"
        fullWidth
      />

      <TextField sx={{ 
        borderRadius: "10px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",}}
        id="password"
        name="password"
        label="Contraseña"
        type="password"
        placeholder="Contraseña: 1234"
        variant="outlined"
        fullWidth
      />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#1976D2",
          borderRadius: "10px",
          height: "45px"
        }}
      >
        Ingresar
      </Button>

    </Box>

  </Box>
);

const Registro = (
  <Box sx={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2
  }}>

    <Typography variant="h5" fontWeight="bold">
      Registrate
    </Typography>

    <Box sx={{
      width: { xs: "90%", sm: "70%", md: "60%" },
      display: "flex",
      flexDirection: "column",
      gap: 2
    }}>

      <TextField sx={{ 
        borderRadius: "10px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",}}
        id="usuarioRegistro"
        name="usuarioRegistro"
        label="Usuario"
        placeholder="Nombre: Bryan"
        variant="outlined"
        fullWidth
      />

      <TextField sx={{ 
        borderRadius: "10px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",}}
        id="correo"
        name="correo"
        label="Correo"
        type="email"
        placeholder="correo@email.com"
        variant="outlined"
        fullWidth
      />

      <TextField sx={{ 
        borderRadius: "10px",
        boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",}}
        id="passwordRegistro"
        name="passwordRegistro"
        label="Contraseña"
        type="password"
        placeholder="Contraseña segura"
        variant="outlined"
        fullWidth
      />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#d21919",
          borderRadius: "10px",
          height: "45px"
        }}
      >
        Registrarse
      </Button>

    </Box>

  </Box>
);
