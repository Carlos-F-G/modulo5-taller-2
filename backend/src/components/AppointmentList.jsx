import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const AppointmentList = ({ appointments }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
        Citas Agendadas
      </Typography>
      {appointments.length === 0 ? (
        <Typography variant="body1">No hay citas agendadas.</Typography>
      ) : (
        <List>
          {appointments.map((appointment, index) => (
            <ListItem key={index} sx={{ borderBottom: '1px solid #e0e0e0' }}>
              <ListItemText
                primary={`Paciente: ${appointment.patientName}`}
                secondary={`Doctor: ${appointment.doctor} | Fecha: ${appointment.date}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default AppointmentList;
