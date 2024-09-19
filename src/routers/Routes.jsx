import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { FirstClassPage } from '../pages/FirstClassPage';
import { SecondClassPage } from '../pages/SecondClassPage';
import { ThirdClassPage } from '../pages/ThirdClassPage';
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { QuizzPage } from '../pages/QuizzPage';
import { NotasPage } from '../pages/NotasPage';
import { LoginPage } from '../pages/LoginPage';
import { PrivateRoute } from '../components/PrivateRoute';
import { AuthProvider, useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación
import { FirstClassForum } from '../components/forum/FirstClassForum';
import { LandingPage } from '../pages/LandingPage';
import { NotasProfesorPage } from '../pages/NotasProfesorPage';
import { NotasProfesorRoute } from '../components/NotasProfesorRoute';
import { SyllabusPage } from "../pages/SyllabusPage"
import EmojiStore from '../pages/EmojiStore';
import { UsuarioInfoPage } from '../pages/UsuarioInfoPage';
import { SecondClassForum } from '../components/forum/SecondClassForum';
import { ThirdClassForum } from '../components/forum/ThirdClassForum';
const RoutesWrapper = () => {
  const { user } = useAuth(); // Asegúrate de que el contexto provee un token o estado de autenticación

  return (
    <Routes>
      {/* Redirige a /home si el usuario está logueado, de lo contrario, a /login */}
      {/* Renderiza la LandingPage en la ruta principal */}
      <Route path="/" element={<LandingPage />} />


      {/* Si el usuario está logueado, redirigir a /home */}
      <Route path="/login" element={user ? <Navigate to="/home" /> : <LoginPage />} />
      <Route
        path="/notasProfesor"
        element={
          <NotasProfesorRoute>
            <Header /> {/* Header visible solo en rutas privadas */}

            <NotasProfesorPage />
          </NotasProfesorRoute>
        }
      />

      {/* Rutas privadas solo accesibles si el usuario está autenticado */}
      <Route path="/home" element={
        <PrivateRoute>
          <Header /> {/* Header visible solo en rutas privadas */}
          <HomePage />
          <Footer /> {/* Footer visible solo en rutas privadas */}
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
      <Route path="/foro/1" element={
        <PrivateRoute>
          <Header />
          <FirstClassForum />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/foro/2" element={
        <PrivateRoute>
          <Header />
          <SecondClassForum />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/foro/3" element={
        <PrivateRoute>
          <Header />
          <ThirdClassForum />
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
      <Route path="/syllabus" element={
        <PrivateRoute>
          <Header />
          <SyllabusPage />
          <Footer />
        </PrivateRoute>
      } />

      <Route path="/emojisStore" element={
        <PrivateRoute>
          <Header />
          <EmojiStore />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/userInfo" element={
        <PrivateRoute>
          <Header />
          <UsuarioInfoPage />
          <Footer />
        </PrivateRoute>
      } />

    </Routes>
  );
};

export const MyRouters = () => {
  return (
    <HashRouter> {/* Sin basename, HashRouter se encargará de la navegación */}
      <AuthProvider>
        <RoutesWrapper />
      </AuthProvider>
    </HashRouter>
  );
};
