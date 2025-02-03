import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Hospital Nueva Vida
        </Typography>
        <Box>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/equipo-medico">
            Equipo Médico
          </Button>
          <Button color="inherit" component={Link} to="/citas">
            Citas
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
