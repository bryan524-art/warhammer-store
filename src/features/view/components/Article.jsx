import * as React from 'react'

import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { Card, CardContent, CardActions, Typography, Box, Button  } from '@mui/material'

export const Article = () => {

  const [favoritos, setFavoritos] = React.useState(() => {
    const guardados = localStorage.getItem("favoritos");
    return guardados ? JSON.parse(guardados) : [];
  });

  const agregarFavorito = (articulo) => {

    const nuevosFavoritos = [...favoritos, articulo];

    setFavoritos(nuevosFavoritos);

    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  // carrito de compras 

    const [compra, setCompra] = React.useState(() => {
    const guardados = localStorage.getItem("compra");
    return guardados ? JSON.parse(guardados) : [];
  });

  const agregarCompra = (articulo) => {

    const nuevosCompra = [...compra, articulo];

    setCompra(nuevosCompra);

    localStorage.setItem("compra", JSON.stringify(nuevosCompra));
  };

    return(
      
    <Box component="main" sx={{
        marginTop: { xs: "0.5%", sm: "1.5%", md: "2.5%" },
        minHeight: "120vh",  
        width: "100%", 
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif"
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
          Articulos
        </Typography>
      </Box>
      <Box
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
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura1.png"
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
                  Teniente Primaris Ultramarines
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>150.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "Teniente Primaris Ultramarines",
                precio: "150000",
                imagen: "/Warhammer-figura1.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "Teniente Primaris Ultramarines",
                precio: "150000",
                imagen: "/Warhammer-figura1.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>

{/* Card #1 */}

{/* Card #2 */}

        <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura2.png"
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
                  Capellan de Warhammer 40k
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>200.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "Capellan de Warhammer 40k",
                precio: "200.000 COP",
                imagen: "/Warhammer-figura2.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "Capellan de Warhammer 40k",
                precio: "200.000 COP",
                imagen: "/Warhammer-figura2.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>

{/* Card #2 */}

{/* Card #3 */}

                <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura3.png"
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
                  Espiritu de batalla Ultramarines
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>180.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "Espiritu de batalla Ultramarines",
                precio: "180.000 COP",
                imagen: "/Warhammer-figura3.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "Espiritu de batalla Ultramarines",
                precio: "180.000 COP",
                imagen: "/Warhammer-figura3.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>

{/* Card #3 */}

{/* Card #4 */}

                <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura4.png"
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
                  Marin de los Angeles sangrientos
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>160.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "Marin de los Angeles sangrientos",
                precio: "160.000 COP",
                imagen: "/Warhammer-figura4.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "Marin de los Angeles sangrientos",
                precio: "160.000 COP",
                imagen: "/Warhammer-figura4.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>

{/* Card #4 */}

      </Box>
        <Box
        sx={{
          mx: 3,
          my: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "space-around" },
          gap: 3,
        }}>

{/* Card #5 */}

                <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura5.png"
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
                  lord calgar warhammer
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>300.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "lord calgar warhammer",
                precio: "300.000 COP",
                imagen: "/Warhammer-figura5.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "lord calgar warhammer",
                precio: "300.000 COP",
                imagen: "/Warhammer-figura5.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
    
{/* Card #5 */}

{/* Card #6 */}

                <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura6.png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
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
                  Supero marina templaria oscura
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>190.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "Supero marina templaria oscura",
                precio: "190.000 COP",
                imagen: "/Warhammer-figura6.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "Supero marina templaria oscura",
                precio: "190.000 COP",
                imagen: "/Warhammer-figura6.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>

{/* Card #6 */}

{/* Card #7 */}

                <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura7.png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
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
                  Teniente Primaris Templario oscuro
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>150.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "Teniente Primaris Templario oscuro",
                precio: "150000",
                imagen: "/Warhammer-figura7.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "Teniente Primaris Templario oscuro",
                precio: "150000",
                imagen: "/Warhammer-figura7.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>

{/* Card #7 */}

{/* Card #8 */}

                <Card
          variant="outlined"
          sx={{
            minHeight: { xs: 260, sm: 300, md: 340, lg: 380 },
            width: { xs: "100%", sm: "45%", md: "30%", lg: "23%" },
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
              src="/Warhammer-figura8.png"
              alt="Figura"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}/>
          </Box>
          <CardContent sx={{ flexGrow: 1 }}>
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
                  Teniente Primaris Gladiator
                </Typography>
                <Box
                  sx={{
                    px: 0.7,
                    py: 0.3,
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "2px solid #007542",
                  }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 10, sm: 11, md: 12 },
                      color: "#007542",
                    }}>
                    En stock
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  opacity: 0.6,
                }}>
                En estilo figura
              </Typography>
              <Typography>150.000 COP</Typography>
            </Box>
            <CardActions
              sx={{
                flexWrap: "wrap",
                gap: 1,
              }}>
              <Button onClick={() => agregarCompra({
                nombre: "Teniente Primaris Gladiator",
                precio: "150000",
                imagen: "/Warhammer-figura8.png"
              })} variant="contained" sx={buttonStyle}>
                <AddShoppingCartIcon sx={IconStyle} />
                <Typography component="span" sx={TextStyle}>Comprar</Typography>
              </Button>
              <Button onClick={() => agregarFavorito({
                nombre: "Teniente Primaris Gladiator",
                precio: "150000",
                imagen: "/Warhammer-figura8.png"
              })} variant="contained" sx={buttonFStyle}>
                <BookmarkAddedIcon sx={IconFStyle} />
                <Typography component="span" sx={TextFStyle} >Favoritos</Typography>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
{/* Card #8 */}

      </Box>
    </Box>
    )
}

const buttonStyle = {
  border: "2px solid blue",
  backgroundColor: "white",
  mx: 1,
  borderRadius: "10px",
}

const buttonFStyle = {
  border: "2px solid red",
  backgroundColor: "white",
  mx: 1,
  borderRadius: "10px",
}

const TextStyle = {
  color: "blue",
};

const TextFStyle = {
  color: "red",
}

const IconStyle = {
  color: "blue",
}

const IconFStyle = {
  color: "red",
}
