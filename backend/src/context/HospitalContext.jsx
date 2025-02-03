import React, { createContext, useContext, useState } from "react";


const HospitalContext = createContext();


export const useHospital = () => useContext(HospitalContext);

export const HospitalProvider = ({ children }) => {
 
  const [doctors] = useState([
    { id: 1, name: "Dr. Juan Pérez", specialty: "Cardiología", experience: 10, imageURL: "https://via.placeholder.com/100" },
    { id: 2, name: "Dra. Ana Gómez", specialty: "Pediatría", experience: 8, imageURL: "https://via.placeholder.com/100" },
    { id: 3, name: "Dr. Carlos Ruiz", specialty: "Neurología", experience: 5, imageURL: "https://via.placeholder.com/100" },
  ]);

 
  const [services] = useState(["Cardiología", "Pediatría", "Radiología", "Traumatología"]);

  
  const [appointments, setAppointments] = useState([]);

  
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <HospitalContext.Provider value={{ doctors, services, appointments, addAppointment }}>
      {children}
    </HospitalContext.Provider>
  );
};
