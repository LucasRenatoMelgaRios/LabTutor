import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const NotasProfesorRoute = ({ children }) => {
  const { user } = useAuth();

  if (user?.id !== "51") {
    // Si el usuario no es el profesor, redirige a /home
    return <Navigate to="/home" replace />;
  }

  // Si es el usuario con ID 51, permite el acceso
  return children;
};
