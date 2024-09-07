import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'; // Cambiado a HashRouter
import { HomePage } from '../pages/HomePage';
import { FirstClassPage } from '../pages/FirstClassPage';
import { SecondClassPage } from '../pages/SecondClassPage';
import { ThirdClassPage } from '../pages/ThirdClassPage';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { FirstQuizz } from '../components/quizzes/FirstQuizz';
import { QuizzPage } from '../pages/QuizzPage';
import { NotasPage } from '../pages/NotasPage';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from '../components/PrivateRoute';
import { AuthProvider, useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación

const RoutesWrapper = () => {
  const { user } = useAuth(); // Asegúrate de que el contexto provee un token o estado de autenticación

  return (
    <Routes>
      {/* Si el usuario está logueado, redirigir a /home en vez de a "/" */}
      <Route path="/" element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Rutas privadas */}
      <Route path="/home" element={
        <PrivateRoute>
          <Header /> {/* Header solo en rutas privadas */}
          <HomePage />
          <Footer /> {/* Footer solo en rutas privadas */}
        </PrivateRoute>
      } />
      <Route path="/class/1" element={
        <PrivateRoute>
          <Header />
          <FirstClassPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/class/2" element={
        <PrivateRoute>
          <Header />
          <SecondClassPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/class/3" element={
        <PrivateRoute>
          <Header />
          <ThirdClassPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/firstQuizz" element={
        <PrivateRoute>
          <Header />
          <QuizzPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/notas" element={
        <PrivateRoute>
          <Header />
          <NotasPage />
          <Footer />
        </PrivateRoute>
      } />
    </Routes>
  );
};

export const MyRouters = () => {
  return (
    <HashRouter basename="/LabTutor"> {/* basename debe coincidir */}
      <AuthProvider>
        <RoutesWrapper />
      </AuthProvider>
    </HashRouter>
  );
};
