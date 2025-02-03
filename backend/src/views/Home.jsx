import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ServiceList from '../components/ServiceList';
import { useHospital } from '../context/HospitalContext';

const Home = () => {
  const { services } = useHospital();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Bienvenido al Hospital Nueva Vida
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Conoce nuestros servicios destacados y equipo médico.
      </Typography>
      <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Servicios Destacados
        </Typography>
        <ServiceList services={services} />
      </Box>
    </Container>
  );
};

export default Home;
