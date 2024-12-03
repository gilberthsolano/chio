import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import InfoPage from './pages/InfoPage';
import Servicios from './pages/Servicios';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import Galeria from './pages/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto flex flex-col min-h-screen">
        <Navigation />
        <Routes>
          {/* Redirección de '/' a '/chio' */}
          <Route path="/" element={<Navigate to="/chio" />} />
          <Route path="/chio" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
