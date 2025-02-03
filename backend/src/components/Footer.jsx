import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        py: 2,
        mt: 'auto',
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Hospital Nueva Vida. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2">
      </Typography>
    </Box>
  );
};

export default Footer;
