import React from 'react';
import { Button, TextField, Container, Paper, Typography } from '@mui/material';

const Login = () => {
  const handleLogin = () => {
    
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Iniciar Sesión</Typography>
        <form style={{ width: '100%', marginTop: 10 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Usuario"
            name="username"
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
            onClick={handleLogin}
            style={{ marginTop: 20 }}
          >
            Iniciar Sesión
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
