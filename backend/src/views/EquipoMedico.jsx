import React, { useState } from 'react';
import { Container, Typography, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import DoctorCard from '../components/DoctorCard';
import { useHospital } from '../context/HospitalContext';

const EquipoMedico = () => {
  const { doctors } = useHospital();
  const [specialty, setSpecialty] = useState('');

  const filteredDoctors = specialty
    ? doctors.filter((doctor) => doctor.specialty === specialty)
    : doctors;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Equipo Médico
      </Typography>
      <FormControl fullWidth sx={{ mb: 4 }}>
        <InputLabel>Filtrar por Especialidad</InputLabel>
        <Select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          label="Filtrar por Especialidad"
        >
          <MenuItem value="">Todas</MenuItem>
          <MenuItem value="Cardiología">Cardiología</MenuItem>
          <MenuItem value="Pediatría">Pediatría</MenuItem>
          <MenuItem value="Neurología">Neurología</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={4}>
        {filteredDoctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} key={doctor.id}>
            <DoctorCard doctor={doctor} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EquipoMedico;
