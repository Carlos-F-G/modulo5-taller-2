import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import EquipoMedico from './views/EquipoMedico';
import Citas from './views/Citas';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/equipo-medico" element={<EquipoMedico />} />
          <Route path="/citas" element={<Citas />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
