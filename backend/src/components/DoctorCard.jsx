import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography } from '@mui/material';

const DoctorCard = ({ doctor }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <div style={{ height: '140px', backgroundColor: doctor.color || '#ccc' }}></div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doctor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Especialidad: {doctor.specialty}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Experiencia: {doctor.experience || 0} años
        </Typography>
      </CardContent>
    </Card>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    experience: PropTypes.number,
    color: PropTypes.string,
  }).isRequired,
};

export default DoctorCard;
