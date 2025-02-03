import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Box, Typography } from "@mui/material";

const AppointmentForm = ({ onSubmit }) => {
  const [patientName, setPatientName] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (patientName && doctor && date) {
      onSubmit({ patientName, doctor, date });
      setPatientName("");
      setDoctor("");
      setDate("");
      nameInputRef.current.focus();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h6">Agendar Cita</Typography>
      <TextField
        inputRef={nameInputRef}
        label="Nombre del Paciente"
        variant="outlined"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <TextField
        label="Doctor"
        variant="outlined"
        value={doctor}
        onChange={(e) => setDoctor(e.target.value)}
      />
      <TextField
        label="Fecha"
        type="date"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Agendar Cita
      </Button>
    </Box>
  );
};

AppointmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AppointmentForm;
