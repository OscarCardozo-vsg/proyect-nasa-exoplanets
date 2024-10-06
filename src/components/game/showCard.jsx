import React from 'react';
import { Button, TextField, Container, Typography, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00796b', // Color personalizado
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const Eje2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Typography variant="h3" align="center" gutterBottom>
          Mi Aplicación con Tema Personalizado
        </Typography>
        
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        
        <Button variant="contained" color="primary" fullWidth>
          Enviar
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default Eje2;