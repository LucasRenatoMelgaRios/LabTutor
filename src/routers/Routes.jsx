import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { useState } from "react";

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
import { EmojiStore } from '../pages/EmojiStore';
import { UsuarioInfoPage } from '../pages/UsuarioInfoPage';
import { SecondClassForum } from '../components/forum/SecondClassForum';
import { ThirdClassForum } from '../components/forum/ThirdClassForum';
import { RubricaInformeDePracticasPage } from '../pages/Rubricas/RubricaInformeDePracticasPage';
import { FichaDeEvaluacionPage } from '../pages/Rubricas/FichaDeEvaluaciónPage';
import { BiologicalSamplesQuiz } from '../components/quizzes/BiologicalSamplesQuiz';
import { ConditionalFactorsQuiz } from '../components/quizzes/ConditionalFactorsQuiz';
import { FourthClassPage } from '../pages/FourthClassPage';

const RoutesWrapper = () => {
  const { user } = useAuth(); // Asegúrate de que el contexto provee un token o estado de autenticación
  const [acquiredEmojis, setAcquiredEmojis] = useState([]);

  const updateEmojis = (newEmojis) => {
    setAcquiredEmojis(newEmojis);
  };

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
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} /> {/* Header visible solo en rutas privadas */}
          <HomePage />
          <Footer /> {/* Footer visible solo en rutas privadas */}
        </PrivateRoute>
      } />
      <Route path="/class/1" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <FirstClassPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/class/2" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <SecondClassPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/class/3" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <ThirdClassPage />
          <Footer />
        </PrivateRoute>
      } />
            <Route path="/class/4" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <FourthClassPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/secondQuizz" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <ConditionalFactorsQuiz />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/firstQuizz" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <BiologicalSamplesQuiz />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/foro/1" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <FirstClassForum />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/foro/2" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <SecondClassForum />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/foro/3" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <ThirdClassForum />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/notas" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <NotasPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/syllabus" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <SyllabusPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/RubricaDePracticas" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <RubricaInformeDePracticasPage />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/FichaDeEvaluacion" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <FichaDeEvaluacionPage />
          <Footer />
        </PrivateRoute>
      } />

      <Route path="/emojisStore" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <EmojiStore updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
          <Footer />
        </PrivateRoute>
      } />
      <Route path="/userInfo" element={
        <PrivateRoute>
          <Header updateEmojis={updateEmojis} acquiredEmojis={acquiredEmojis} />
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
