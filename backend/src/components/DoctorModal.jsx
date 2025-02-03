import React from "react";
import ReactDOM from "react-dom";

const DoctorModal = ({ doctor, onClose }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", textAlign: "center" }}>
        <h2>{doctor.name}</h2>
        <p>Especialidad: {doctor.specialty}</p>
        <p>Experiencia: {doctor.experience} años</p>
        <button onClick={onClose} style={{ marginTop: "10px" }}>
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
};

export default DoctorModal;
