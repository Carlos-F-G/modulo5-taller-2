import React, { useState, useEffect, useCallback } from "react";
import DoctorCard from "./DoctorCard";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDoctors = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://jsonplaceholder.typicode.com/users"); // API de prueba
      setDoctors(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Error al cargar los datos. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();
  }, [fetchDoctors]); // Evita múltiples llamadas innecesarias

  return (
    <div>
      <h2>Lista de Doctores</h2>
      {loading && <p>Cargando...</p>}
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          <p>{error}</p>
          <button onClick={fetchDoctors}>Reintentar</button>
        </div>
      )}
      <button onClick={fetchDoctors}>Recargar Datos</button>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={{ 
            name: doctor.name, 
            specialty: "Especialidad Desconocida", 
            color: "#ccc" // Cuadro de color en lugar de imagen
          }} />
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
