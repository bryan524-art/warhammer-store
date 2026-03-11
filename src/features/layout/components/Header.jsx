import * as React from 'react'
import { NavLink } from 'react-router-dom'

import CottageIcon from '@mui/icons-material/Cottage';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

import { AppBar, Toolbar, Button, Stack, Typography, Box, TextField } from '@mui/material'

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{
        minHeight: {
          xs: "45px",
          sm: "55px",
          md: "65px",
          lg: "75px"
        },
        py: {
          xs: 0.2,
          sm: 0.4,
          md: 0.6
        },
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif"
      }}>

        <Box sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 1, md: 2 }
        }}>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            width: { xs: "100%", lg: "20%" }
          }}>
            <Typography sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontSize: {
                xs: "10px",
                sm: "12px",
                md: "14px",
                lg: "16px"
                }
            }}>
              <AccessibilityNewIcon sx={{ fontSize: { xs: 18, md: 22 } }} />
              Sistema de Carrito
            </Typography>
          </Box>

          {/* BOTONES */}
          <Box sx={{
            width: { xs: "100%", lg: "50%" }
          }}>
            <Stack
              direction="row"
              spacing={{ xs: 0.5, sm: 1 }}
              flexWrap="wrap"
              justifyContent="center"
            >

              <Button component={NavLink} to="/" variant="contained" sx={buttonStyle}>
                <CottageIcon /> Inicio
              </Button>

              <Button component={NavLink} to="/articles" variant="contained" sx={buttonStyle}>
                <AssignmentIcon /> Articulo
              </Button>

              <Button component={NavLink} to="/offers" variant="contained" sx={buttonStyle}>
                <LocalOfferIcon /> Ofertas
              </Button>

              <Button component={NavLink} to="/myaccount" variant="contained" sx={buttonStyle}>
                <AccountCircleIcon /> Cuenta
              </Button>

              <Button component={NavLink} to="/mybusy" variant="contained" sx={buttonStyle}>
                <ShoppingBagIcon /> Compras
              </Button>

              <Button component={NavLink} to="/myfavoritie" variant="contained" sx={buttonStyle}>
                <FavoriteIcon /> Favoritos
              </Button>

            </Stack>
          </Box>

          {/* BUSCADOR */}
          <Box
            component="form"
            role="search"
            sx={{
              width: { xs: "100%", lg: "25%" },
              display: "flex",
              alignItems: "center",
              gap: 1
            }}>

            <TextField
              size="small"
              placeholder="Buscar..."
              sx={{
                backgroundColor: "white",
                borderRadius: "6px",
                flex: 1,

                "& .MuiInputBase-input": {
                  padding: {
                    xs: "2px 5px",
                    sm: "3px 6px",
                    md: "4px 7px"
                  },
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.7rem",
                    md: "0.75rem"
                  }
                }
              }}
            />

           <Button
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{
              borderRadius: "6px",
              textTransform: "none",

              fontSize: {
                xs: "0.55rem",
                md: "0.65rem"
              },

              padding: {
                xs: "2px 6px",
                md: "4px 8px"
              }
            }}>
            Buscar
          </Button>

          </Box>

        </Box>

        {/* TEXTO DESCRIPCION */}
        <Box sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: { xs: 0.5, md: 1 },
          textAlign: "center"
        }}>
          <Typography sx={{
            fontSize: { xs: "10px", sm: "12px", md: "13px" }
          }}>
            Aplicacion desarrollada en react para la gestion de productos,
            control de inventario y administracion de stock
          </Typography>
        </Box>

      </Toolbar>
    </AppBar>
  )
}

const buttonStyle = {
  boxShadow: "0px 2px 4px rgba(0,0,0,0.25)",
  borderRadius: "6px",
  textTransform: "none",

  fontSize: {
    xs: "0.5rem",
    sm: "0.6rem",
    md: "0.7rem"
  },

  padding: {
    xs: "1px 4px",
    sm: "2px 6px",
    md: "3px 8px"
  },

  minHeight: {
    xs: "22px",
    sm: "26px",
    md: "30px"
  },

  "& .MuiSvgIcon-root": {
    fontSize: {
      xs: "12px",
      sm: "13px",
      md: "14px"
    }
  }
}