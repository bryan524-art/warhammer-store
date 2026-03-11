import * as React from "react";

import { Card, CardContent, CardActions, Typography, Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Myfavoritie = () => {

  const [favoritos, setFavoritos] = React.useState([]);

  React.useEffect(() => {
    const data = localStorage.getItem("favoritos");
    if (data) {
      setFavoritos(JSON.parse(data));
    }
  }, []);

  const eliminarFavorito = (nombre) => {
    const nuevos = favoritos.filter((f) => f.nombre !== nombre);

    setFavoritos(nuevos);

    localStorage.setItem("favoritos", JSON.stringify(nuevos));
  };

  return (
    <Box
      component="main"
      sx={{
        marginTop: { xs: "0.5%", sm: "1.5%", md: "2.5%" },
        minHeight: "120vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
      }}
    >

{/* TITULO */}

      <Box
        sx={{
          width: { xs: "45%", sm: "30%", md: "18%", lg: "12%" },
          mx: 3,
          my: 2,
          px: 0.7,
          py: 0.3,
          backgroundColor: "#002d68",
          borderRadius: "10px",
          border: "2px solid #002d68",
          display: "flex",
          justifyContent: "center",
          boxShadow: "4px 6px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 12, sm: 14, md: 16 },
          }}
        >
          Mis Favoritos
        </Typography>
      </Box>

{/* CONTENEDOR CARDS */}

      <Box
        sx={{
          mx: 3,
          my: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-around" },
          gap: 3,
        }}
      >

{favoritos.length === 0 && (
  <Typography>No tienes artículos en favoritos</Typography>
)}

{favoritos.map((articulo, index) => (

<Card key={index} variant="outlined" sx={{
minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
display: "flex",
flexDirection: "column",
borderRadius: "20px",
boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",}}>

<Box sx={{
width: "100%",
height: { xs: "55%", sm: "60%", md: "65%" },
overflow: "hidden",}}>

<img
src={articulo.imagen}
alt={articulo.nombre}
style={{
width: "100%",
height: "100%",
objectFit: "cover",
}}/>

</Box>

<CardContent>
<Typography
sx={{fontSize: { xs: 12, sm: 13, md: 14, lg: 15 },}}>
{articulo.nombre}
</Typography>

<Typography
sx={{
color: "gray",
opacity: 0.6,}}>
Artículo guardado
</Typography>
<Typography>
{articulo.precio} COP
</Typography>
<CardActions>

<Button variant="contained"sx={{
  border: "2px solid red",
  backgroundColor: "white",
  borderRadius: "10px",}}onClick={() => eliminarFavorito(articulo.nombre)}>
<DeleteIcon sx={{ color: "red" }} />
<Typography sx={{color: "red",ml: 1,}}>
Eliminar
</Typography>
</Button>
</CardActions>
</CardContent>
</Card>
))}
</Box>
</Box>

  );
};