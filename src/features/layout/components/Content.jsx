import * as React from 'react'

import { Card, CardContent, CardActions, Typography, Box, Button } from '@mui/material'

export const Content = () => {
  return (
    <Box sx={{
      width: "100%",
    }}>

          <Box sx={{
      width: "100%",
      minHeight: { xs: "45vh", sm: "60vh", md: "75vh", lg: "85vh" },
      backgroundImage: "url(/Airbrush-IMAGE-ENHANCER-1772585525624-1772585525624.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      borderBottom: "2px solid rgba(0,0,0,0.1)",
      display: "flex",
      alignItems: "flex-end",
      fontFamily: "'Poppins', sans-serif",
      px: { xs: 2, sm: 4, md: 6 },
      py: { xs: 1, sm: 3, md: 5 }
    }}>

      <Box sx={{
        width: { xs: "100%", sm: "80%", md: "60%", lg: "45%" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: 1, sm: 2 },
        textAlign: { xs: "center", md: "left" }
      }}>

        <Typography sx={{
          fontSize: { xs: "11px", sm: "13px", md: "14px" },
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: "#ffffff"
        }}>
          LANDING PAGE - TIENDA VIRTUAL
        </Typography>

        <Typography sx={{
          fontSize: { xs: "22px", sm: "32px", md: "42px", lg: "48px" },
          fontWeight: 700,
          color: "#ffffff",
          lineHeight: 1.2
        }}>
          Sistema simple de venta e administracion de figuras
        </Typography>

        <Typography sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          color: "#ffffff",
          lineHeight: 1.6
        }}>
          Presentamos figuras de edición limitada con excelente detalle y gran
          calidad inspiradas en el universo de Warhammer 40K, incluyendo algunos
          de los personajes más icónicos de esta saga.
        </Typography>

        <Button
        href="https://github.com/bryan524-art/warhammer-store"
        target="_blank"
        variant="contained"
        sx={{ backgroundColor: "#1976D2" }}
        >
        Ver repositorio en GitHub
        </Button>

                <Button
        href="https://vercel.com/bryan524-arts-projects/warhammer-store-ac67"
        target="_blank"
        variant="contained"
        sx={{ backgroundColor: "#1976D2" }}
        >
        Ver repositorio vercel
        </Button>
      </Box>

    </Box>

      <Box sx={{
        margin: "3%",
      }}>
      <Box
        sx={{
          width: { xs: "45%", sm: "30%", md: "18%", lg: "10%" },
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
        }}>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: 12, sm: 14, md: 16 },
          }}>
          Categorias
        </Typography>
      </Box>
        <Box 
        component="card"
        sx={{
          mx: 3,
          my: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-around" },
          gap: 3,
        }}>

{/* Card #1 */}

        <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 270, sm: 310, md: 350, lg: 390 },
            width: { xs: "100%", sm: "50%", md: "35%", lg: "28%" },
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "55%", sm: "60%", md: "65%" },
              overflow: "hidden",
            }}>
            <img
              src="/upscalemedia-transformed.png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
          <CardContent>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 1,
                }}>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 13, md: 14, lg: 15 },
                    paddingRight: 3,
                  }}>
                  Gestion de productos (figuras de edicion limitada)
                </Typography>
                <Box
                  sx={{
                    marginLeft: "auto",
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #001575",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 9, sm: 10, md: 11 },
                      color: "#001575",
                    }}>
                    Verificado
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En pre venta 
              </Typography>
              <Typography sx={{color: "#4e4e4e"}}>
                Figuras de edicion limitada sobre el universo de warhammer 40k, teniendo personajes iconicos de este mismo y diferentes facciones de la historia.
              </Typography>
            </Box>
          </CardContent>
        </Card>

{/* Card #1 */}

{/* Card #2 */}

        <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 270, sm: 310, md: 350, lg: 390 },
            width: { xs: "100%", sm: "50%", md: "35%", lg: "28%" },
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}>
          <Box
            component="card"
            sx={{
              width: "100%",
              height: { xs: "55%", sm: "60%", md: "65%" },
              overflow: "hidden",
            }}>
            <img
              src="/Gemini_Generated_Image_cfmicjcfmicjcfmi.png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
          <CardContent>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 1,
                }}>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 13, md: 14, lg: 15 },
                    paddingRight: 3,
                  }}>
                  Control de stock y aseguracion del producto
                </Typography>
                <Box
                  sx={{
                    marginLeft: "auto",
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #001575",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 9, sm: 10, md: 11 },
                      color: "#001575",
                    }}>
                    Verificado
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                Figuras de alta calidad
              </Typography>
              <Typography sx={{color: "#4e4e4e"}}>
                Las figuras de edicion limitada de warhamer 40k aseguran una excelente calidad un diseño fiel al universo de warhammer 40k y brindar una buena seguridad al cliente.
              </Typography>
            </Box>
          </CardContent>
        </Card>

{/* Card #2 */}

{/* Card #3 */}

<Card
          variant="outlined"
          sx={{
            minHeight: { xs: 270, sm: 310, md: 350, lg: 390 },
            width: { xs: "100%", sm: "50%", md: "35%", lg: "28%" },
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}>
          <Box
            component="card"
            sx={{
              width: "100%",
              height: { xs: "55%", sm: "60%", md: "65%" },
              overflow: "hidden",
            }}>
            <img
              src="/upscalemedia-transformed (1).png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
          <CardContent>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 1,
                }}>
                <Typography
                  sx={{
                    fontSize: { xs: 12, sm: 13, md: 14, lg: 15 },
                    paddingRight: 3,
                  }}>
                  Busqueda de productos
                </Typography>
                <Box
                  sx={{
                    marginLeft: "auto",
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #001575",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 9, sm: 10, md: 11 },
                      color: "#001575",
                    }}>
                    Verificado
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                Gran variedad
              </Typography>
              <Typography>
                Tenemos una alta variedad de figuras con un total de hasta 8 figuras 
              </Typography>
            </Box>
          </CardContent>
        </Card>
        </Box>

{/* Card #3 */}

        <Box sx={{
          mx: 3,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-around" },
          gap: 3,
        }}>
          <Card
          variant="outlined"
          sx={{
            margin: "3%",
            minHeight: { xs: 137, sm: 179, md: 199, lg: 225 },
            width: { xs: "100%", sm: "80%", md: "85%", lg: "85%" },
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}>
          <CardContent sx={{
            padding: "1.5rem"
          }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 1,
                }}>
                <Typography
                  sx={{
                    fontSize: { xs: 27, sm: 28, md: 29, lg: 30 },
                    paddingRight: 3,
                  }}>
                  ¿Con que fin se hace este?
                </Typography>
              </Box>
              <br />
              <Typography>
              Con el fin de iniciar un emprendimiento especializado en figuras de colección del universo de Warhammer 40K,
               buscamos ofrecer piezas de alta calidad que representen fielmente a sus facciones y personajes más emblemáticos.
              Nuestro objetivo es atraer tanto a coleccionistas como a jugadores que deseen ampliar sus ejércitos con modelos
              detallados y de edición limitada.
              planeamos posicionarnos en el mercado local y, según los resultados obtenidos, aumentar el stock y expandirnos
               progresivamente a nuevos mercados a través de plataformas digitales, consolidándonos como una tienda especializada y confiable.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        </Box>

        <Box sx={{
          mx: 4,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-around" },
          gap: 3,
        }}>
          <Card
          variant="outlined"
          sx={{
            margin: "3%",
            minHeight: { xs: 137, sm: 179, md: 199, lg: 225 },
            width: { xs: "100%", sm: "80%", md: "85%", lg: "85%" },
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            boxShadow: "2px 4px 8px rgba(0,0,0,0.3)",
          }}>
          <CardContent sx={{
            padding: "1.5rem"
          }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 1,
                }}>
                <Typography
                  sx={{
                    fontSize: { xs: 27, sm: 28, md: 29, lg: 30 },
                    paddingRight: 3,
                  }}>
                  Beneficios
              <Typography component="span"
                sx={{
                  my: 1,
                  color: "gray",
                  opacity: 0.6,
                }}>
                Altas especificaciones
              </Typography>
                </Typography>
              </Box>
              <Typography component="span" sx={{mx: 4}}>
                <ul>
                  <li>Alta calidad</li>
                  <li>Gran variedad</li>
                  <li>Diseños fieles al universo</li>
                  <li>Precios accesibles</li>
                </ul>
              </Typography>
            </Box>
          </CardContent>
        </Card>
        </Box>

      </Box>
    </Box>
  )
}