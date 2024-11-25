import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Importación correcta sin llaves
import InfoPage from './pages/InfoPage';  // Importación correcta sin llaves
import Servicios from './pages/Servicios';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import Galeria from './pages/Galeria';
import Footer from './components/Footer'; // Asegúrate de tener la ruta correcta

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto flex flex-col min-h-screen">
        <Navigation />
        <Routes>
        <Route path="/" element={<Navigate to="/chio" />} /> {/* Redirección a Inicio */}
          <Route path="/chio" element={<HomePage />} />  {/* Página de Inicio */}
          <Route path="/info" element={<InfoPage />} />  {/* Página de Información */}
          <Route path="/servicios" element={<Servicios />} />  {/* Página de Servicios */}
          <Route path="/galeria" element={<Galeria />} /> {/* Página de Galería */}
       
        </Routes>
        <Toaster />
        <Footer /> {/* Footer agregado aquí */}
      </div>
    </BrowserRouter>
  );
}

export default App;
