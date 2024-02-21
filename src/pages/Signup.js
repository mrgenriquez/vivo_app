import React from 'react';
import { Button, TextField, Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  const handleSignup = () => {
   
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Registro</Typography>
        <form style={{ width: '100%', marginTop: 10 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nombre"
            name="nombre"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Correo Electrónico"
            name="correo"
            type="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
            style={{ marginTop: 20 }}
          >
            Registrarse
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: 10 }}>
          ¿Ya tienes una cuenta? <Link to="/">Inicia Sesión</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Signup;
