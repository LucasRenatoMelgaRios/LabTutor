import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { FirstClassPage } from "../pages/FirstClassPage";
import { SecondClassPage } from "../pages/SecondClassPage";
import { ThirdClassPage } from "../pages/ThirdClassPage";
// Importa aquí todas las páginas de clases adicionales
import { Header } from '../components/sections/Header';
import { Footer } from '../components/sections/Footer';
import { FirstQuizz } from '../components/quizzes/FirstQuizz';
import { QuizzPage } from '../pages/QuizzPage';
import { NotasPage } from '../pages/NotasPage';

export const MyRouters = () => {

    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/class/1" element={<FirstClassPage />} />
                <Route path="/class/2" element={<SecondClassPage />} />
                <Route path="/class/3" element={<ThirdClassPage />} />
                <Route path="/firstQuizz" element={<QuizzPage />} />
                <Route path="/notas" element={<NotasPage />} />

                {/* Añade las rutas adicionales aquí */}
            </Routes>
            <Footer />
        </HashRouter>
    );
};
