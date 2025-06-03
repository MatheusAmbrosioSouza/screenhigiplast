// Home.tsx
import * as React from "react";
import Image from 'next/image';
import {
  Box,
  Container,
  Typography,
  Divider,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import {
  Person,
  LocalGroceryStore,
  SupportAgent,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { red } from "@mui/material/colors";

// Estilo reutilizável para botões com ícones verticais
const botaoEstilo = {
  color: "#000",
  padding: 0,
  minWidth: 80,
  flexDirection: "column",
  alignItems: "center",
  textTransform: "none",
};
const botaoEstiloCard = {
  color: "#000",
  padding: 0,
  minWidth: 50,
  minHeight: 40,
  flexDirection: "column",
  alignItems: "center",
  fontSize: "80",
  backgroundColor: "#fff",
  textTransform: "none",
};

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
      </Typography>
      <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function Home() {
  return (
    <>
      {/* Barra superior com campo de busca e ícones */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // coluna no mobile, linha no desktop
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          paddingLeft: 2,
          paddingRight: 3,
          py: 2,
          backgroundColor: "#e4efff",
          flexWrap: "wrap",
        }}
      >
      <Image
        src="/logo.png"
        alt="Logo"
        width={250} // Largura
        height={100} // Altura
        style={{ marginTop: '20px', position: 'relative', left: '10px' }} // Estilo direto
      />

        {/* Campo de pesquisa */}
        <Box
          component="input"
          type="search"
          placeholder="Pesquisar..."
          sx={{
            flexGrow: 1,
            width: "50vw", // metade da largura da tela
            maxWidth: "600px", // limita tamanho em telas grandes
            minWidth: "300px", // evita quebrar em telas pequenas
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1.2rem",
            backgroundColor: "transparent",
            caretColor: "#000",
            color: "#000",
            outline: "none",
            "&:focus": { borderColor: "#1976d2" },
          }}
        />

        {/* Botões de ação com ícones */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Button variant="text" sx={botaoEstilo}>
            <Person sx={{ fontSize: 50 }} />
            Login
          </Button>
          <Button variant="text" sx={botaoEstilo}>
            <LocalGroceryStore sx={{ fontSize: 50 }} />
            Carrinho
          </Button>
          <Button variant="text" sx={botaoEstilo}>
            <SupportAgent sx={{ fontSize: 50 }} />
            Suporte
          </Button>
        </Box>
      </Box>

      <Divider />

      {/* Barra inferior com categorias */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
          px: 4,
          py: 2,
          backgroundColor: "#e4efff",
        }}
      >
        {/* TODOS OS PRODUTOS */}
        <Typography
          variant="h6"
          component="span"
          sx={{ color: "#000" }}
        >
          TODOS OS PRODUTOS
        </Typography>
      
      <Box
        sx={{
          display: "flex",
          gap:2,
          marginLeft: "auto",
          backgroundColor: "#transparent",
        }}
      >
        {/* OFERTA */}
        <Button
          variant="text"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#000",
            textTransform: "none",
            padding: 0,
            minWidth: 0,
          }}
        >
          OFERTA
        </Button>

      {/* Separador visual */}
        <Box
          sx={{
            width: "1px",
            height: "40px",
            backgroundColor: "#000",
            mx: 2,
            display: { xs: "none", md: "block" }, // esconder no mobile
          }}
        />

        {/* NOVIDADES */}
        <Button
          variant="text"
          sx={{
            fontSize: { xs: "1rem", md: "1.25rem" },
            color: "#000",
            textTransform: "none",
            padding: 0,
            minWidth: 0,
          }}
        >
          NOVIDADES
        </Button>
      </Box>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // coluna no mobile, linha no desktop
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          paddingLeft: 2,
          paddingRight: 3,
          py: 2,
          backgroundColor: "#fadf3a",
          flexWrap: "wrap",
          height: "500px",
          weight: "100px",
        }}
      >
      </Box>
      <Box
        sx={{
          //display: "flex",
          flexDirection: { xs: "column", md: "row" }, // coluna no mobile, linha no desktop
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          px: 0,
          py: 2,
          backgroundColor: "#2a60a3",
          flexWrap: "nowrap",
          height: "700px",
          weight: "100%",
          border: "1px solid red",
        }}
      >
        <Container sx={{
          width: '100%',
          maxWidth: '1900px !important',
          //gap: 5,
          height: '650px',
          display: 'flex',
          border: "2px solid red",
          justifyContent: "space-around",
          alignItems: 'center',
        }}
        >
        <Button variant="text" sx={botaoEstiloCard}>
            <KeyboardArrowLeft/>
          </Button>
         <Card 
         sx={{
          display: "flex",
          justifyContent: "flex-start",
          height: "400px",
          weight: "400px",
         }}
         >
         <CardContent>
    <Typography variant="h6">Título do Card</Typography>
    <Typography variant="body2" color="text.secondary">
      Conteúdo do card aqui...
    </Typography>
  </CardContent>
         </Card>

          <Card 
         sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "400px",
          weight: "00px",
         }}
         >
         <CardContent>
    <Typography variant="h6">Título do Card2</Typography>
    <Typography variant="body2" color="text.secondary">
      Conteúdo do card2 aqui...
    </Typography>
  </CardContent>
         </Card>

         <Card 
         sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "400px",
          weight: "400px",
         }}
         >
         <CardContent>
    <Typography variant="h6">Título do Card3</Typography>
    <Typography variant="body2" color="text.secondary">
      Conteúdo do card3 aqui...
    </Typography>
  </CardContent>
         </Card>

          <Card 
         sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "400px",
          weight: "400px",
         }}
         >
         <CardContent>
    <Typography variant="h6">Título do Card4</Typography>
    <Typography variant="body2" color="text.secondary">
      Conteúdo do card4 aqui...
    </Typography>
  </CardContent>
         </Card>
         <Button variant="text" sx={botaoEstiloCard}>
            <KeyboardArrowRight/>
          </Button>
         <Card 
         sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "400px",
          weight: "400px",
         }}
         ></Card>
         </Container>
      </Box>
    </>
  );
}
