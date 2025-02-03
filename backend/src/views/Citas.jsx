import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';
import { useHospital } from '../context/HospitalContext';

const Citas = () => {
  const { appointments, addAppointment } = useHospital();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Agenda tu Cita
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Completa el formulario para programar tu cita.
      </Typography>
      <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 2, boxShadow: 3, mb: 4 }}>
        <AppointmentForm onSubmit={addAppointment} />
      </Box>
      <Typography variant="h5" component="h2" gutterBottom>
        Citas Agendadas
      </Typography>
      <AppointmentList appointments={appointments} />
    </Container>
  );
};

export default Citas;
