import * as React from "react";
import {Box, Typography, Divider, Container,Button} from "@mui/material";
import {Person, LocalGroceryStore, SupportAgent} from '@mui/icons-material';


export default function Home() {
  return (
   <>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: 115,
        backgroundColor: "#e4efff",
        border: 2,
        justifyContent: "center",
        alignItems: "center", // centralizar verticalmente
        position: 'relative',
      }} 
      >
        <Button
      variant="text"
      sx={{
        position: 'absolute',
        right: 415,
        color: '#000000',
        padding: 0,
        minWidth: 80,
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'none', // para manter "Profile" sem letras maiúsculas automáticas
      }}
    >
      <Person sx={{ fontSize: 70 }} />
      Login
    </Button>

      <Button
      variant="text"
      sx={{
        position: 'absolute',
        right: 303,
        color: '#000000',
        padding: 0,
        minWidth: 80,
        flexDirection: 'column',
        alignItems: 'center',
        textTransform: 'none', // para manter "Profile" sem letras maiúsculas automáticas
      }}
    >
      <LocalGroceryStore sx={{ fontSize: 70 }} />
      Carrinho
    </Button>
         <Button
          variant="text"
          sx={{
            position: 'absolute',
            right: 190,
            color: '#000000',
            padding: 0,
            minWidth: 80,
            flexDirection: 'column',
            alignItems: 'center',
            textTransform: 'none', // para manter "Profile" sem letras maiúsculas automáticas
          }}
        >
          <SupportAgent sx={{ fontSize: 70 }} />
          Suporte
        </Button>
      <Box
        component="input"
        type="search"
        placeholder="Pesquisar..."
        sx={{
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 600,
          top:'50%',
          transform: "translateY(-50%)",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontSize: "24px",
          color: '#000000',
          caretColor: '#000000',
          width: "900px",
          outline: "none",
          "&:focus": {
            borderColor: "#1976d2",
          },
        }}
      />
      
    </Box>
      <Divider/>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "#e4efff",
        border: 2,
        justifyContent: "center",
        alignItems: "center",
        height: 125,
      }}
      >
                             {/*TODOS OS PRODUTOS*/}
      <Container
      sx={{
        display: "flex",
        width: "14%",
        backgroundColor: 'transparent',
        height: 35,
        justifyContent: "flex-star",
        alignItems: "center",
        position: 'absolute',
          left: 70,
      }}
      > 
      <Typography
              component="span"
              variant="h6"
              sx={{
                color: '#000'
              }}
            >
              TODOS OS PRODUTOS
            </Typography>
      </Container> 
                             {/*OFERTA*/}
      <Container
      sx={{
        display: "flex",
        width: "14%",
        backgroundColor: 'transparent',
        height: 35,
        justifyContent: "flex-star",
        alignItems: "center",
        position: 'absolute',
          right: 200,
      }}
      > 
       <Button
    variant="text"
    sx={{
      fontSize: "1.25rem", // equivalente a Typography h6
      color: "#000",
      textTransform: "none", // para manter o texto "OFERTA" como está
      padding: 0,
      minWidth: 0,
    }}
            >
              OFERTA
            </Button>
      </Container>
      <Box
        sx={{
          width: "1px",
          height: "40px",
          backgroundColor: "#000",
          position: "absolute",
          right: 377,
        }}
      />
                             {/*NOVIDADES*/}
      <Container
      sx={{
        display: "flex",
        width: "14%",
        backgroundColor: 'transparent',
        height: 35,
        justifyContent: "flex-star",
        alignItems: "center",
        position: 'absolute',
          right: 50,
      }}
      > 
       <Button
    variant="text"
    sx={{
      fontSize: "1.25rem", // equivalente a Typography h6
      color: "#000",
      textTransform: "none", // para manter o texto "OFERTA" como está
      padding: 0,
      minWidth: 0,
    }}
            >
              NOVIDADES
            </Button>
      </Container>
      </Box>
      </>
  );
}
